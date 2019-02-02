
function play() {
    var startingBet = document.getElementById("startingBet").value
    var bet = startingBet
    var betsTotal = [];
	if (startingBet <= 0){
		alert("You must bet more than 0");
		return;
	}

  while (bet > 0 ) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = dice1 + dice2

    if (diceRoll != 7) {
      bet -= 1
    } else {
      bet += 4
    }
    betsTotal.push(bet)
  }


    var findMax = 0;

  for (var arrayPosition = 0; arrayPosition < betsTotal.length; arrayPosition++) {
        if (betsTotal[arrayPosition] > findMax){
            findMax = betsTotal[arrayPosition];
        }
    }

results();

}


function results() {
  document.getElementsById("results").style.display = "block";
  document.getElementById('bet').innerText = "$" + startingBet;
  document.getElementById('goingBroke').innerText = betsTotal.length;
  document.getElementById('amountWon').innerText = "$" + findMax;
  document.getElementById("playButton").innertext = "Play Again"+ "?";
}
