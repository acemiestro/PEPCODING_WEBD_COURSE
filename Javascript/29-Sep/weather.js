var axios = require("axios");
var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "cool>"
});

reader.prompt();
reader.on("line", function(data) 
{
	var cmd = data.split(" ")[0];
	var city = data.split(" ")[1];
	helper(city, cmd).then(function()
	{
		reader.prompt();
	});
});

async function helper(city, cmd) 
{
	try
	{
		var response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${city}`);
		// console.log(response["data"])
		var woeid = response["data"][0]["woeid"];
		var weather = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
		var consolidated_Weather = weather["data"]["consolidated_weather"];
		console.log(consolidated_Weather);
		if(cmd == "today") 
			console.log(consolidated_Weather[0]);
  
		else if(cmd == "forecast") 
			console.log(consolidated_Weather);
  
		else 
			console.log("Wrong Command");
	}
	
	catch(err)
	{
		console.log(err)
	}
}

// helper();
