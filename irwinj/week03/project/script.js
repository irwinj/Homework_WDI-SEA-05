div with a box where you enter number of players (1-6), i
var numPlay = i
//number of players - sets $json.(playVar(army)) according to number of players

var playVar
//numPlay modified to current player turn

var attackedCountry =
	($json.countryData(attack))

function allCount(){
	each.countries()
} //checks countries for a value

function allPlay(){
} //checks all countries for owner, adds them up 1+1, see if anyone = total countries

function allReserve(){	
} //returns number of armies all player has, or sets it at the start of game

function country(){
}	// returns a value inside of country array

function changePlay(){
	playVar - 1;
		if playVar = 0, set playVar = numPlay
} //changes player unless it's 0, then it becomes the number of players
	
function diceRoll(playerRoll){
	playerRoll.push(Math.floor(Math.random()*6)+1);
}
var attackerRoll = {};

var defenseRoll = {};

function diceRolls(armyCount){
	armyCount.text - 1
		if >=3, = diceRoll(attackerRoll) x 3;
		else = diceRoll(attackerRoll) x value //need to make this work for both
}	//same for defense up to 2

function sortRolls(){
	attackerRoll.sort(function(a, b){return a-b});
	defenseRoll.sort(function(a, b){return a-b});
}

function armyCount(x){
	$document.getElementsByClass(($json.countryData(attack:"x"))
}	//find country name json element in defenseState attack 2, return CSS text field
//fix variables and this stuff tomorrow querySelector FILTER
function armyChange(attdef){
	if ((attackRoll[0] - defenseRoll[0]) > 0){
		armyCount(1).text - 1, setCSSClassText armyCount
	else(var x = armyCount(2).text - 1, setCSSClassText armyCount, setCSSClassText)
}	
	if ((attackRoll[1] - defenseRoll[1]) > 0)
		$document.getElementsByClass(($json.countryData(attack:2)).text - 1, setCSSClassText
		//find json element in defenseState attack 2
		($document.getElementsByClass(($json.countryData(attack:1)).text - 1, setCSSClassText)
	} else null //do nothing
	}//compares sorted arrays, subtracts army from loser 
	if (armyCount(2).text <= 0) {
		var y = armyCount(1).text;
		$json.playVar.army.text + y;
		armyCount(1).set = 0
	} //if defense has no armies, move attacker armies to reserve for reapportioning
	set each.$json.countryData.attack = 0
	//clear attack state
	initPop
}

ENDTURN BUTTON
	checks if playVar(army) = 0, changePlay()
	//makes sure player has placed all armies
		playVar(army) + (playVar(owner) / 3) (minimum 3) //need to add a country counter, add countries to an array and return length)
		//adds armies to playVar(army)
		somehow check if player countrols continent //save for last
			initPop
			else alert (playVar + "You cannot end your turn while you have armies in reserve!"

// swith(gamestate) {
// 	case: "init"
// 		initPop(e);
// 		break;
// 	case: "addArmy"
// 		addArmy(e);
// 		break;

// }  no switch since I did a heuristic

// Switch (gamestate)
// //activated when a player clicks
// 	initPop(playVar)
// 		break
// 	addArmy
// 		break
// 	playerTurn
// 		break
// 	cancelAttack
// 		break
// 	attackPlayer
// 		break


initPop //(SWITCH 1)
	allCount(armies) = 0
	else = AddArmy
	//if any countries have 0 armies, continues
	playVar(army) > 0
		else changePlay, switch
	//and player has more than 0 armies (or it loops back)
	country(armies) = 0
	//and the country has no armies (otherwise do nothing)
		FUNCTION = then +1 playerarmy country(armies) && -1 playVar(army)
		//adds 1 to country
		allPlay(owner) = ##, WINNER!  //index of player.countries
			else updates scoreboard //(if I have time)
		//totals player countries, checks if any player owns the total number of countries, if so they win!
		changePlay
		if allCount = 0
				if playVar(army) > 0, ("Please place an army on an open country, " + playVar)
				else switch
				//there is an open country, so cycling through until "playVar(army)" > 0
		else allCount > 0
				switch
				//all countries have an army, so moving on to populate countries

addArmy //(SWITCH 2)
	allReserve > 0 //checks if all players have any armies in reserve
		playVar(army) > 0
			else changePlay, addArmy
		//player has armies, so we'll add armies to countries (or it changes player and loops back)
		country(owner) = playVar
		//and it is the player's country (otherwise do nothing)
			then +1 country(army), -1 playVar(army), changePlay
				if playVar(army) > 0, ("Please place an army on your country, " + playVar)
				else switch, 

playerTurn
	allCount(attack) = 0 //player hasn't declared a country to attack from
	(playVar + " choose country to attack from, or end your turn")
		if country(owner) = playVar
		country(army) > 1
		//player must choose one of their own countries with more than 1 army, otherwise nothing
			country(attack) = 1
			Highlight chosen country box
			"Choose Country to attack, or cancel"
			//changes country to active attack state, highlights box, changes message
			update gamestate to attackPlayer

cancelAttack
	if country(attack) = 1, country(attack) = 0
		switch
	//if they click the country they declared, attack is cancelled

attackPlayer
	($json("attack")=1).borders && !country(owner)=playVar
	//return the country with active attack, then see if the country clicked is one of it's neighbors
	//then make sure it's not current player's country
		attackedCountry = selection
		//sets attackedCountry variable
		diceRoll








