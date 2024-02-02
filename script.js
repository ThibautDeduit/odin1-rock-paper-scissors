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

	switch (playerWeapon) {
		case "Rock":
			switch (cpuWeapon) {
				case "Rock":
					drawRound(playerWeapon, cpuWeapon)
					break
				case "Paper":
					loseRound(playerWeapon, cpuWeapon)
					break
				case "Scissors":
					winRound(playerWeapon, cpuWeapon)
					break
				default:
					refereeMessage = "Something's wrong with cpuWeapon"
					break
			}
			break
		case "Paper":
			switch (cpuWeapon) {
				case "Rock":
					winRound(playerWeapon, cpuWeapon)
					break
				case "Paper":
					drawRound(playerWeapon, cpuWeapon)
					break
				case "Scissors":
					loseRound(playerWeapon, cpuWeapon)
					break
				default:
					refereeMessage = "Something's wrong with cpuWeapon"
					break
			}
			break
		case "Scissors":
			switch (cpuWeapon) {
				case "Rock":
					loseRound(playerWeapon, cpuWeapon)
					break
				case "Paper":
					winRound(playerWeapon, cpuWeapon)
					break
				case "Scissors":
					drawRound(playerWeapon, cpuWeapon)
					break
				default:
					refereeMessage = "Something's wrong with cpuWeapon"
					break
			}
			break
		default:
			refereeMessage = "Something's wrong with playerWeapon"
			break
	}
}

function winRound(playerWeapon, cpuWeapon) {
	let pMessage = document.querySelector("#message")
	pMessage.textContent = `You win! ${playerWeapon} beats ${cpuWeapon}`
	playerScore++
	updateScore()
}
function loseRound(playerWeapon, cpuWeapon) {
	let pMessage = document.querySelector("#message")
	pMessage.textContent = `You lose... ${cpuWeapon} beats ${playerWeapon}`
	cpuScore++
	updateScore()
}
function drawRound(playerWeapon, cpuWeapon) {
	let pMessage = document.querySelector("#message")
	pMessage.textContent = `It's a draw: ${playerWeapon} against ${cpuWeapon}`
}

function declareWinner() {
	let pMessage = document.querySelector("#message")
	pScore.textContent = `Score: ${playerScore} - ${cpuScore}`
}

function updateScore() {
	let pScore = document.querySelector("#score")
	pScore.textContent = `Score: ${playerScore} - ${cpuScore}`
}

activateWeaponButtons()
