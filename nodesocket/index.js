/**
 * Created by Administrator on 2016/3/2.
 */
var socketModule = require('./socket.js');
var socket = new socketModule();

var onConnect = function(socket)
{
    console.log(" connect");
}

socket.setFun(onConnect);

socket.onClose = function(socket)
{
    console.log(" close");
}

socket.start(80);

