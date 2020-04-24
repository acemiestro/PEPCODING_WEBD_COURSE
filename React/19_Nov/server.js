const http = require("http");

const server = http.createServer(function(req, res) {});

server.listen(3000, function() {
  console.log("Server is running at port 3000 ");
});
