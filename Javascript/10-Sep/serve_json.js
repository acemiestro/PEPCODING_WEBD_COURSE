var fs = require("fs");
var http = require("http");
var json = fs.readFileSync("file.json");
json=JSON.parse(json);
var server = http.createServer(function(req,res){
    var inputuser = req.url.split("/").pop();
    console.log(inputuser);
    var myuser  = json.filter(function(user){
        return user["username"]==inputuser;
    });
    res.writeHead(200,{"Contenet-type":"application/json"});
    res.write(JSON.stringify(myuser));
    res.end();
});
server.listen(3000,function(){
    console.log("Server has started on port 3000");
})

