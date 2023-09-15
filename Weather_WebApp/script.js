// var cityZip =$("zipCode").val();
var description = $("#description");
var temperature = $("#temp");
var zipBtn = $("#weather_by_zip");
var locBtn = $("#weather_by_location");
var apiKey = "e5e7df51a0d038b790c4ba6306cbe477"

function getInputValue(){
var city = document.getElementById('zipCode').value;

(function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+",USA"+"&appid="+apiKey).then(res => res.json())
    
    .then(data=>{
    description.innerHTML = data['weather']['2']['description']
    })
    .catch(err => alert("You entered the wrong city"))
    }

);
}
// var cityZip = getInputValue();


// zipBtn[0].addEventListener("click", function(cityZip){
//     alert(cityZip);
// })


// zipBtn[0].addEventListener("click",function(cityZip){
//     fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityZip+",USA"+"&appid="+apiKey).then(res => res.json())

// .then(data=>{
// description.innerHTML = data['weather']['2']['description']
// })
// .catch(err => alert("You entered the wrong city"))
// })