
// First image of Dice

var randomNumber1=Math.floor(Math.random()*6+1);
console.log(randomNumber1);

var randomDiceImage1="images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage1);

// Second image of Dice

var randomNumber2=Math.floor(Math.random()*6+1);
console.log(randomNumber2);
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDiceImage2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🎖Player1 is the winner!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="🎖Player2 is the winner!";
}else{
  document.querySelector("h1").innerHTML="🥁Draw!";
}
