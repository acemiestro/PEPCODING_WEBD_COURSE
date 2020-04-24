#!/usr/bin/env node
var minimist = require("minimist");


var modifiedArgv = minimist(process.argv.slice(2));
var forecast = require("./cmds/forecast");
var help = require("./cmds/help");
var today = require("./cmds/today");
var version = require("./cmds/version");

var cmd = modifiedArgv["_"][0];
if (modifiedArgv["_"].length == 0)
{
  help();
  return;
}

var location = modifiedArgv.location || modifiedArgv.l;

if (cmd == "help")
	help();

else if (cmd == "version") 
	version();

else if (cmd == "today") 
	today(location);

else if (cmd == "forecast") 
	forecast(location);

else 
	console.log("Wrong Command");