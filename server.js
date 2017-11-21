const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const app = express();
const server = http.createServer(app)
const socketio = require('socket.io')
const PORT = process.env.PORT || 1979
const log = (stuff) => console.log(stuff)
const {Client} = require('pg')
const db = require('./backend/models')
const client = new Client({ connectionString: process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/mischiefmanaged' });
client.connect( (err) => {
	if (err) { log('error yo: ', err)} else {log('connected to db')}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(express.static(path.join(__dirname, 'backend/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/backend/build/index.html'));
});


server.listen(PORT, () => log('Shakedown ' + PORT));


let number = null;
let users = 0;


const io = socketio(server)
io.on('connection', (socket) => {
  log('a user connected');
  users++
  io.sockets.emit('update users', {
      users: users
  })
  socket.emit('welcome', {
    number: number,
    name: 'real-time iterator demonstration'
  })
  


  socket.on('iterate', () => {
    number++    
        db.models.container.findOne({where: {id : 1}}).then(number =>{
        console.log(number)        
        let num = number.dataValues.number
        console.log('this is num: ', num)
        num++
        console.log('just apply iterate and num becomes: ', num)
        number.updateAttributes({
            number: num
        }).then(newNumber=>{
        let newNum = newNumber.dataValues.number;
        console.log('here is the updated number')
        console.log(newNum)
        io.sockets.emit('iterated', newNum)
      })
    })
    
  })
  socket.on('decrement', () => {
        db.models.container.findOne({where: {id : 1}}).then(number =>{
        console.log(number)        
        let num = number.dataValues.number
        console.log('this is num: ', num)
        num--
        console.log('just apply iterate and num becomes: ', num)
        number.updateAttributes({
            number: num
        }).then(newNumber=>{
        let newNum = newNumber.dataValues.number;
        console.log('here is the updated number')
        console.log(newNum)
        io.sockets.emit('decremented', newNum)
      })
    })
    
  })


  socket.on('disconnect', () => {
      log('a user dipped')
      users--
      io.sockets.emit('update users', {
        users: users
      })
  });
    
});

