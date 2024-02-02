const weapons = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let cpuScore = 0

function activateWeaponButtons() {
	let weaponButtons = document.querySelectorAll("button")
	weaponButtons.forEach((button) => {
		button.addEventListener("click", playRound)
	})
}

function playRound() {
	let playerWeapon = this.value
	let cpuWeapon = weapons[parseInt(Math.random()*3)]

	let refereeP = document.querySelector("#referee")

	if (playerWeapon == cpuWeapon) {
		refereeP.textContent = `It's a draw - ${playerWeapon} against ${cpuWeapon}`
	} else if (
	(playerWeapon == "Rock" && cpuWeapon == "Scissors") ||
	(playerWeapon == "Paper" && cpuWeapon == "Rock") ||
	(playerWeapon == "Scissors" && cpuWeapon == "Paper")) {
		playerScore++
		refereeP.textContent = `You win - ${playerWeapon} beats ${cpuWeapon}`
		
	} else if (
	(playerWeapon == "Scissors" && cpuWeapon == "Rock") ||
	(playerWeapon == "Rock" && cpuWeapon == "Paper") ||
	(playerWeapon == "Paper" && cpuWeapon == "Scissors")) {
		cpuScore++
		refereeP.textContent = `You lose - ${cpuWeapon} beats ${playerWeapon}`
	}

	updateScore()
	playerScore < 5 && cpuScore < 5 || declareWinner()
}

function updateScore() {
	let scoreP = document.querySelector("#score")
	scoreP.textContent = `Score: ${playerScore} - ${cpuScore}`
}

function declareWinner() {
	let outcomeP = document.querySelector("#outcome")
	if (playerScore == 5) {
		outcomeP.textContent = "YOU WON THE MATCH!"
	} else if (cpuScore == 5) {
		outcomeP.textContent = "Better luck next time..."
	}

	let weaponButtons = document.querySelectorAll("button")
	weaponButtons.forEach((button) => {
		button.setAttribute("disabled", "")
	})

	let resetButton = document.createElement("button")
	resetButton.setAttribute("id", "reset")
	resetButton.textContent = "Play again?"
	resetButton.addEventListener("click", newMatch)
	document.body.appendChild(resetButton)
}

function newMatch() {
	playerScore = 0
	cpuScore = 0
	updateScore()

	let resetButton = document.querySelector("#reset")
	resetButton.remove()

	let outcomeP = document.querySelector("#outcome")
	outcomeP.textContent = ""

	let weaponButtons = document.querySelectorAll("button")
	weaponButtons.forEach((button) => {
		button.removeAttribute("disabled")
	})

	let refereeP = document.querySelector("#referee")
	refereeP.textContent = "Champion, pick your weapon."
	updateScore()

}

activateWeaponButtons()
