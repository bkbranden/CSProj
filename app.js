var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));


app.post('/', (req, res) => {
  io.emit('request', req.body);
});

io.on('connection', (socket) => {
  console.log("A user connnected");
});

var server = http.listen(3000, () => {
  console.log('server is listening to port ', server.address().port);
});
