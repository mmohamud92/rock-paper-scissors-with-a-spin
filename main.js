let wins = 0;
let draws = 0;
let losses = 0;
let rounds = 0;
let userName = prompt("Please enter your username. Please keep the username to less than 10 characters 🙏🏾");
while (userName.length > 10) {
  alert("Keep the username less than 10 characters");
  userName = prompt("Please enter your username");
}
while (validator(userName[0]) === false) {
  alert("Please ensure first character is a letter");
  userName = prompt("Please enter your username");
}
while (userName[0] != userName[0].toUpperCase()) {
  alert("Please ensure the first letter is a capital letter");
  userName = prompt("Please enter your username");
}
function validator(astring) {
  return /^[a-zA-Z]/.test(astring);
}
console.log(validator(userName[0]));
while ((playAgain = true)) {
  let playAgain = true;
  let player1Move = prompt(`Pick rock, paper, scissors, spock or lizard!`);
  function getWinner(player1, player2) {
    if (
      (player1 === "rock" && player2 === "paper") ||
      (player1 === "spock" && player2 === "paper") ||
      (player1 === "lizard" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "rock") ||
      (player1 === `paper` && player2 === "scissors") ||
      (player1 === `lizard` && player2 === "scissors") ||
      (player1 === `spock` && player2 === "lizard") ||
      (player1 === `paper` && player2 === "lizard") ||
      (player1 === "scissors" && player2 === "spock") ||
      (player1 === "rock" && player2 === "spock")
    ) {
      losses++;
      rounds++;
      return -1;
    } else if (
      (player2 === "rock" && player1 === "paper") ||
      (player2 === "spock" && player1 === "paper") ||
      (player2 === "lizard" && player1 === "rock") ||
      (player2 === "scissors" && player1 === "rock") ||
      (player2 === `paper` && player1 === "scissors") ||
      (player2 === `lizard` && player1 === "scissors") ||
      (player2 === `spock` && player1 === "lizard") ||
      (player2 === `paper` && player1 === "lizard") ||
      (player2 === "scissors" && player1 === "spock") ||
      (player2 === "rock" && player1 === "spock")
    ) {
      wins++;
      rounds++;
      return 1;
    } else if (player1 === player2) {
      draws++;
      rounds++;    
      return 0;
    } else {
        alert(`Please only enter rock, paper, scissors, spock or lizard!`)
    }
  }
  rounds = rounds++;
  let choices = ["rock", "scissors", "paper", "spock", "lizard"];
  function computerChoice(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
  let result = getWinner(player1Move, computerChoice(choices));
  if (result === 1) {
    alert(`You win!`)
  } else if (result === -1) {
    alert(`You lose!`);
  } else if (result === 0) {
    alert(`It's a draw!`);
  }
  console.log(result);
  alert(
    `Hey ${userName}
    These are your stats
    Rounds played: ${rounds}, wins: ${wins}, draws: ${draws}, losses: ${losses} `
  );
  if (confirm(`${userName} Would you like to play again?`) === true) {
    playAgain = true;
  } else break;
}