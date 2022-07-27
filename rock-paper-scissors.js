//Global declarations

let playerWinCounter = 0;
let robotWinCounter = 0;

//Event listeners and transition enders.

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) =>
    button.addEventListener('click', playRound)
) ;

buttons.forEach((button) =>
    button.addEventListener('transitionend', removeButtonTransition)
) ;

const resultHeading = document.querySelector('#result');
resultHeading.addEventListener('transitionend', removeTransition);
resultHeading.addEventListener('transitioncancel', removeTransition);

const images = document.querySelectorAll('img');
images.forEach((img) =>
    img.addEventListener('transitionend', removeDeath)
);

function removeDeath(e) {
    this.classList.remove('death');
}

function removeButtonTransition(e) {
    this.classList.remove('grow');
}

function removeTransition(e) {
    this.classList.remove('visible');
}


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



/* plays a round of rock paper scissors and outputs the result */
function playRound(e) {
    let normalisedPlayerSelection = e.target.id.toLowerCase();
    let normalisedComputerSelection = getComputerChoice().toLowerCase();
    let result;
    if (normalisedComputerSelection === normalisedPlayerSelection) {
        result = 'Draw';
    } else if (normalisedPlayerSelection === 'rock') {
        if (normalisedComputerSelection === 'paper') {
            robotWinCounter++;
            result = 'You Lose';
        } else if (normalisedComputerSelection === 'scissors') {
            playerWinCounter++;
            result = 'You Win';
        }
    } else if (normalisedPlayerSelection === 'paper') {
        if (normalisedComputerSelection === 'scissors') {
            robotWinCounter++;
            result = 'You Lose';
        } else if (normalisedComputerSelection === 'rock') {
            playerWinCounter++;
            result = 'You Win';
        }

    } else if (normalisedPlayerSelection === 'scissors') {
        if (normalisedComputerSelection === 'rock') {
            robotWinCounter++;
            result = 'You Lose';
        } else if (normalisedComputerSelection === 'paper') {
            playerWinCounter++;
            result = 'You Win';
        }

    }
    e.target.classList.add('grow');
    
    updateScore();    
    document.querySelector('#result').innerHTML = result;
    document.querySelector('#result').classList.add('visible');
    

}


function updateScore() {

    document.querySelector('#playerCounter').innerHTML = playerWinCounter;
    document.querySelector('#robotCounter').innerHTML = robotWinCounter;
    

    if (playerWinCounter === 5) {
        document.querySelector('#robotImg').classList.add('death');
        robotWinCounter=0;
        playerWinCounter=0;
    }
    if (robotWinCounter === 5) {
        document.querySelector('#playerImg').classList.add('death');
        robotWinCounter=0;
        playerWinCounter=0;
    }

  

}


/* returns a random integer between 1 and the input maximum */
function getRandomNumber(maxNum) {
    let x = Math.ceil(Math.random() * maxNum);
    return x;
}

/* Confirming Randomness over an input number of plays plays */
function checkDistribution(querySize) {
    let rock = 0;
    let paper = 0;
    let scissors = 0;
    let other = 0;
    for (let i = 1; i <= querySize; i++) {
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