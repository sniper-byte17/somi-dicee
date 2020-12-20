
var randomNumber1=Math.floor(Math.random() * 6) + 1;//1-6

var randomdiceimage="dice" + randomNumber1 + ".png";//dice1.png - dice6.png

var randomimagesource="images/" + randomdiceimage;//images/dice1.png - images/dice6.png

var imageleft=document.querySelectorAll("img")[0];

imageleft.setAttribute("src",randomimagesource);

// alert("muthomirules!");
randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var imageright = document.querySelectorAll("img")[1];

imageright.setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML="player1 wins 🚩";
}

else if (randomNumber2 > randomNumber1){
document.querySelector("h1").innerHTML="player2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="it's a tie 🚩";
}
