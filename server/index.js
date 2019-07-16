var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

// When the server receives a post request on /sendData
app.post('/sendData', function (req, res) {

    //send data to sockets.
    io.sockets.emit('event', { message: "Hello from server!" })
    
    res.send({});
});

// When a new connection is requested
io.on('connection', function (socket) {
    console.log('User Connected!');

    // Send to the connected user
    socket.emit('event', { message: 'Connected !!!!' });
    
    // On each "status", run this function
    socket.on('status', function (data) {
        console.log(data);
    });
});

// Listen to port 3000
http.listen(3000, function () {
    console.log('listening on *:3000');
});

