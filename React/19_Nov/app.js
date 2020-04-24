// express
const express = require("express");
// console.log(__dirname);
const path = require("path");
// Server
const app = express();
// it add urlEncoded string to req.body
app.use(express.urlencoded({ extended: true }));
// listen server
// route => url => request
app.get("/me", function(req, res) {
  res.end("<h1>Me Page</h1>");
});
app.get("/login",function(req,res){

  res.sendFile(path.join(__dirname + "/index.html"));
})
app.post("/login", function(req, res) {
  console.log(req.body);
  const { myemail, mypassword } = req.body;
  if (myemail === "abc@gmail.com" && mypassword === "12345") {
    // res.write("<h1>User logged in</h1>");
    // res.end("reached login Page");
    res.redirect("/me");
  } else {
    res.write("<h1>Password or email is wrong</h1>");
  }
});
app.listen(3000, function() {
  console.log("Server is running at port 3000 ");
});
