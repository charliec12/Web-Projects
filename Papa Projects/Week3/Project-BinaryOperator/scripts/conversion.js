
function initialize(){
  var userInput = document.getElementById("to_convert");
  userInput.addEventListener("blur",validateInput);

  document.getElementById("gallons").onclick =function (){
    setUnits("liters");
  };
  document.getElementById("liters").onclick =function (){
    setUnits("gallons");
  };



}

function validateInput(){
  var userEntry = document.getElementById("to_convert");
  var label = document.getElementById("unit_type");

  if(label === 'gallons'){
    if(userEntry.value < 1 || userEntry.value >1000){
      alert("Entry value must be between 1 and 1000");
      userEntry.value="";
    }
  }else{
    if(userEntry.value < 1 || userEntry.value >4000){
      alert("Entry value must be between 1 and 4000");
      userEntry.value="";
    }
  }

}



function setUnits(unit) {
  var label = document.getElementById("unit_type");
  label.innerHTML = unit;
}

function convert() {
  var gallonsButton = document.getElementById(
    "gallons");
  var valueToConvert = document.getElementById(
    "to_convert");

  if (gallonsButton.checked) {
    convertToGallons(valueToConvert.value);
  } else {
    convertToLiters(valueToConvert.value);
  }
}

function convertToGallons(value){
  var gallons = value/3.785412;

  document.getElementById("result").innerHTML = gallons;
  document.getElementById("unit").innerHTML = "Gallons";
}


function convertToLiters(value){
  var liters = value*3.785412;

  document.getElementById("result").innerHTML = liters;
  document.getElementById("unit").innerHTML = "Liters";
}
