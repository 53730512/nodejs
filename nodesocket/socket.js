/**
 * Created by peng on 2015/12/8.
 */

function socket() {
    var net = require("net");
    this.num=0;

    this.onConnect = null;
    this.onData = null;
    this.onClose = null;

    this.start = function(port)
        {
            var server = net.createServer();
            server.listen(port,
                function () {
                    console.log("server is listening on" + port);
                })

            server.on("connection", function(socket)
			{
				 if(this.onconnect)
				 {
					this.onconnect(socket);
				 }
				 
				 socket.write("welcome");
            });

            server.on("close", function(socket)
            {
				console.log("close");
                if(this.onClose)
                {
                    this.onClose(socket);
                }
            });
        }
		
	this.setFun = function(fun)
	{
		this.onConnect = fun;
	}
}

module.exports = socket;
