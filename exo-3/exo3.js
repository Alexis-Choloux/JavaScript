// you can write js here
console.log('exo-3');

function userChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'damme' || userInput === 'stalone' || userInput === 'trump' || userInput === 'norris') {
        return userInput;
    } else {
        console.log('Please, choose damme, stalone, or trump!');
    }
}

function getComputerChoice () {
    let number = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (number) {
        case 0:
            computerChoice = 'damme';
            break;
        case 1:
            computerChoice = 'stalone';
            break;
        case 2:
            computerChoice = 'trump';
            break;
    }
    return computerChoice;
}  

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tied!';
    }
    else if (userChoice === 'stalone') {
        if (computerChoice === 'damme') {
            return 'Won! Stalone is stronger, of course!';
        } else {
            return 'Lost! Trump expulse Stalone to Russia!';
        }
    }
    else if (userChoice === 'damme') {
        if (computerChoice === 'trump') {
            return 'Won! Damme say something... Trump\'s head explode!';
        } else {
            return 'Lost! Stalone become Rocky, and punch Damme in the face!';
        }
    }
    else if (userChoice === 'trump') {
        if (computerChoice === 'stalone') {
            return 'Won! Trump build a wall between him and Stalone!';
        } else {
            return 'Lost! Damme say something... Trump\'s head explode!!';
        }
    }
    else if (userChoice === 'norris') {
            return 'Won! Norris killed everyone!';
    }
}

function playGame () {
    let uChoice = userChoice(prompt("Stalone, Damme, Trump ?"));
    let computerChoice = getComputerChoice();
    console.log('You chose: ' + uChoice);
    console.log('The computer chose: ' + computerChoice);
    console.log(determineWinner(uChoice, computerChoice));
}

playGame();