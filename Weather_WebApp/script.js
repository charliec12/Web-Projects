// var cityZip =$("zipCode").val();
var description = $("#description");
var temperature = $("#temp");
var zipBtn = $("#weather_by_zip");
var locBtn = $("#weather_by_location");
var apiKey = ""

function getInputValue(){
var city = document.getElementById('zipCode').value;

.then(data=>{
description.innerHTML = data['weather']['description']
})
.catch(err => alert("You entered the wrong city"))
})
