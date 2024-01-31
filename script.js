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
console.log("The player chooses: " + getPlayerChoice())
console.log("The computer chooses: " + getCpuChoice())
