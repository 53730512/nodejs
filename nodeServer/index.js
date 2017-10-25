/**
 * Created by peng on 2015/10/1.
 */
var server = require("./server")
var router = require("./router")
var requestHandlers = require("./requestHandlers")

var handle={};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/cmdsync"] = requestHandlers.cmdsync;
handle["/login"] = requestHandlers.login;
handle["/loadmailList"] = requestHandlers.loadmailList; 
handle["/loadServerList"] = requestHandlers.loadServerList; 
server.start(router.route, handle);
