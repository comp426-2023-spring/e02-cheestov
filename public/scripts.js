// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
// get references to the elements
// get references to the elements
const playerChoice = document.getElementById("player-choice");
const opponentChoice = document.getElementById("opponent-choice");
const opponentType = document.getElementById("opponent-type");
const playButton = document.getElementById("play-button");
const resultText = document.getElementById("result-text");
const startoverButton = document.getElementById("startover-button");

// add event listener to the opponent type checkbox
opponentType.addEventListener("change", function() {
	if (opponentType.checked) {
		opponentChoice.style.display = "none";
	} else {
		opponentChoice.style.display = "block";
	}
});

// add event listener to the play button
playButton.addEventListener("click", function() {
	// get the player's choice
	const player = playerChoice.value;

	let opponent;
	if (opponentType.checked) {
		// play against the computer
		const computer = Math.random();
		if (computer < 0.33) {
			opponent = "rock";
		} else if (computer < 0.66) {
			opponent = "paper";
		} else {
			opponent = "scissors";
		}
	} else {
		// play against a human opponent
		opponent = opponentChoice.value;
	}

	// determine the winner
	let result;
	if (player == opponent) {
		result = "Tie!";
	} else if ((player == "rock" && opponent == "scissors") || (player == "paper" && opponent == "rock") || (player == "scissors" && opponent == "paper")) {
		result = "You win!";
	} else {
		result = "Opponent wins!";
	}

	// display the result
	resultText.innerHTML = `You chose ${player}, opponent chose ${opponent}. ${result}`;
});

// add event listener to the startover button
startoverButton.addEventListener("click", function() {
	// reset the dropdown menus and result text
	playerChoice.selectedIndex = 0;
	opponentChoice.selectedIndex = 0;
	opponentType.checked = false;
	opponentChoice.style.display = "block";
	resultText.innerHTML = "";
});

const checkbox = document.getElementById("toggleCheck");
const head = document.getElementById("header");

checkbox.addEventListener("change", () => {

    if (checkbox.checked) {
        head.textContent = "Rock Paper Scissors Lizard Spock Game!";
    } else {
        head.textContent = "Rock Paper Scissors Game!"
    }
})
  