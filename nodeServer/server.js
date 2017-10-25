var http = require('http');
var url = require('url');


function start(route, handle)
{
	function onRequest(request, response)
	{
		var parseResult = url.parse(request.url)
		var pathName = parseResult.pathname;
		if(pathName == "/favicon.ico")
		{
			return;
		}

		var postData = "";
		request.setEncoding("utf8");
		request.addListener("data", function(postDataChunk)
		{
			postData += postDataChunk;
			//console.log("recive post data chunk'"+postDataChunk+"'" );
		});

		request.addListener("end", function()
		{
			route(handle, pathName, response, postData, request);
		})

	}
	var server = http.createServer(onRequest);
	server.listen(1333, "127.0.0.1");
	console.log("Server running at http://127.0.0.1:1333");
}

exports.start = start;