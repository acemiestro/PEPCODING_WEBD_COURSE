// !/usr/bin/env node
// Q Write your own cli "mycli" using readline module 
// that implements two commands ipconfig,mkdir 
// Input : Node mycli to start your cli
// 	myipconfig => Object with that your network information{}
// 	mymkdir folder=> create a directory named folder
// 	else should output wrong command
// 	ON exit should print "See you later"
var readline = require("readline");
var mk = require("./mymkdir");
var ip = require("./myipconfig");
var reader = readline.createInterface({
    //input
    input: process.stdin,
    //output
    output: process.stdout,
    prompt: "mycli>"
});
reader.prompt();

reader.on("line", function (data) {
    var command = data.split(" ")[0];
    var parameter = data.split(" ")[1];
    //console.log(data);
    if (command == "myipconfig") {
        ip();
        reader.prompt();
    } else if (command == "mymkdir" && parameter != undefined) {
        mk(parameter);
        reader.prompt();
    }
    else if (command == "exit") {
        reader.close();
    }
    else {
        console.log("Wrong Command");
        reader.prompt();
    }
});
reader.on("close", function () {
    console.log("See you later");
});