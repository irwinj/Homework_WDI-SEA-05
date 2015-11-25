$(document).ready(function() {
var player = []; //stores player reserves //used to change players, check if <=6
var playerTurn = 1;
setPlayers();  //calls setPlayers() function
startPlay(); //added to test jquery
// $('.h1').html(countryData.currentCountry.army) //this is how we'll change CSS to reflect json
// var blah = $.getJSON('countries.js').countries //variable to get data from json, doesn't seem necessary
function changePlay(){ //changes player, checks for player.length, calls initPop()
	player++;
	if (playerTurn > player.length) {
		playerTurn = 1;
	}
	initPop();
}
// set number of players (2-6), distributes armies to players which allows initpop to work
function setPlayers() {
    var playNum = prompt("Please select number of players (2-6)");
	if (playNum == 2) {
		for (var i = 0; i <= parseInt(playNum); i++) {
			var playerName = 'player' + i; //player1, player 2
			player.push(playerName);
			// player[playerName] = {}; //creates {player1, player2}
			player[playerName].reserve = 40; //sets player1 reserve (armies) to 40, etc
			player[playerName].owner = {};
			console.log(player[i]);
		} 
	} else if (playNum === '3') {
		for (var i = 1; i <= parseInt(playNum); i++) {
			var playerName = 'player' + i;
			player[playerName] = {};
			player[playerName].reserve = 35;
		}
	} else if (playNum === '4') {
		for (var i = 1; i <= parseInt(playNum); i++) {
			var playerName = 'player' + i;
			player[playerName] = {};
			player[playerName].reserve = 30;
		}
	} else if (playNum === '5') {
		for (var i = 1; i <= parseInt(playNum); i++) {
			var playerName = 'player' + i;
			player[playerName] = {};
			player[playerName].reserve = 25;
		}
	} else if (playNum === '6') {
		for (var i = 1; i <= parseInt(playNum); i++) {
			var playerName = 'player' + i;
			player[playerName] = {};
			player[playerName].reserve = 35;
		}
	} else {
		setPlayers();
	}
}

function startPlay(){
	$('#status').html("Player" + playerTurn + " place an army on an open country!");//not showing
	initPop();
}


function initPop(){ //populate empty countries, declare winner
	var fullCountries;
	$('.countries').each(function(index, value){
		if ($(value).text() == '0'){ //if i want to compare to text, parseInt function call
			fullCountries = false;
			checkPlayReserveFree();
			return;

		} else {
			fullCountries = true;
		}
	});

	if (fullCountries) {
		$('#status').text("Player" + playerTurn + " place your remaining armies!");
		regPop();
	}
}

function checkPlayReserveFree()	{	
	$('.countries').unbind();
	if (player['player' + playerTurn].reserve > 0) { //current player has reserve
		$('.countries').each(function(index, value){
			if ($(value).text() == '0') {
				$(value).click(function() {
					addArmyFree($(value))
				}); //add click event listener to +armies
			} //do nothing if value isn't 0
		});
	} else {
		$('#status').text("Player" + playerTurn + "place your remaining armies!")
		changePlay();//if Player doesn't have reserves, others must, change player
	} 
} 

function addArmyFree(country) {
	var armyAmount = parseInt(country.text());
	country.text(armyAmount++); //clicked country adds one army
	player['player' + playerTurn].reserve-- //remove one from reserve
	player['player' + playerTurn].owner.push(country.attr('id')); //sets owner to current player
	if (player['player' + playerTurn].owner.length == 42) { //checks for winner
		alert (player[playerName] + "wins!") //sam's fancy alerts
	} 
	changePlay();
}
			
function regPop() {	//all countries have >0 armies, moving on to regular population
	var reserveSum = 0
	for(var person in player){
		reserveSum += player[person].reserve
	}
	if (reserveSum > 0) { //looping through player armies
			checkPlayReserveTaken();
	} else { //all reserves played, start attack phase
		$('status').text(players[playerTurn] + " choose country to attack from, or end your turn")
			declareAtt();
	}
}

function checkPlayReserveTaken() {	
	$('.countries').unbind();
	player['player' + playerTurn].owner.forEach(function(country){
		$('#' + country).click(function(){
			addArmyTaken();
		});
	});
	$('#status').text("Player" + playerTurn + "place your remaining armies!") //wrong player
} 

function addArmyTaken() {
	parseInt($(value).text) + 1; //clicked country adds one army parseInt?
	parseInt(player[playerName].reserve) -1; //remove one from reserve
	changePlay();
}





//ATTACKPHASE

var attackerCountry; //var for country offense

var defenserCountry; //variable for defense country

function declareAtt(){ //player clicks one of his own countries
	// $('.countries').unbind();
	player['player' + playerTurn].owner.forEach(function(country) { //checks if player owns country
			$('#' + country).click(function(){
				attackCountry(country);
			});
	});
	//else do nothing (do i need to call the function again?)
}

function attackCountry(country) {
	if (attackerCountry === null && parseInt(country.text()) > 1) { //attacker country must have >1 army
		attackerCountry = country.attr('id'); //sets attackCountry to country clicked
		declareDefense(country);
	} else {
		declareDefense(country);
	}
}

function declareDefense(country) {
	if (country === attackerCountry) { //clears attack if it is own country
		attackerCountry = null;
		initPop();
	} else { // declares defense if it's null
		$('countries').attackerCountry.borders.forEach(function(country) { //search json file,checks if clicked is within attackerCountry borders
			// blah.attackerCountry?
			//or just attackerCountry.borders?
			$('#' + country).click(defendCountry);
			});
	}
}

function defendCountry(country) {
	defenserCountry = country.attr('id').text(); //sets defenseCountry to country clicked
	dice();
}

var attackRoll = {}; //attack and defense roll to an array
var defenseRoll = {};
var attackDice = 0
var defenseDice = 0
//how many dice to roll
function dice() {
	attackDice = parseInt(attackerCountry.text()) - 1;
	if (attackDice > 3) {attackDice = 3} //assigns rolls equal to attacker armies - 1
	defenseDice = parseInt(defenderCountry.text()); //assigns rolls equal to defense armies
	if (defenseDice > 2) {defenseDice = 2}
	rollDice();
}

function rollDice() {
	for(var i = 0; i < attackDice; i++){
		diceRoll(attackRoll);
	}
	for(var z = 0; z < defenceDice; i++){
		diceRoll(defenseRoll);
	}
	sortRolls();
	compareRolls1();
	compareRolls2();
	checkDefense();
	clearAttack();
	//initpop?
}
// diceroll - need to push to attack/defense array
function diceRoll(playerRoll){
	playerRoll.push(Math.floor(Math.random()*6)+1);
}
function sortRolls(){
	attackRoll.sort(function(a, b){return a-b});
	defenseRoll.sort(function(a, b){return a-b});
}

function compareRolls1(){
	if ((attackRoll[0] - defenseRoll[0]) > 0){ //attack dice win
		parseInt(defenderCountry.text()) - 1; //remove defense army
	} else if ((attackRoll[0] - defenseRoll[0]) <= 0){ //defense dice win
		parseInt(attackCountry.text()) - 1;//remove attack army
	}
}

function compareRolls2(){
	if ((attackRoll[1] - defenseRoll[1]) > 0){ //attack dice win
		parseInt(defenderCountry.text()) - 1; //remove defense army
	} else if ((attackRoll[1] - defenseRoll[1]) <= 0){ //defense dice win
		parseInt(attackCountry.text()) - 1;//remove attack army
	}
}

function checkDefense(){
	if (parseInt(defenderCountry.text()) <= 0) {
		defenderCountry.owner = null;
		player[playerNumber].reserve = parseInt(attackCountry.text());
		parseInt(attackCountry.text()) = 0;
		attackCountry.owner = null;
	} //should go back to initpop for place
}

function clearAttack(){
	attackerCountry = null;
	defenserCountry = null;
}

// not necessary TODOS:
//ENDTURN BUTTON
// function endturn(){ //connect to CSS button, checks if player has armies left, changes turns
// 	if (player[playerTurn].reserve==0) {
// 		playChange();
// 	}
// 
// show dice rolls

// somehow check if player countrols continent? //save for last
});


