var app = require('express') ();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket) {
	socket.on('chat message',function(msg) {
		io.emit('chat message:', msg);
	});
});

http.listen(process.env.PORT||5000,function() {
	console.log('listening to port 5000');
});