var express = require('express');
var http = require('http');
var io = require('socket.io');
var LogicalModule= require('LogicalModule');
var app = express();
app.use(express.static('./public'));

var server1 = http.createServer(app).listen(8000);

io = io.listen(server1);
io.sockets.on("connection", function(socket) {
	var message_to_client = {
		data : "Connection with the server1 established at 8000"
	};
	socket.send(JSON.stringify(message_to_client));
	
	console.log('Socket.io Connection with the client established');
});
console.log('127.0.0.1:8000/login.html');