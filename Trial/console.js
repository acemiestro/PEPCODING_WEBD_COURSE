#!/usr/bin/env node
var fs = require("fs")
var input = process.argv.slice(2)
// console.log(input)
var numOfFiles = Number(input[1])
var dirName = input[0]

for(var i = 1; i <= numOfFiles; i++)
{
	var folderName = dirName + "-" + i
	if(!fs.existsSync(folderName))
	{
		fs.mkdirSync(folderName)
		console.log(folderName + " created ")
	}
	else
	{
		console.log(folderName + " exists ")
		continue;
	}
}