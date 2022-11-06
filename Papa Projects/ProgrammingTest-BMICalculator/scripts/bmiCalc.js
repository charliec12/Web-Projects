

function calcBMI(){
  var calcWeight = $('#startWeight').val();
  var calcHeight = ($('#startFeet').val() * 12)  + parseInt($('#startInches').val());

  bmiCalculation = (calcWeight / Math.pow(calcHeight,2)) * 703;
  if (bmiCalculation <= 18.5){
    $('#resultLabel').text("Your BMI is " + bmiCalculation + ". You are a underweight weight.");
  }else if (bmiCalculation > 18.5 || bmiCalculation <= 24.9){
    $('#resultLabel').text("Your BMI is " + bmiCalculation + ". You are a normal weight.");
  }else if (bmiCalculation >= 25 || bmiCalculation <= 29.9){
    $('#resultLabel').text("Your BMI is " + bmiCalculation + ". You are a overweight weight.");
  }else{
    $('#resultLabel').text("Your BMI is " + bmiCalculation + ". You are obese.");
  }

}
