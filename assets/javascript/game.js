 //array
 var alphabte = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
 "n","o","p","q","r","s","t","u","v","w","x","y","z"];


var wins=0;
var losses=0;
var guessesLeft=9;
var yourGuessSoFar="";

//when a key pressed . function will run
//user guessed letter
//computer guessed result
//if correct guess say winner and increase win board
// if wrong increase loss board;

document.onkeypress = function (event) {

    var computerChoice =alphabte[Math.floor(Math.random ()*alphabte.length)];
    console.log(computerChoice);

    var userGuess= event.key;
    console.log (userGuess);

yourGuessSoFar = yourGuessSoFar + " " + userGuess;

if((userGuess)=== (computerChoice))
{
    yourGuessSoFar="";
    guessesLeft = 9;
    wins++;
    alert ("winner");

}else {
    guessesLeft--;
    alert("Try again, you guessed incorrectly");
}

if (guessesLeft==0){
    guessesLeft=9;
    yourGuessSoFar=" ";
    losses++;
    alert ("you lost, you're not psychic!");
}

var win = document.getElementById("wins");
win.innerHTML =  wins;

var loss = document.getElementById("losses");
loss.innerHTML =  losses;



var guess = document.getElementById("guessesLeft");
guess.innerHTML = guessesLeft;

var choice = document.getElementById("yourGuessSoFar");
choice.innerHTML =  yourGuessSoFar;
}

