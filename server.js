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


// const client = new Client({ connectionString: process.env.DATABASE_URL});
// client.connect( (err) => {
// 	if (err) { log('error yo: ', err)} 
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


server.listen(PORT, () => log('Shakedown ' + PORT));


let number = 0;
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
    io.sockets.emit('iterated', number)
  })

  socket.on('decrement', () => {
    number--
    io.sockets.emit('decremented', number)
  })

  socket.on('disconnect', () => {
      log('a user dipped')
      users--
      io.sockets.emit('update users', {
        users: users
      })
  });
    
});
