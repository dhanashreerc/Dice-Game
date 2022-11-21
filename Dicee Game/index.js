//generating random number between 1 and 6
//Math.random() -0 to 0.999...
//Math.random()*6 - 0.032 - 5
//Math.floor(Math.random()*6) - 0 to 5
//Math.floor(Math.random()*6)+1; - 1 to 6
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

//creating the path for random image
var randomImage1= 'images/dice' + randomNumber1 + '.png'
var randomImage2= 'images/dice' + randomNumber2 + '.png'

//selecting the img tag and setting its src attribute to random img path
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

//setting the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}