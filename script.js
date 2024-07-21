/**
 * Randomly generate an integer from 0 (inclusive) to max (exclusive).
 * Not intended for max < 0.
 * 
 * @param {number} max the max range (exclusive)
 * @returns {number} randomly generated integer from 0 (inclusive) to max (exclusive).
 */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

/**
 * Randomly generate computer choice of either 'rock', 'paper', or 'scissors'.
 *
 * @return {string} randomly generate choice of either 'rock', 'paper', or 'scissors'.
 */

function getComputerChoice(){
    // generate a random integer of either 0, 1, or 2
    const computerChoice = getRandomInt(3);

    if (computerChoice === 0){
        return 'rock';
    }
    else if (computerChoice === 1){
        return 'paper';
    }
    else if (computerChoice === 2){
        return 'scissors';
    }
}

/**
 * Prompt the user for the input equivalent to either rock, paper, or scissors.
 * Loop until the input is valid. Return the user's input.
 * 
 * @return {string} user's valid input of either 'rock', 'paper', or 'scissors'.
 */
function getHumanChoice(){
    let userPrompt = "Enter your move. Valid choices are (without quotation, case-insensitive) 'rock', 'paper', or 'scissors'"
    let humanChoice;
    while (true){
        humanChoice = prompt(userPrompt);
        if (['rock', 'paper', 'scissors'].includes(humanChoice.toLowerCase())) {
            return humanChoice;
        }
        else {
            userPrompt = "Invalid input.\n" + 
                "Enter your move. Valid choices are (without quotation) 'rock', 'paper', or 'scissors'";
        }
    }
}

/**
 * Play a round of rock paper scissor using simple algorithm to determine the winner.
 * 
 * @param {string} humanChoice The user's input validated by getHumanChoice()
 * @param {string} computerChoice The computer's input randomized by getComputerChoice()
 * @return {boolean} `true` if the player won, `false` otherwise
 */
function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === computerChoice){
        console.log("It's a draw!");
    }
    else if(humanChoice.toLowerCase() === "rock"){
        if(computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            return false;
        }
        else {
            console.log("You win! Rock beats Scissors");
            return true;
        }
    }
    else if(humanChoice.toLowerCase() === "paper"){
        if(computerChoice === "scissors"){
            console.log("You lose! Scissors beats Paper");
            return false;
        }
        else {
            console.log("You win! Paper beats Rock");
            return true;
        }
    }
    else if(humanChoice.toLowerCase() === "scissors"){
        if(computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            return false;
        }
        else {
            console.log("You win! Scissors beats Paper");
            return true;
        }
    }
}

/**
 * Function to play the game for 5 rounds.
 * Determine the winner based of the total scores.
 */
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        if(playRound(humanSelection, computerSelection)){
            humanScore += 1;
        }
        else {
            computerScore += 1;
        }
    }

    if (humanScore > computerScore){
        console.log("You win!");
    }
    else if (humanScore === computerScore){
        console.log("It's a tie!")
    }
    else {
        console.log("You lose!")
    }
    console.log(`Final Score: ${humanScore}-${computerScore}`);
}

playGame();