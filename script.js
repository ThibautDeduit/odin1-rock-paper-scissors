const weapons = ["rock", "paper", "scissors"]

function getPlayerChoice() {
	let playerChoice
	while (!weapons.includes(playerChoice)) {
		playerChoice = prompt("Do you choose rock, paper, or scissors?")
			.toLowerCase()
	}
	return playerChoice
}

console.log("Your choice is: " + getPlayerChoice())
