const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: grace@google.com")
})

app.get("/about", function(req, res){
  res.send("<h2>Hi, I'm Grace</h2><p>Node is the best!</p>")
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>kids</li><li>code</li><li>tv</li>")
})

app.listen(3000, function (){
  console.log("Server started on port 3000");
});
