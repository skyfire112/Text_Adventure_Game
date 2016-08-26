var game = {
	start: function() {
		var readline = require('readline');

		var readlineThing = readline.createInterface({
			input: process.stdin,
			ouput: process.stdout
		});

		readlineThing.question("What is your name", function(answer){
			console.log('Hi there' + answer + ", and welcome to the game!")
			readlineThing.close();
		})
	},
	restart: function() {
		game.start();
	}
}


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

function chooseClass(answer) {
	Player.class = answer;
	Player.skill["1"] = function() {
				console.log("Take this");
				finalBoss.health = finalBoss.health - 10;
					}
		if (Player.class == "Mage") {
			Player.skill["2"] = function() {
				console.log("Eat fire");
				finalBoss.health = finalBoss.health - 20;
			}
			Player.skill["3"] = function() {
			console.log("I haz more health");
			if (Player.health > 10) {
				Player.health = 20;
			} else {
				Player.health = Player.health + 10;
			}
		}
	} else if (Player.class == "Warrior") {
			Player.skill["2"] = function() {
				console.log("Strike");
				finalBoss.health = finalBoss.health - 10;
			}
			Player.skill["3"] = function() {
				console.log("Overlord's Strike");
				Player.health = Player.health + 10;
			}
	} else if (Player.class == "Thief") {
			Player.skill["2"] = function() {
				console.log("Back Stab");
				finalBoss.health = finalBoss.health - 20;
			}
			Player.skill["3"] = function() {
				console.log("scratch");
				Player.health = Player.health + 10;
			}
		}
}

game.start();