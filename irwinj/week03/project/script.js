
// docready



// var countryData = $.getJSON('./countries.json');
var players = {}; //used to change players, check if <=6
var playerTurn = 1;
console.log(countries.alaska)

// console.log(countryData.countries);
// setPlayers();  //not sure what this does

// $('.h1').html(countryData.currentCountry.army) //this is how we'll change CSS to reflect json

// playerTurn++;
// var newPlayer = if (('player' + playerTurn <= 6, newPlayer)
// 				else newPlayer = 1;
// //playerturn change should summon initPop also needs 
// players[newPlayer];



// //set number of players (2-6), distributes armies to players which allows initpop to work
// function setPlayers() {
//     var playNum = prompt("Please select number of players", "2 - 6");
// 	if (playNum === '2') {
// 		for (var i = 1; i <= parseInt(playNum); i++) {
// 			var playerName = 'player' + playNum;
// 			players[playerName] = {};
// 			players[playerName].reserve = 40;
// 			$('#h2').html(players[playerTurn] + ", place an army on an open country!"));
// 		}
// 		initPop(playNum);
// 	} else if (playNum === '3') {
// 		for (var i = 1; i <= parseInt(playNum); i++) {
// 			var playerName = 'player' + playNum;
// 			players[playerName] = {};
// 			players[playerName].reserve = 35;
// 			$('#h2').html(players[playerTurn] + ", place an army on an open country!"));
// 		}
// 		initPop(playNum);
// 	} else if (playNum === 4) {
// 		for (var i = 1; i <= parseInt(playNum); i++) {
// 			var playerName = 'player' + playNum;
// 			players[playerName] = {};
// 			players[playerName].reserve = 30;
// 			$('#h2').html(players[playerTurn] + ", place an army on an open country!"));
// 		}
// 		initPop(playNum);
// 	} else if (playNum === 5) {
// 		for (var i = 1; i <= parseInt(playNum); i++) {
// 			var playerName = 'player' + playNum;
// 			players[playerName] = {};
// 			players[playerName].reserve = 25;
// 			$('#h2').html(players[playerTurn] + ", place an army on an open country!"));
// 		}
// 		initPop(playNum);
// 	} else if (playNum === 6) {
// 		for (var i = 1; i <= parseInt(playNum); i++) {
// 			var playerName = 'player' + playNum;
// 			players[playerName] = {};
// 			players[playerName].reserve = 35;
// 			$('#h2').html(players[playerTurn] + ", place an army on an open country!"));
// 		}
// 		initPop(playNum);
// 	} else {
// 		setPlayers();
// 	}


// 	});
// }

// function initPop(playNum){ //populate empty countries, declare winner
// 	if ($each.countryData = 0) { //??any countries have 0 armies
// 		if (players[newPlayer] > 0) { //current player has reserve
// 			$('.country').click(function() { //add armies to open country
// 				var countryName = $(this).attr('id');
// 				if(countryData.countryName.army = 0) {
// 					addArmy(countryName);
// 					countryName.owner = players[playerTurn];
// 					checkWinner(); //if anyone's array is 42, they win
// 					playerTurn++;
// 				} else {
// 					$('#h2').html(players[playerTurn] + ", place an army on an open country!");
// 				}
// 			}
// 		} else {
// 			playerTurn++; //some player must have armies in reserve still
// 		}; 
// 	} else {
// 		$('#h2').html(players[playerTurn] + ", place your remaining armies!"));
// 		regPop()
// 	}
// }

// function addArmy(countryName) {
// 	countryName.army + 1;
// 	players[playerTurn].reserve - 1;
// 	playerTurn++;//if player doesn't match playerTurn, it becomes other player's turn
// }
			
// function regPop() {	//all countries have >0 armies, moving on to regular population
// 	if (players{}.sum>0); //someone still has armies in reserve
// 		if (players[playerTurn].reserve > 0) {//current player has reserves
// 		//can i set a separate click listener, or do i pass that from earlier?
// 			$('.country').click(function() { //add armies to open country
// 				var countryName = $(this).attr('id');
// 				if(countryData.countryName.owner == players[PlayerTurn]) {
// 					addArmy(countryName);
// 					playerTurn++;
// 					$('#h2').html(players[playerTurn] + ", place your remaining armies");
// 				} else {
// 					$('#h2').html(players[playerTurn] + ", please place armies in your country!");
// 				}
// 			}
// 		else {
// 			playerTurn++;
// 		}
// 	else {
// 		$('#h2').html(players[playerTurn] + " choose country to attack from, or end your turn")
// 		chooseAtt() //if all reserves are played, move on to attack
// 	}
// }

// function WINNER() ////if anyone's array is 42, they win
// 	array.countryName.owner= 42, win! //pseudocode

// var attackingCountry = countryData.attack.1
// // sets attacker country

// var attackedCountry = countryData.attack.2
// //sets defender country
	
// // diceroll
// function diceRoll(playerRoll){
// 	playerRoll.push(Math.floor(Math.random()*6)+1);
// }
// var attackerRoll = {};
// //pushes attack and defense roll to an array
// var defenseRoll = {};

// function diceRolls(armyCount){
// 	$('.countries').click(function() { //add armies to open country
// 		var countryName = $(this).attr('id');
// 		if (countryData.countryName.owner == players[PlayerTurn]) {
// 			countryData.countryName.attack = 1
// 		} 

// 			var countryName = $(this).attr('id');
// 				if(countryData.countryName.owner == players[PlayerTurn])
// 	countryData.army - 1
// 		if >=3, = diceRoll(attackerRoll) x 3; //how do i declare a roll three times
// 		else = diceRoll(attackerRoll) x value //need to make this work for both
// }	//same for defense up to 2

// function sortRolls(){
// 	attackerRoll.sort(function(a, b){return a-b});
// 	defenseRoll.sort(function(a, b){return a-b});
// }

// function armyCount(x){
// 	$document.getElementsByClass(($json.countryData(attack:"x"))
// }	//find country name json element in defenseState attack 2, return CSS text field
// //fix variables and this stuff tomorrow querySelector FILTER
// function armyChange(attdef){

// 	if ((attackRoll[0] - defenseRoll[0]) > 0){
// 		armyCount(1).text - 1, setCSSClassText armyCount
// 	else(var x = armyCount(2).text - 1, setCSSClassText armyCount, setCSSClassText)
// }	
// 	if ((attackRoll[1] - defenseRoll[1]) > 0)
// 		$document.getElementsByClass(($json.countryData(attack:2)).text - 1, setCSSClassText
// 		//find json element in defenseState attack 2
// 		($document.getElementsByClass(($json.countryData(attack:1)).text - 1, setCSSClassText)
// 	} else null //do nothing
// 	}//compares sorted arrays, subtracts army from loser 
// 	if (armyCount(2).text <= 0) {
// 		var y = armyCount(1).text;
// 		$json.playVar.army.text + y;
// 		armyCount(1).set = 0
// 	} //if defense has no armies, move attacker armies to reserve for reapportioning
// 	set each.$json.countryData.attack = 0
// 	//clear attack state
// 	initPop
// }

// ENDTURN BUTTON
// 	checks if playVar(army) = 0, changePlay()
// 	//makes sure player has placed all armies
// 		playVar(army) + (playVar(owner) / 3) (minimum 3) //need to add a country counter, add countries to an array and return length)
// 		//adds armies to playVar(army)
// 		somehow check if player countrols continent //save for last
// 			initPop
// 			else alert (playVar + "You cannot end your turn while you have armies in reserve!"






// playerTurn
// 	allCount(attack) = 0 //player hasn't declared a country to attack from
// 	(playVar + " choose country to attack from, or end your turn")
// 		if country(owner) = playVar
// 		country(army) > 1
// 		//player must choose one of their own countries with more than 1 army, otherwise nothing
// 			country(attack) = 1
// 			Highlight chosen country box
// 			"Choose Country to attack, or cancel"
// 			//changes country to active attack state, highlights box, changes message
// 			update gamestate to attackPlayer

// cancelAttack
// 	if country(attack) = 1, country(attack) = 0
// 		switch
// 	//if they click the country they declared, attack is cancelled

// attackPlayer
// 	($json("attack")=1).borders && !country(owner)=playVar
// 	//return the country with active attack, then see if the country clicked is one of it's neighbors
// 	//then make sure it's not current player's country
// 		attackedCountry = selection
// 		//sets attackedCountry variable
// 		diceRoll








