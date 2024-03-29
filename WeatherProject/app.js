const express = require("express");
const https = require("https");
const app = express();

app.get("/",function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Iowa,LA,USA&APPID=e5e7df51a0d038b790c4ba6306cbe477";
  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const weatherDescription = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

      res.write("<p> The Weather is currently" + weatherDescription+ "</p>");
      res.write("<h1>The Temperature in Iowa is "+temp+"degrees</h1>");
      res.write("<img src=" + imageURL+">");
      res.send();

    });
  });

});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
