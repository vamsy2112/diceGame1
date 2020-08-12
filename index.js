//player1 dice

var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomdiceimage = "images/dice" + randomnumber1 + ".png";


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomdiceimage);

//player2 dice
var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdiceimage2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomdiceimage2);
/*
//result declaration

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="player1 wins";
}elseif(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML = "player2 wins";
}else{
  document.querySelector("h1").innerHTML = "draw";
}

*/

if (randomnumber1>randomnumber2){
  document.querySelector('.container').querySelector('h1').innerHTML = "Player 1 wins";
}
else if(randomnumber1<randomnumber2){
  document.querySelector('.container').querySelector('h1').innerHTML = "player2 wins";
}
else{
  document.querySelector('.container').querySelector('h1').innerHTML = "draw";
}
