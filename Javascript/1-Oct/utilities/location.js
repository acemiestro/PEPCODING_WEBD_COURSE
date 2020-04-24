module.exports = async function() 
{
	var axios = require("axios");
	var response = await axios.get(`http://ip-api.com/json/`);
	return response["data"]["city"];
};