#!/usr/bin/env node
var os = require("os");
var obj = os.networkInterfaces();
obj = obj["Wi-Fi"][1]
console.log("Address : "+obj.address);
console.log("Netmask : "+obj.netmask);
