
// function that gets player X's move

// function that checks for a winner

// function that get's player O's move

document.querySelector("#status_container button").addEventListener('click', function(event){
	window.location.reload(false);
})

var allBoxes = document.getElementsByClassName("box");
for (var i = 0; i < allBoxes.length; i++) {
	var box = allBoxes[i];
	box.addEventListener('click', function(event){
		var clickedBox = event.target;
		var innerHTML = clickedBox.innerHTML;
		if(innerHTML == 'X' || innerHTML == 'O') {
			return;
		}
		else if(playerX == true) {
			clickedBox.innerHTML = "X";
			playerX = false;
			document.querySelector("#status_container h2").innerHTML = "Your turn, Player O!"
			checkAllWinners();
		}
		else {
			clickedBox.innerHTML = "O";
			playerX = true;
			document.querySelector("#status_container h2").innerHTML = "Your turn, Player X!"
			checkAllWinners();
		}
	});
} 

var playerX = true;

function checkAllWinners() {
	checkWinner('dig1');
	checkWinner('dig2');
	checkWinner('col1');
	checkWinner('col2');
    checkWinner('col3');
    checkWinner('row1');
    checkWinner('row2');
    checkWinner('row3');
}

function checkWinner (sel) {
	var winningTrio = document.querySelectorAll("div." + sel);
	if (
		(winningTrio[0].innerHTML == "X" && winningTrio[1].innerHTML == "X" && winningTrio[2].innerHTML == "X") ||
		(winningTrio[0].innerHTML == "O" && winningTrio[1].innerHTML == "O" && winningTrio[2].innerHTML == "O")) {
			document.querySelector("#status_container h2").innerHTML = "WINNER!";
		}
}