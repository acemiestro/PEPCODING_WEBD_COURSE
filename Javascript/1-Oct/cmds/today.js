var getLocation = require("../utilities/location");
var getWeather = require("../utilities/weather");

module.exports = async function(location) 
{
	var myLocation = location || (await getLocation());
	var weather = await getWeather(myLocation);
    var temp = Math.ceil(weather[0]["the_temp"]);
	var conditions = (weather[0]["weather_state_name"]);
	console.log(`Current conditions in ${myLocation}`)
    console.log(`	${temp}°C	${conditions}    `);
};
