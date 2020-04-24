#!/usr/bin/env node
var fs = require("fs")
//path where js file is called
var farr = fs.readdirSync(process.cwd());
// path of actual code exists =>js
//var farr = fs.readdirSync(__dirname);
console.log(farr);
