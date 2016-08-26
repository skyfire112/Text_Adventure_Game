var readline = require('readline');

var readlineThing = readline.createInterface({
	input: process.stdin,
	ouput: process.stdout
});

readlineThing.question("What is your name", function(answer){
	console.log('Hi there ' + answer + ", welcome to the game!")
	readlineThing.close();
})
//console.log("This game works?");


var Player = {
	name: "Eric",
	race: "Human",
	class: "Mage",
	gender: "Male",
	health: 20,
	skill: {
		1: null,
		2: null,
		3: null
	},
	eat: function() {
		if (Player.health== 19) {
			health = 20;
		}else if (Player.health == 20) {
			console.log("You are on full health. Stop Eating.");
		}else {
			health = health + 2;
		}
	}
}

var finalBoss = {
	name: "Boss",
	health: 100,
	skill: {
		attack: function() {
			console.log("Get rekt scrub, mlg 360 no scope");
			Player.health = Player.health - 10;
		},
		taunt: function() {
			console.log("go home noob");
		}
	}
}

console.log(finalBoss);