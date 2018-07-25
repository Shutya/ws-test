const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 8080;

server.listen(port, () => {
    console.log('Server listening at port ', port);
});

io.on('connection', (socket) => {
    socket.on('new user', (username) => {
        socket.username = username;
        socket.emit('login', {
            usersCount: io.engine.clientsCount
        });
        socket.broadcast.emit('user joined', {
            username: socket.username,
            usersCount: io.engine.clientsCount
        });
    });

    socket.on('new message', (message) => {
        socket.emit('new message', {
            username: 'You',
            message
        });
        socket.broadcast.emit('new message', {
            username: socket.username,
            message
        });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('user left', {
            username: socket.username,
            usersCount: io.engine.clientsCount
        });
    });
});
