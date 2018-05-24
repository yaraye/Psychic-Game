 //array
 var alphabte = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
 "n","o","p","q","r","s","t","u","v","w","x","y","z"];


var wins=0
var losses=0
var guessesLeft=9
var yourGuessSoFar="";

//when a key pressed . function will run
document.onkeypress = function (event) {
//user guessed letter
var userGuess= event.key;
console.log (userGuess);

yourGuessSoFar = yourGuessSoFar + "," + userGuess;

//computer guessed result
var computerChoice =alphabte[Math.floor(Math.random ()*alphabte.length)];
console.log(computerChoice);

//if correct guess say winner and increase win board
// if wrong increase loss board;

if((userGuess)=== (computerChoice)){
yourGuessSoFar="";
guessesLeft = 9;
wins++;
alert ("winner");

}else {
guessesLeft--;
alert("try again, you guessed incorrectly");
}

if (guessesLeft==0){
losses= losses+1;
guessesLeft=9;
yourGuessSoFar=" ";
alert ("you lost, you're not psychic!");
}
var guesses = document.getElementById("yourGuessSoFar");
guesses.innerHTML =  yourGuessSoFar;

var win = document.getElementById("wins");
wins.innerHTML =  wins;

var loss = document.getElementById("losses");
losses.innerHTML =  losses;
var guessLeft = document.getElementById("guessesLeft");
guessLeft.innerHTML = guessesLeft;
}

