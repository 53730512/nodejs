/**
 * Created by peng on 2015/10/1.
 */
var exec = require("child_process").exec;
var quirestring = require("querystring")
var formidable = require('formidable');
var url = require('url');
sys = require('util');

var slist = require("./slist")
function start(response, postData)
{
    console.log("request hander 'start' was called");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
        '</body>'+
        '</html>';

        response.writeHead(200, {"Content-Type":"text/html", "charset":"UTF-8"});
        response.write(body);
        response.end();
}

function cmdsync(response, postData, request)
{
    var query = url.parse(request.url, true).query;
    var data = query.data;
    data = JSON.parse(data);
    switch(data.cmd)
    {
        case 1001:
            login(response, data);
            break;
    }
}

function login(response, pdata)
{
    //response.writeHead(200, {'content-type': 'text/plain'});
   // response.write(JSON.stringify(pdata) );
    response.end("login OK");
}

function loadmailList(response, pdata)
{
    //response.writeHead(200, {'content-type': 'text/plain'});
   // response.write(JSON.stringify(pdata) );
    response.end("loadmailList OK"+pdata);
}

function upload(response, postData, request)
{
    //console.log("request hander 'upload' was called");
    //response.writeHead(200, {"Content-Type":"text/html", "charset":"UTF-8");
    //response.write(quirestring.parse(postData).text);
    //response.end();

    var form = new formidable.IncomingForm();
    form.parse(request, function(err, fields, files) {
        response.writeHead(200, {'content-type': 'text/plain'});
        response.write('received upload:\n\n');
        response.end(sys.inspect({fields: fields, files: files}));
    });
}

function loadServerList(response)
{
	response.end(slist.loadServerList());
}

exports.start = start;
exports.upload = upload;
exports.cmdsync = cmdsync;
exports.login = login;
exports.loadmailList = loadmailList;
exports.loadServerList = loadServerList;

