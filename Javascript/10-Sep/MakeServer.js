var http = require("http");
var fs = require("fs");

var myFile = fs.readFileSync("index.html");
var server = http.createServer(function(req, resp)
{
    console.log(req.url); //Headers
    resp.writeHead(200, {"Contenet-type": "text/html"});
    resp.write(myFile);
    if(req.url == "/about")
	{
		resp.write("Serving from a Node Server ");
		resp.end("THE END");
	}
    else if(req.url == "/" || req.url == "")
	{
        resp.end("You are at Home Page");
    }
    else 
	{
        resp.end("ERROR 404 Page  not found");
    }
    resp.end();
});
server.listen(3000, function()
{
    console.log("Server has started on port 3000");
});