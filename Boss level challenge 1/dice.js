
n = Math.floor(Math.random()* 6) + 1;
var image;

if (n === 1) {
  image = "images/dice1.png";
} else if (n === 2) {
  image = "images/dice2.png";
} else if (n === 3) {
  image = "images/dice3.png";
} else if (n === 4) {
  image = "images/dice4.png";
} else if (n === 5) {
  image = "images/dice5.png";
} else {
  image = "images/dice6.png";
}
var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src",image);

n1 = Math.floor(Math.random()* 6) + 1;

if (n1 === 1) {
  image = "images/dice1.png";
} else if (n1 === 2) {
  image = "images/dice2.png";
} else if (n1 === 3) {
  image = "images/dice3.png";
} else if (n1 === 4) {
  image = "images/dice4.png";
} else if (n1 === 5) {
  image = "images/dice5.png";
} else {
  image = "images/dice6.png";
}
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",image)

if (n > n1){
  document.querySelector("h1").textContent = "Player 1 wins";
}
else if (n < n1){
  document.querySelector("h1").textContent = "Player 2 wins";
}
else{
  document.querySelector("h1").textContent = "Draw"
}
