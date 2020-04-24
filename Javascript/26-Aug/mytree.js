#!/usr/bin/env node
var fs = require("fs")
function Alldir(path){
    var Dir = (fs.readdirSync(path));
    Dir.forEach(dir=> {
        console.log(dir); 
        //check for not a directory
        var stat = fs.lstatSync(path+ '/' +dir);
        if(stat.isDirectory())
        Alldir(path+'/'+dir)
    });
    }
var path = process.cwd()
Alldir(path)