const db = require('../models')

module.exports = (io) => {
    
    io.on('connection', (socket) => {
        console.log('socket connected')

        io.sockets.emit('welcome', {
            message: 'welcome user'
        })
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
    
    })
}