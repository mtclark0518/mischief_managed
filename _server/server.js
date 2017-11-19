const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const app = express();
const server = http.createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 1984
const log = (stuff) => console.log(stuff)
const api = require('./_controller/api.controller')
const {Client} = require('pg')
const client = new Client({ connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/mischiefmanaged'});
// log(client)
client.connect( (err) => {
	if (err) {
		log('error yo: ', err.stack)
	} else {
    log('connected to db')
    // log(api.enterHogwarts)
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.get('*', (req, res) => {
    res.send('hi')
});

server.listen(PORT, () => log('listening on ' + PORT));


let number = 0;

io.on('connection', (socket) => {
  log('a user connected');
  
  socket.emit('welcome', {
    number: number,
    name: 'hogwarts'
  });

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
  });
});

