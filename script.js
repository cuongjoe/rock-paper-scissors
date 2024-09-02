let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choiceRandom = Math.floor(Math.random() * choices.length);
    return choices[choiceRandom];
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter either rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame() {
    // let humanScore = 0;
    // let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        // Update the DOM with the choices
        document.getElementById("computer-choice").textContent = computerChoice;
        document.getElementById("human-choice").textContent = humanChoice;

        if (roundResult === "human") {
            humanScore++;
            alert("You win this round!");
        } else if (roundResult === "computer") {
            computerScore++;
            alert("You lose this round!");
        } else {
            alert("This round is a tie!");
        }

        // show điểm
        document.getElementById("human-score").textContent = humanScore;
        document.getElementById("computer-score").textContent = computerScore;
    }

    // người thắng sau 5 lượt thi
    if (humanScore > computerScore) {
        alert("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        alert("Sorry, you lose the game.");
    } else {
        alert("The game is a tie!");
    }
}

// function nextRound() {
//     playGame();
// }
