////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
     return move || getInput();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getComputerMove(move) {
    return move || randomPlay()
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

function getWinner(playerMove,computerMove) {
    var winner;

    if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'scissors')) {
        winner = 'computer';
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
        winner = 'player';
    } else {
        winner = 'tie'
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        if (winner === 'player') {
            playerWins++;
            console.log('Human wins this round');
        }
        else if (winner === 'computer') {
            computerWins++;
            console.log('NPC wins this round');
        }
        else {
            console.log('Tied!');
        }

        console.log('Scoreboard: Human ' + playerWins + ', Computer ' + computerWins + '.');
    }

    if (playerWins === 5) {
        console.log('The human has vanquished his rival');
    } else {
        console.log('The machine has vanquished the human');
    }
}
