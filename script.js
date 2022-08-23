"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; //the number that we should guess
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".guessText").textContent = message;
}


document.querySelector(".check").addEventListener("click", function(){ //when the user click the check button
    const guess = Number(document.querySelector(".guess").value); //the value of the guess box

    //if the user does not provide a number
    if(!guess){
        displayMessage("Please fill a number (1-20)"); 
    }
    else if(guess === secretNumber){ //if the user guess the right number
        displayMessage("You found it!"); //message apears
        document.querySelector(".guessText").style.color = "red";
        document.querySelector(".centerDIV").style.backgroundColor = "green"; //change background color of DIV
        
        //if score is higher than highscore then new highscore is assigned
        if(score > highscore){ 
            highscore = score;
            document.querySelector(".highscore").textContent = highscore; 
        }
    }
    else if(guess !== secretNumber){ //if the answer is wrong
        if(score > 1){
            displayMessage(guess > secretNumber ? "Too High!" :  "Too Low!");
            score--; //decrease the score by 1
            document.querySelector(".score").textContent = score;
        }
        else{
            displayMessage("You lost");
            document.querySelector(".centerDIV").style.backgroundColor = "red"; //change background color of DIV
            document.querySelector(".score").textContent = 0; //restore the value of the score to 0
        }
    }

    //reset button behavior
    document.querySelector(".again").addEventListener("click", function(){
        secretNumber = Math.trunc(Math.random() * 20) + 1; //generate a new secret number
        score = 20; //restore score to initial value
        document.querySelector(".score").textContent = score; 
        document.querySelector(".guessText").textContent = "Start guessing..."; //initial value of message
        document.querySelector(".guess").value = ""; //initial value of guess
        document.querySelector(".centerDIV").style.backgroundColor = "#c8b7a6"; //initial background
        document.querySelector(".guessText").style.color = "black";

    })
})
