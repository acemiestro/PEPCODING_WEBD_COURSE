var axios = require("axios")
var readline = require("readline");
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "cool>"
});
reader.prompt();

reader.on("line", function (data) {
    var command = data.split(" ")[0];
    var parameter = data.split(" ")[1];
	main(parameter, command).then(function()
	{
		reader.prompt();
	})
})


async function main(city, cmd)
{
	try
	{
		var response = await axios.get("https://www.metaweather.com/api/location/search/?query=${city}")
		var woeid = response
		console.log(woeid)
		// var weather = await axios.get("https://www.metaweather.com/api/location/${woeid}")
		// var consolidated_weather = weather["data"]
		
		// if(command == "today")
			// console.log(consolidated_weather[0])
		
		// else if(command == "forecast")
			// console.log(consolidated_weather)
		
		// else if (command == "exit")
			// reader.close();

		// else
		// {
			// console.log("Wrong Command");
			// reader.prompt();
		// }


		// console.log(response["data"]["consolidated_weather"][0]["weather_state_name"])
		// console.log(response["data"]["consolidated_weather"][0]["min_temp"])
		// console.log(response["data"]["consolidated_weather"][0]["max_temp"])
	}
	catch(err)
	{
		console.log(err)
	}
}

main()