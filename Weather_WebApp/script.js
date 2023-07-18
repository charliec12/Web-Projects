var cityZip = $("#zipcode").val();
var description = $("#description");
var temperature = $("#temp");
var zipBtn = $("#weather_by_zip");
var locBtn = $("#weather_by_location");
var apiKey = "e5e7df51a0d038b790c4ba6306cbe477"

zipBtn[0].addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?id="+cityZip+"&appid="+apiKey+"").then(res => res.json())

.then(data=>{
description.innerHTML = data['weather']['description']
})
.catch(err => alert("You entered the wrong city"))
})