var cityZip = $("#zipcode").val();
var description = $("#description");
var temperature = $("#temp");
var zipBtn = $("#weather_by_zip");
var locBtn = $("#weather_by_location");
var apiKey = ""

zipBtn[0].addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?id="+cityZip+"&appid="+apiKey+"").then(res => res.json())

.then(data=>{
description.innerHTML = data['weather']['description']
})
.catch(err => alert("You entered the wrong city"))
})
