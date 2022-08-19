function randomizer(){
  return Math.floor((Math.random() * 6 ) + 1);
}

var randomNumber1 = randomizer();
var randomNumber2 = randomizer();

function setImages(v){
  var value = v;
  return "images/dice" + value + ".png";
}

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", setImages(randomNumber1));


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", setImages(randomNumber2));

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "🎌It's a Draw!🎌";
}
