var app = require('express')();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

//var util = require('util');
var userInfo = require("./user")

//var test1 = new test();
//console.log(test1.e);
			
var userList = new Object;
server.listen(80);
console.log("server listen at port:"+80);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
 //console.log("http coming");
});
io.sockets.on('connection', function (socket) {
	//console.log(JSON.stringify(socket));
	console.log(socket.handshake.headers.host +"　connect ok");
	
	var test1 = new userInfo();
	//test1.setInfo(socket);
   userList[socket.handshake.headers.host] = test1;
//   socket.emit('news', util.inspect(socket.handshake.headers.host));
   socket.on('disconnect', function (data) {
		//console.log(socket.handshake.headers.host+" disconnected");
		console.log("disconnect");
   });
})
