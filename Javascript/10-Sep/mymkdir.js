#!/usr/bin/env node
var os = require("os");
var fs = require("fs");
module.exports=function(parameter){
var folderName = parameter;
if(folderName!=undefined){
    if (fs.existsSync(folderName)==false){
        fs.mkdirSync(folderName)
    }
    else console.log("Folder already exists")
}
else {
    console.log("Please enter any input")
}
};