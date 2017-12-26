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
const socketio = require('socket.io')
const io = socketio(server)



    io.on('connection', socket => {
        console.log('socket connected')



        socket.on('move', student => {

            console.log(student)
            let newLocation = student.to
            Student.findOne({where: {
                id: student.who
            }})
            .then(student => {
                student.updateAttributes({
                    LocationId: newLocation
                })
                .then(student => {
                    io.sockets.emit('refresh', {
                        student: student,
                    })
                })
            })
        })
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
                    controller.updateHousePoints(student.HouseId);
                    io.sockets.emit('update');
                })
            })
        })
        socket.on('hex', id => {
            console.log('dummy')
            Student.findOne({where: {
                id: id
            }})
            .then( student => {
                let hex = student.points - 1;
                student.updateAttributes({
                    points: hex
                })
                .then(student => {
                    controller.updateHousePoints(student.HouseId);
                    io.sockets.emit('update', {
                        points: student.points
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

