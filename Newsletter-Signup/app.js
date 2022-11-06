
const express = require("express");
const bodyParser= require("body-parser");
const request = require("request");
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

mailchimp.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX"
});

const event = {
  name: "JS Developers Meetup"
};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req,res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);

});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
})

// api key
// 15bdd0a180e730c9e3638a7695ba074d-us21
