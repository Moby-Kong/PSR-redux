const rock = document.querySelector("#rock");
const paper = document.querySelector(`#paper`);
const scissors = document.querySelector(`#scissors`);

rock.addEventListener('click', () => {
    console.log('ROCK');
});


let playerScore = 0;
let computerScore = 0;
let playerMove;
let computerMove;

function computerPlay() {
    const rockPaperScissors = [`rock`, `paper`, `scissors`];
    const randomChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {

    switch (result) {
    
    case playerSelection == `paper` && computerSelection == `rock`:
        playerScore = playerScore + 1;
        console.log(`You win! Paper beats rock! The score is Human: ${playerScore} Computer: ${computerScore}!`);
        break;

    case playerSelection == `scissors` && computerSelection == `rock`:
        computerScore = computerScore + 1;
        console.log(`You lose! Rock beats scissors! The score is Human: ${playerScore} Computer: ${computerScore}!`);
        break;

    case playerSelection == `paper` && computerSelection == `scissors`:
        computerScore = computerScore + 1;
        console.log(`You lose! Scissors beats paper! The score is Human: ${playerScore} Computer: ${computerScore}!`);
        break;

     case playerSelection == `rock` && computerSelection == `scissors`:
        playerScore = playerScore + 1;
        console.log(`You win! Rock beats scissors! The score is Human: ${playerScore} Computer: ${computerScore}!`);
        break;

    case playerSelection == `rock` && computerSelection == `paper`:
        computerScore = computerScore + 1;
        console.log(`You lose! Paper beats rock! The Score is Human: ${playerScore} Computer: ${computerScore}!`);
        break;

    case playerSelection == `scissors` && computerSelection == `paper`:
        playerScore = playerScore + 1;
        console.log(`You win! Scissors beats paper! The score is Human: ${playerScore} Computer: ${computerScore}!`);
        break;

     case playerSelection == `paper` && computerSelection == `paper`:
        console.log(`It's a tie--paper vs. paper! The score remains Human: ${playerScore} Computer: ${computerScore}!`);
        break;

    case playerSelection == `rock` && computerSelection == `rock`:
        console.log(`It's a tie--rock vs. rock! It's still Human: ${playerScore} Computer: ${computerScore}!`);
        break;

    case playerSelection == `scissors` && computerSelection == `scissors`:
        console.log(`It's a tie--scissors vs. scissors! The score is still Human: ${playerScore} Computer: ${computerScore}!`);
        break;

    case playerSelection !== `scissors` || `paper` || `rock`:
        console.log(`Not a valid input. This doesn't bode well for your chances with the RPS Bot!!!`);
        break;
    }
}

/* function game() {

    for (var i = 0; i < 5; i++) {
        computerMove = computerPlay();
        playerMove = prompt(`What'll it be? Rock, paper, or scissors?`).toLowerCase();
        playRound(playerMove, computerMove);
    }

    if (playerScore > computerScore) {
        console.log(`You have won!`);
    }
    else if (playerScore < computerScore) {
        console.log(`You have lost!`);
    }
    else if (playerScore == computerScore) {
        console.log(`A tie!`);
    }
} */