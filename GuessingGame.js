let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.ceil(Math.random()*100);

function checkGuess() {
    let guessInputValue = parseInt(userInput.value);
    if (guessInputValue > randomNumber){
        gameResult.textContent = "Too High. Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessInputValue < randomNumber){
        gameResult.textContent = "Too Low. Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessInputValue === randomNumber){
        gameResult.textContent = "Congratulation. You got it right.";
        gameResult.style.backgroundColor = "green";
    }
    else{
        gameResult.textContent = "Please Provide a valid Input.";
        gameResult.style.backgroundColor = "red";
    }
}