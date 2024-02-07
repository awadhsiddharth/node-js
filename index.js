// Node server which is going to handle socket io connections

const io = require('socket.io')(8000)

const users = {};


io.on('connection', socket => {
    socket.on('new-user-joined', names => {
        console.log("New User:", names);
        users[socket.id] = names;
        socket.broadcast.emit('user-joined',names);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive', {message:message,name:user[socket.id]})
    });

});