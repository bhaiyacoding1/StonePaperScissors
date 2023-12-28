let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")

const msg = document.querySelector("#output");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randindx = Math.floor(Math.random() * 3);
    return options[randindx]
};
const dameDrow = () => {
    msg.innerText = "Game was Drow. Play again.";
    msg.style.backgroundColor="black"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! You ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red"
    }
};

const playGame = (userChoice) => {
    // GENRATE COMPUTER CHOICE
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        // DROW GAME
        dameDrow();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors ,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});