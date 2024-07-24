// Global Variables
let humanScore = 0;
let computerScore = 0;
const resultDiv = document.querySelector('#result');

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
 * Play a round of rock paper scissor using simple algorithm to determine the winner.
 * 
 * @param {string} humanChoice The user's input validated by getHumanChoice()
 * @param {string} computerChoice The computer's input randomized by getComputerChoice()
 */
function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === computerChoice){
        resultDiv.textContent = `It's a Draw! Score: ${humanScore} to ${computerScore}`;
    }
    else if(humanChoice.toLowerCase() === "rock"){
        if(computerChoice === "paper"){
            computerScore += 1;
            resultDiv.textContent = `You lose! Paper beats Rock. Score: ${humanScore} to ${computerScore}`;
        }
        else {
            humanScore += 1;
            resultDiv.textContent = (`You win! Rock beats Scissors. Score: ${humanScore} to ${computerScore}`);
        }
    }
    else if(humanChoice.toLowerCase() === "paper"){
        if(computerChoice === "scissors"){
            computerScore += 1;
            resultDiv.textContent = (`You lose! Scissors beats Paper. Score: ${humanScore} to ${computerScore}`);
        }
        else {
            humanScore += 1;
            resultDiv.textContent = (`You win! Paper beats Rock. Score: ${humanScore} to ${computerScore}`);
        }
    }
    else if(humanChoice.toLowerCase() === "scissors"){
        if(computerChoice === "rock"){
            computerScore += 1;
            resultDiv.textContent = (`You lose! Rock beats Scissors. Score: ${humanScore} to ${computerScore}`);
        }
        else {
            humanScore += 1;
            resultDiv.textContent = (`You win! Scissors beats Paper. Score: ${humanScore} to ${computerScore}`);
        }
    }
    if(humanScore === 5){
        resultDiv.textContent += `. You have reached the total score of 5. You are the winner!`;
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        resultDiv.textContent += `. Computer has reached the total score of 5. You lose!`;
        humanScore = 0;
        computerScore = 0;
    }
}

let buttonsCont = document.querySelector("#buttons");

buttonsCont.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            playRound("Rock", getComputerChoice());
            break;
        case "paper":
            playRound("Paper", getComputerChoice());
            break;
        case "scissors":
            playRound("Scissors", getComputerChoice());
            break;
    }
});