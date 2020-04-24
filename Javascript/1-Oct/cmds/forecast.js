var getLocation = require("../utilities/location");
var getWeather = require("../utilities/weather");
module.exports = async function(location) 
{
	var myLocation = location || (await getLocation());
	var data = await getWeather(myLocation);
	console.log(`Forecast for ${myLocation}`);
	console.log();
	for(var i = 0; i < data.length; i++)
	{
		var date = await data[i]["applicable_date"]
		var min = Math.ceil(await data[i]["min_temp"])
		var max = Math.ceil(await data[i]["max_temp"])
		var weather = await data[i]["weather_state_name"]
		console.log(`	${date} - ${min}°C | ${max}°C | ${weather}`)
	}
};
