var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
  zainabWinMessage(), playerPlaying();
} else if (randomNumber2 > randomNumber1) {
  mubaarokaWinMessage(), playerPlaying();
} else {
  drawMessage(), playerPlaying();
}




function zainabWinMessage() {
  var zMessage = "Zainab Wins! Eat Mubaaroka's food."
  document.querySelector("h1").innerHTML = zMessage;
}

function mubaarokaWinMessage() {
  var mMessage = "Mubaaroka Wins! Eat Zainab's food"
  document.querySelector("h1").innerHTML = mMessage;
}

function drawMessage() {
  var dMessage = "Draw! You two bring your food to me &#128512"
  document.querySelector("h1").innerHTML = dMessage
}

function playerPlaying() {
  var whoPlaying = ["Zainab Playing", "Mubaaroka Playing"];
  var choosePlayer = Math.floor(Math.random() * 2);
  var choose = whoPlaying[choosePlayer];
  document.querySelector("button").innerHTML = choose;

}
