function computerSelect(){
    const arr = ["rock", "paper", "scissors"];
    let getComputerNumber = arr[Math.floor(Math.random() * arr.length)];
    return getComputerNumber.toLowerCase();}



function game() {
  let playerScore = 0;
  let computerScore = 0;



  /*loop the game*/
  for (i = 0; i < 5; i++) {
    const computerSelection = computerSelect();
    const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        /*PLAYER ALWAYS ROCK
      const playerInput = "rock"; 
      const playerSelection = playerInput.toLowerCase();*/
    
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("SCORE: Player: " + playerScore + " Comp: " + computerScore);
  


    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "Draw!";
      } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
          playerScore++;
          return "Player Wins";
        } else {
          computerScore++;
          return "Computer Wins";
        }
      } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          playerScore++;
          return "Player Wins";
        } else {
          computerScore++;
          return "Computer Wins";
        }
      } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
          playerScore++;
          return "Player Wins";
        } else {
          computerScore++;
          return "Computer Wins";
        }
      }
    }
  }

  if (playerScore > computerScore){
    return "Player Wins It All!";
  }
  else if (playerScore < computerScore) { 
    return "Computer Wins It All!";
}
    else {
        return "It's a Draw!";
    }

}

console.log("After Five Rounds, " + game());