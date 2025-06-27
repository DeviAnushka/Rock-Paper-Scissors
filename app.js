let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw.Play again");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#2f3e46";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#ffc300";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("user choice=", userChoice);

    // Animate user choice
    const userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add("clicked");
    setTimeout(() => {
        userChoiceDiv.classList.remove("clicked");
    }, 200);

    const compChoice = genCompChoice();
    console.log("Comp-choice = ", compChoice);

    // Animate computer choice
    const compChoiceDiv = document.getElementById(compChoice);
    compChoiceDiv.classList.add("flash");
    setTimeout(() => {
        compChoiceDiv.classList.remove("flash");
    }, 300);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
         choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       
         playGame(userChoice);
    });
});