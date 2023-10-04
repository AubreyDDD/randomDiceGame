var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomNum2 = Math.floor(Math.random() * 6 + 1);

var imageSource1 = "images/dice" + randomNum1 + ".png";
var imageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src", imageSource1);
document.querySelector(".img2").setAttribute("src", imageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "🎵 Player 1 wins!"
}
else if (randomNum2 > randomNum1) {
    document.querySelector("h1").textContent = "Player 2 wins! 🎵"
}
else {
    document.querySelector("h1").textContent = "Draw !!!!"
}