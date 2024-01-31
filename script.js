let refereeMessage = "Here comes a new challenger!"
const weapons = ["Rock", "Paper", "Scissors"]

let playerScore = 0
let cpuScore = 0
let scoreMessage = `Score: ${playerScore} - ${cpuScore}`

function promptPlayer() {
	let playerInput =  prompt(
		`${refereeMessage}\n
		${scoreMessage}\n
		Do you choose Rock, Paper, or Scissors?`
	)
	let capitalizedPlayerInput = playerInput.at(0).toUpperCase()
		+ playerInput.slice(1).toLowerCase()
	return capitalizedPlayerInput
}

function getPlayerWeaponChoice() {
	let playerWeaponChoice
	while (!weapons.includes(playerWeaponChoice)) {
		playerWeaponChoice = promptPlayer()
	}
	return playerWeaponChoice
}

function getCpuWeaponChoice() {
	return weapons[parseInt(Math.random()*3)]
}

function playRound(weapon1, weapon2) {
	switch (weapon1) {
		case "Rock":
			switch (weapon2) {
				case "Rock":
					drawRound(weapon1, weapon2)
					break
				case "Paper":
					loseRound(weapon1, weapon2)
					break
				case "Scissors":
					winRound(weapon1, weapon2)
					break
				default:
					refereeMessage = "Something's wrong with weapon2"
					break
			}
			break
		case "Paper":
			switch (weapon2) {
				case "Rock":
					winRound(weapon1, weapon2)
					break
				case "Paper":
					drawRound(weapon1, weapon2)
					break
				case "Scissors":
					loseRound(weapon1, weapon2)
					break
				default:
					refereeMessage = "Something's wrong with weapon2"
					break
			}
			break
		case "Scissors":
			switch (weapon2) {
				case "Rock":
					loseRound(weapon1, weapon2)
					break
				case "Paper":
					winRound(weapon1, weapon2)
					break
				case "Scissors":
					drawRound(weapon1, weapon2)
					break
				default:
					refereeMessage = "Something's wrong with weapon2"
					break
			}
			break
		default:
			refereeMessage = "Something's wrong with weapon1"
			break
	}
	updateScore()
}

function winRound(weapon1, weapon2) {
	refereeMessage = `You win! ${weapon1} beats ${weapon2}`
	playerScore++
}
function loseRound(weapon1, weapon2) {
	refereeMessage = `You lose... ${weapon2} beats ${weapon1}`
	cpuScore++
}
function drawRound(weapon1, weapon2) {
	refereeMessage = `It's a draw: ${weapon1} against ${weapon2}`
}

function updateScore() {
	scoreMessage = `Score: ${playerScore} - ${cpuScore}`
}

while (true) {
	playRound(getPlayerWeaponChoice(), getCpuWeaponChoice())
}
