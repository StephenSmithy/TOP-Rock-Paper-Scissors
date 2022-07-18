
function getComputerChoice() {
    let x = getRandomNumber(3);
    if (x === 1) {
        return 'Rock';
    } else if (x === 2) {
        return 'Paper';
    } else if (x === 3) {
        return 'Scissors';
    } else {
        return 'Undefined Value';
    }
}

function playRound(playerSelection, computerSelection) {
    let normalisedPlayerSelection = playerSelection.toLowerCase();
    let normalisedComputerSelection = computerSelection.toLowerCase();
    if (normalisedComputerSelection === normalisedPlayerSelection) {
        return ['Tie',`Tie! You both chose ${normalisedComputerSelection}`]    
    } else if (normalisedPlayerSelection === 'rock') {
        if (normalisedComputerSelection === 'paper') {
            return ['Loss','You lose, paper beats rock!']
        } else if (normalisedComputerSelection === 'scissors') {
            return ['Win',`You win, rock beats scissors!`]
        }
    } else if (normalisedPlayerSelection === 'paper') {
        if (normalisedComputerSelection === 'scissors') {
            return ['Loss', 'You lose, scissors beats paper!']
        } else if (normalisedComputerSelection === 'rock') {
            return ['Win',`You win, paper beats rock!`]
        }

    } else if (normalisedPlayerSelection === 'scissors') {
        if (normalisedComputerSelection === 'rock') {
            return ['Loss','You lose, rock beats scissors!']
        } else if (normalisedComputerSelection === 'paper') {
            return ['Win',`You win, scissors beats paper!`]
        }

    }


}

function game() {
    let winCounter = 0;
    let lossCounter = 0;
    let drawCounter = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt('Enter your choice: Rock, Paper or Scissors?');
        let result = playRound(userInput, getComputerChoice());
        console.log(result[1]);
        if (result[0] === 'Win') {
            winCounter++;
        } else if (result[0] === 'Loss') {
            lossCounter++;
        } else if (result[0] === 'Tie') {
            drawCounter++
        }
    }
    console.log(`You won ${winCounter} games, lost ${lossCounter} games and drew ${drawCounter} games.`)
}

function getRandomNumber(maxNum) {
    let x = Math.ceil(Math.random() * maxNum);
    return x;
}

/* Confirming Randomness over 100000 plays */
function checkDistribution() {
    let rock = 0;
    let paper = 0;
    let scissors = 0;
    let other = 0;
    for (let i = 1; i <= 100000; i++) {
        let x = getRandomNumber(3);
        if (x === 1) {
            rock++;
        } else if (x === 2) {
            paper++;
        } else if (x === 3) {
            scissors++;
        } else {
            other++;
        }
    }
    console.log(`The number of rock is: ${rock}, the number of paper is: ${paper}, the number of scissors is ${scissors}. The number of erroneous values is ${other}`)
    
}