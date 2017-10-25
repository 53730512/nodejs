/**
 * Created by peng on 2015/10/1.
 */
function route(handle, pathname, response, postData, request)
{
    console.log("about to route a request for"+pathname);
    if(typeof(handle[pathname]) == 'function')
    {
        handle[pathname](response, postData, request);
    }
    else
    {
        return "no request handler found for" + pathname;
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;