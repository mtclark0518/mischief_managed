const express = require('express')
const http = require('http')
const app = express();
const server = http.createServer(app)
const PORT = process.env.PORT || 1979
const bodyParser = require('body-parser');
const path = require('path')
const routes = require('./backend/config/routes')
const {Client} = require('pg')

const log = (stuff) => console.log(stuff)


const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect( (error) => {
	if (error) { log('error yo: ', error) } else { log('connected to db') }
});

//body-parser functionality
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

server.listen(PORT, () => log('Shakedown ' + PORT));


//SOCKET FUNCTIONALITY
const db = require('./backend/models')
const controller = require('./backend/controller/controller')
const Student = db.models.Student
const House = db.models.House
const socketio = require('socket.io')
const io = socketio(server)


const updateHousePoints = houseId => {
    House.findOne({
        where: {id: houseId}, 
        include: [ { model:Student }]})
    .then(house => {
        let students = house.Students;
        let individualPoints = students.map( student => {
            return student.points;
        })
        let totalPoints = individualPoints.reduce((acc, cv) => acc + cv);
        house.updateAttributes({
            points : totalPoints
        });
    });
};
io.on('connection', socket => {
    console.log('socket connected')


    socket.on('honor', id => {
        Student.findOne({where: {
            id: id
        }})
        .then(student => {
            let honor = student.points + 2;
            student.updateAttributes({
                points: honor,
            })
            .then(student => {
                updateHousePoints(student.HouseId);
                io.sockets.emit('update score', {
                    student: student
                });
            })
        })
    })
    socket.on('hex', id => {
        Student.findOne({where: {
            id: id
        }})
        .then( student => {
            let hex = student.points - 1;
            student.updateAttributes({
                points: hex
            })
            .then(student => {
                updateHousePoints(student.HouseId);
                io.sockets.emit('update score', {
                    student: student
                })
            })
        })
    })

    socket.on('move', student => {

        let update = student.location
        Student.findOne({where: {
            id: student.student
        }})
        .then(student => {
            student.updateAttributes({
                LocationId: update
            })
            .then(student => {
                io.sockets.emit('update location', {
                    student: student,
                })
            })
        })
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
        socket.disconnect()
    })

})
    // io.on('connection', socket => {
    //     console.log('socket connected')

    //     socket.emit('welcome', () => {
    //         message: 'welcome user'
    //     })
    //     socket.on('disconnect', () => {
    //         console.log('user disconnected')
    //     })
    
    // })

// const db = require('./backend/models')
// const socketio = require('socket.io')
// const io = socketio(server)
// io.on('connection', (socket) => {
//   db.models.container.findOne({
//     where: {id : 1}})
//     .then(response => {
//       let users = parseInt(response.dataValues.activeUsers)      
    //   log('a user connected');
//       users++
//       response.updateAttributes({ 
//         activeUsers: users })
//         .then(response => {
//           let updatedUsers = response.dataValues.activeUsers
//           io.sockets.emit('update users', {
//             users: updatedUsers
//           })
//           let number = response.dataValues.number
//           io.sockets.emit('welcome', {
//             number: number,
//             name: 'iterator',
//           })

//         })
//     });

//   socket.on('iterate', data => {
//     let changeBy = parseInt(data)
//     db.models.container.findOne({
//       where: {id : 1}
//     })
//     .then( number => {
//       let numTo = parseInt(number.dataValues.number);
//       changeBy = numTo + changeBy;
//       number.updateAttributes({
//         number: changeBy
//       })
//       .then( newNumber => {
//         let newNum = newNumber.dataValues.number;
//         io.sockets.emit('iterated', newNum)
//       });
//     });
//   });

//   socket.on('disconnect', () => {
//     db.models.container.findOne({
//       where: {id : 1}
//     })
//     .then(response => {
//       let users = response.dataValues.activeUsers
//       log('a user dipped')
//       users--
//       response.updateAttributes({
//         activeUsers: users 
//       })
//       .then(response => {
//         let updatedUsers = response.dataValues.activeUsers
//         io.sockets.emit('update users', {
//           users: updatedUsers 
//         })
//       })
//     });
//   });
// });

