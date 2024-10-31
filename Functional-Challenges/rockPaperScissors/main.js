//Definir las opciones y las reglas del juego
const choices = ["rock", "paper", "scissors"];
const rules = {
	rock: "scissors",
	paper: "rock",
	scissors: "paper",
};

// Variables para mantener el puntaje
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// Funcion para generar una eleccion aleatoria de la computadora
function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

// Funcion para determinar el resultado de un juego
function getResult(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		ties++;
		return "It's a tie!";
	} else if (rules[playerChoice] === computerChoice) {
		playerScore++;
		return "You won!";
	} else {
		computerScore++;
		return "Computer won!";
	}
}

// Funcion para manejar el click en los botones
function handleChoice(event) {
	const playerChoice = event.target.id;
	const computerChoice = getComputerChoice();
	const result = getResult(playerChoice, computerChoice);

	// Actualizar el DOM con las elecciones y el resultado
	const resultElement = document.getElementById("result");
	resultElement.innerHTML = `<p>Your choice: ${playerChoice}</p> <p>Computer's choice: ${computerChoice}</p> <p>${result}</p> <p>Player: ${playerScore} - Computer: ${computerScore} - Ties: ${ties}</p>`;
}

// Agregar el evento click a los botones
document.getElementById("rock").addEventListener("click", handleChoice);
document.getElementById("paper").addEventListener("click", handleChoice);
document.getElementById("scissors").addEventListener("click", handleChoice);
