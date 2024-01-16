let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".img");
const messgae = document.querySelector(".message");
const compSelect = document.querySelector("compSelect");

const userBoard = document.querySelector('.user-score');
const compBoard = document.querySelector('.comp-score');

const playGame = (userChoice) => {
    console.log("User clicked :", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer's Choice :", compChoice);
    
    if(userChoice === compChoice){
        drawGame();
        
    } else {
        let userWin = true;
        if(userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
       messgae.innerText = "You win the game :) ";
        userScore++;
        userBoard.innerText = userScore;
        
    } else {
        console.log("you lose!");
        messgae.innerText = "You lose the game :( ";
        compScore++;
        compBoard.innerText = compScore;
    }
}

const drawGame = () => {
    console.log("Game is Draw");
    messgae.innerText = "Game is Draw!";
}

const genComputerChoice = () => {
    const choices = [ "Rock", "Paper" , "Scissors"];
    const options = Math.floor(Math.random() * 3 );
    return choices[options];
}

choice.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener('click', () =>{
        playGame(userChoice);
    })
})
