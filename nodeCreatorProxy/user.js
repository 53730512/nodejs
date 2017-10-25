
function user()
{
	
	var iconv = require('iconv-lite');

	
				var net = require('net');
			console.log('dddd');
			var HOST = '192.168.10.251';
			var PORT = 5001;
			this.skt = new net.Socket();
			this.skt.connect(HOST, PORT, function(sk)
				{
					console.log('dddd');
					//console.log(socket.handshake.headers.host+" connected!");
				}
			);
			
	this.skt=0;	
	this.setInfo=function(socket)
	{
		//this.socket = socket;
		console.log("connect to MudOS");
		
		setTimeout(function()
		{
			var net = require('net');
			console.log('dddd');
			var HOST = '192.168.10.251';
			var PORT = 5001;
			this.skt = new net.Socket();
			this.skt.connect(HOST, PORT, function(sk)
				{
					console.log('dddd');
					//console.log(socket.handshake.headers.host+" connected!");
				}
			);
		}, 100)
	};
	
}
module.exports = user;