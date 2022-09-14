const express = require("express");

const app = express();

app.get("/", function(req,res){
  res.send("Hello");
});

app.get("/contact", function(req, res){
  res.send("contact me at gmail.com")
});

app.get("/about", function(req,res){
  res.send("My name is Clement Chieh, a self taught developer");
});

app.get("/hobbies", function(req,res){
  res.send("My hobbies include TTRPG");
});

app.listen(3000, function (){
  console.log("Server started on port 3000");
});
