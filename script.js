const weapons = ["rock", "paper", "scissors"]

function getPlayerChoice() {
	let playerChoice
	while (!weapons.includes(playerChoice)) {
		playerChoice = prompt("Do you choose rock, paper, or scissors?")
			.toLowerCase()
	}
	return playerChoice
}

function getCpuChoice() {
	return weapons[parseInt(Math.random()*3)]
}

function playRound(weapon1, weapon2) {
	switch (weapon1) {
		case "rock":
			switch (weapon2) {
				case "rock":
					console.log(`It's a draw: ${weapon1} against ${weapon2}`)
					break
				case "paper":
					console.log(`You lose... ${weapon2} beats ${weapon1}`)
					break
				case "scissors":
					console.log(`You win! ${weapon1} beats ${weapon2}`)
					break
				default:
					console.log("Something's wrong with weapon2")
					break
			}
			break
		case "paper":
			switch (weapon2) {
				case "rock":
					console.log(`You win! ${weapon1} beats ${weapon2}`)
					break
				case "paper":
					console.log(`It's a draw: ${weapon1} against ${weapon2}`)
					break
				case "scissors":
					console.log(`You lose... ${weapon2} beats ${weapon1}`)
					break
				default:
					console.log("Something's wrong with weapon2")
					break
			}
			break
		case "scissors":
			switch (weapon2) {
				case "rock":
					console.log(`You lose... ${weapon2} beats ${weapon1}`)
					break
				case "paper":
					console.log(`You win! ${weapon1} beats ${weapon2}`)
					break
				case "scissors":
					console.log(`It's a draw: ${weapon1} against ${weapon2}`)
					break
				default:
					console.log("Something's wrong with weapon2")
					break
			}
			break
		default:
			console.log("Something's wrong with weapon1")
			break
	}
}

while (true) {
	playRound(getPlayerChoice(),getCpuChoice())
}
