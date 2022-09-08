function display(){
  var gallons = document.getElementById("slider").value;
  var liters = gallons*3.785412;

  document.getElementById("result").innerHTML = liters;
}
