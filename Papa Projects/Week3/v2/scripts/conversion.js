
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
