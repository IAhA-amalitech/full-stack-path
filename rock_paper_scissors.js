/**
 * Full-Stack Software Engineering
 * Javascript Syntax, Part I
 * Rock Paper or Scissors
 */


const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    // verify userInput
    if (userInput === "rock" || "paper" || "scissors" || "bomb") {
        return userInput;
    } else {
        console.log("Please enter a valid input");
    }
};


const getComputerChoice = () => {
    let computersChoice = Math.floor(Math.random() * 3);
    return computersChoice === 0 ? "rock" :
        computersChoice === 1 ? "paper" :
        computersChoice === 2 ? "scissors" :
        `Unknown: ${computersChoice}`;
};


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
        return `User Won`;
    }

    if (userChoice === computerChoice) {
        return `User: ${userChoice} - Computer: ${computerChoice}. Tied!`;
    }

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return `User: ${userChoice} - Computer: ${computerChoice}. Computer Won!`;
        } else {
            return `User: ${userChoice} - Computer: ${computerChoice}. User Won!`;
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return `User: ${userChoice} - Computer: ${computerChoice}. Computer Won!`;
        } else {
            return `User: ${userChoice} - Computer: ${computerChoice}. User Won!`;
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return `User: ${userChoice} - Computer: ${computerChoice}. Computer Won!`;
        } else {
            return `User: ${userChoice} - Computer: ${computerChoice}. User Won!`;
        }
    }
};


const playGame = () => {
    let userChoice = getUserChoice("bomb");
    let computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
};

// play the game
playGame();
