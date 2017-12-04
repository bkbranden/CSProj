var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

var port = process.env.PORT || 3000;


app.post('/', (req, res) => {
  io.emit('request', req.body);
});

io.on('connection', (socket) => {
  console.log("A user connnected");
});

var server = app.listen(port, () => {
  console.log('server is listening to port ' + port);
});
