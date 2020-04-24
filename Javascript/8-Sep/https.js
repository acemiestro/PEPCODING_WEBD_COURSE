var https = require("https");
var fs = require("fs");
//https://jsonplaceholder.typicode.com/

const options = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443, //tcp port
    path: "/users", //end point 
    method: "GET"
};

var request = https.request(options, function(res)//res->response
{
	var wholedata=""; //data
    res.on("data", function(chunk)//data comes in form of chunks
	{
	   //utf8 is readable format
       wholedata+=chunk;
    }); //end
    res.on("end", function()
	{
        var JSONobj = JSON.parse(wholedata);
        // console.log(JSONobj);
        for(var i = 0; i < JSONobj.length; i++){
            fs.writeFileSync(JSONobj[i]["username"] + ".txt", JSON.stringify(JSONobj[i]));
        }
    });
});
request.end();