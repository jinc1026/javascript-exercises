function computerPlay(){

  let randomVal=Math.floor(Math.random() * 10);
  let computersPick;

  if(randomVal<=3){
    computersPick = "rock"
  } else if (randomVal>3 && randomVal<=6){
    computersPick = "paper"
  } else {
    computersPick = "scissors"
  }

  return computersPick;
};

function playRound(){
	let playerSelection = this.id;
	let computerSelection = computerPlay();
	let winnerDisplay = document.querySelector("#winnerDisplay");
	let result;

	if (playerSelection == "rock"){
		if (computerSelection=="rock"){
			result = "Draw!!"
		} else if (computerSelection == "paper"){
			result = "Computer Won!"
		} else {
			result = "Player Won!"
		}
	} else if (playerSelection == "paper"){
		if (computerSelection == "rock"){
			result = "Player Won!"
		} else if (computerSelection == "paper"){
			result = "Draw!!"
		} else {
			result = "Computer Won!"
		}
	} else if (playerSelection == "scissors"){
		if (computerSelection == "rock"){
			result = "Computer Won!"
		} else if (computerSelection == "paper"){
			result = "Player Won!"
		} else {
			result = "Draw!!"
		}
	} else {
		result = "Please type either rock, paper or scissors"
	}
	
	winnerDisplay.textContent = result;
	
	
	return result;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));



/*
function game(){
	let playerScore=0;
	let computerScore=0;
	let matchResult;

	
	for(let i=0;i<5;i++){
		let playerSelection = prompt("Type your choice");
		const computerSelection = computerPlay();
		matchResult = playRound(playerSelection, computerSelection);
		console.log(matchResult);

		if (matchResult == "Player Won!"){
			playerScore++;
		} else if (matchResult == "Computer Won!"){
			computerScore++;
		}
	}
	

	if (playerScore > computerScore){
		console.log("Human is the lucky one");
	} else if (computerScore > playerScore){
		console.log("Computer is the lucky one");
	} else {
		console.log("No winner here!");
	}
}
*/