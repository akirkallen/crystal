// GLOBAL VARIBLES

var crystal = {
blue: {
	value:0
},
red: {value:0 
},
green: {
	value:0
},
yellow: {
	value:0
}
};

var CScore	=0;
var TScore	=0;
var winCount	=0;
var lossCount	=0;



// FUNCTTIONS

var getRandom = function(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;

}

var startGame = function() {

CScore = 0;

TScore = getRandom(15,80)

crystal.blue.value = getRandom(1,15);
crystal.green.value = getRandom(1,15);
crystal.yellow.value = getRandom(1,15);
crystal.red.value = getRandom(1,15);

$("#yourScore").html(CScore);
$("#targetScore").html(TScore);


console.log(crystal.blue.value)
console.log(crystal.green.value)
console.log(crystal.red.value)
console.log(crystal.yellow.value)
console.log(TScore)

}

var addValues = function(crystal)  {

	CScore = CScore + crystal.value;

	$("#yourScore").html(CScore);

	checkWin();


	console.log("your score: " + CScore)
}

var checkWin = function() {
if (CScore > TScore) {

	lossCount ++;
	$("#lossCount").html(lossCount);
	alert("You a Looser");
	startGame();
}

else if (CScore == TScore) {

	winCount ++;
	$("#winCount").html(winCount);
	alert("You Did It");


startGame();

}
};

// MAIN PROCESSING

startGame();

$("#blue").click(function() {
	addValues(crystal.blue);
});


$("#green").click(function() {
	addValues(crystal.green);
});


$("#yellow").click(function() {
	addValues(crystal.yellow);
});


$("#red").click(function() {
	addValues(crystal.red);
});
