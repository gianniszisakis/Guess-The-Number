"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; //the number that we should guess
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function(){ //when the user click the check button
    const guess = Number(document.querySelector(".guess").value); //the value of the guess box

    //if the user does not provide a number
    if(!guess){
        document.querySelector(".guessText").textContent = "Please fill a number (1-20)"
    }
    else if(guess === secretNumber){ //if the user guess the right number
        document.querySelector(".guessText").textContent = "You found it!"; //message apears
        document.querySelector(".guessText").style.color = "red";
        document.querySelector(".centerDIV").style.backgroundColor = "green"; //change background color of DIV
        highscore = score; //equals the score with highscore
        document.querySelector(".highscore").textContent = highscore; //assign the highscore to the span
    }
    else if(guess > secretNumber){ //if number is greater than the correct answer
        if(score > 1){
            document.querySelector(".guessText").textContent = "Too High!"; //message appears
            score--; //decrease the score by 1
            document.querySelector(".score").textContent = score; //assign the score to the result
        }
        else{
            document.querySelector(".guessText").textContent = "You lost";
            document.querySelector(".centerDIV").style.backgroundColor = "red"; //change background color of DIV
            document.querySelector(".score").textContent = 0; //restore the value of the score to 0
        }
    }
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector(".guessText").textContent = "Too Low!"; //message appears
            score--; //decrease the score by 1
            document.querySelector(".score").textContent = score; //assign the score to the result
        }
        else{
            document.querySelector(".guessText").textContent = "You lost";
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
