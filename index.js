var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
  zainabWinMessage();
} else if (randomNumber2 > randomNumber1) {
  mubaarokaWinMessage();
} else {
  drawMessage();
}

function zainabWinMessage() {
  var zMessage = "Zainab Wins! Eat your roommate's food."
  document.querySelector("h1").innerHTML = zMessage;
}

function mubaarokaWinMessage() {
  var mMessage = "Mubaaroka Wins! Eat your roommate's food"
  document.querySelector("h1").innerHTML = mMessage;
}

function drawMessage() {
  var dMessage = "Draw! You two bring your food to me &#128512"
  document.querySelector("h1").innerHTML = dMessage
}
