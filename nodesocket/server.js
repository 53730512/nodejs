var io = require('socket.io').listen(10081);
io.sockets.on('connection', function (socket) {
  console.log("3422");
  socket.emit("news", {
    hello: "hello world"
  });
  socket.on('test', function (data) {
    console.log(data);
  });
});
console.log("server on" + 10081);