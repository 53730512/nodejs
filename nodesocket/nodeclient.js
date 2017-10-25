var net = require('net');
var iconv = require('iconv-lite');
var HOST = '127.0.0.1';
var PORT = 10081;


for(var i=1; i <= 1; i++)
{
	var client = new net.Socket();
	client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据 
    //client.write('I am Chuck Norris!');

	});

	// 为客户端添加“data”事件处理函数
	// data是服务器发回的数据
	client.on('data', function(data) {
		
		
		console.log(iconv.decode(data, 'gb2312'));
		// 完全关闭连接
		//client.destroy();
		//client.write("abc\n");

	});

	// 为客户端添加“close”事件处理函数
	client.on('close', function() {
		console.log('Connection closed');
	});
}