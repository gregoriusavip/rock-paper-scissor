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
 * Randomly generate computer choice of either 'rock', 'paper', or 'scissor'.
 *
 * @return {string} randomly generate choice of either 'rock', 'paper', or 'scissor'.
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
        return 'scissor';
    }
}