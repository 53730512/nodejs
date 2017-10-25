/**
 * Created by peng on 2015/12/8.
 */
var net = require("net");
var num=0;
var server = net.createServer(function(connnection)
{
    num++;
    console.log(num+"client connected!");
    connnection.on("end", function()
    {
        console.log("disconnect");
    });

    connnection.write('Hello World!\r\n');

});

server.listen(8080, function()
{
    console.log("server is listening");
})