var https = require("https");
var fs = require("fs");
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

const options = {
    hostname: "api.nasa.gov",
    port: 443, //tcp port
    path: "/planetary/apod?api_key=DEMO_KEY&date=2018-02-02", //end point 
    method: "GET"
};

var request = https.request(options, function(res) //res->response
{   
	var wholedata = ""; //data
    res.on("data",function(chunk) //data comes in form of chunks
	{
		//utf8 is readable format
       wholedata += chunk;
    }) //end
	
    res.on("end", function()
	{
        var JSONobj = JSON.parse(wholedata); //console.log(JSONobj);
        console.log(JSONobj.url);
        const file = fs.createWriteStream("file.jpg");
        const reques = https.get(JSONobj.url, function(response)
		{
            response.pipe(file);
        });

    })
})
request.end();