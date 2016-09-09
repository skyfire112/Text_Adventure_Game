var readline = require('readline');

var readlineThing = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var game = {
    start: function() { 
        initialize();
    },
    restart: function() {
        game.start();
    }
}

function initialize() {
    readlineThing.question("What is your name? ", function(answer) {
            Name(answer);
            console.log('Hi there ' + answer + ", welcome to the game!")
            askClass();
    })
}

function askClass() {
    readlineThing.question("Choose your class: (Mage, Warrior, Thief) ", function(answer) {
        chooseClass(answer);
        askGender();

    })
}

function askGender() {
    readlineThing.question("Choose your gender: (Male, Female, Genderless)", function(answer) {
        var isGenderCorrect = false;
        if (answer.toLowerCase() == "male") {
            gender(answer);
            isGenderCorrect = true;
        } else if (answer.toLowerCase() == "female") {
            gender(answer);
            isGenderCorrect = true;
        } else if (answer.toLowerCase() == "genderless") {
            gender(answer);
            isGenderCorrect = true;
        } else {
            console.log("Please enter a valid Gender.");
            askGender();
        }
        if (isGenderCorrect) {
            console.log(Player);
            readlineThing.close();
        }
    }) 
}

var enemies = {
    finalBoss: {
        name: "Boss",
        health: 100,
        skill: {
            attack: function() {
                console.log("get rekt scrub, mlg 360 no scope");
                Player.health = Player.health - 10;
            },
            taunt: function() {
                console.log("go home noob");
            }, 
            stare: function() {
                console.log("Look at my eyes...")
            }
        }
    }, 
    ogre: {
        name: "Shrek",
        health: 10,
        skill: {
            attack: function() {
                console.log("Get Shreked");
                Player.health = Player.health - 5;
            },
            ogreFood: function() {
                console.log("Gotta eat breakfast!")
                enemies.ogre.health = enemies.ogre.health + 2;
            }
        }
    }
}

var location = {
    town: {
        name: "BloodRidge",
        NPC: [],
        Monsters: null
    },
    woods: {
        name: "The Woods",
        NPC: [],
        Monsters: enemies.finalBoss
    }
}


var Player = {
    name: "Eric",
    race: "Human",
    class: "Mage",
    gender: "Male",
    health: 20,
    currentLocation: location.town,
    skill: {
        1: null,
        2: null,
        3: null
    },
    eat: function() {
        if (Player.health == 19) {
            health = 20;
        } else if (Player.health == 20) {
            console.log("You are on full health. Stop eating.");
        } else {
            health = health + 2;
        }
    }
}


function Name(answer) {
    Player.name = answer;
}

function gender(answer) {
    Player.gender = answer;
}

function chooseClass(answer) {
    Player.class = answer;
    Player.skill["1"] = function() {
        console.log("Take this @#%!@#@!#!@!");
        finalBoss.health = finalBoss.health - 10;
    }
     if (Player.class.toLowerCase() == "mage") {
        //Player.health = 10;
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
    } else if (Player.class.toLowerCase() == "thief") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Stabby stab stab");
            finalBoss.health = finalBoss.health - 20;
        }
        Player.skill["3"] = function() {
            console.log("Eat my arrow");
            finalBoss.health = finalBoss.health - 15;
        }
    } else if (Player.class.toLowerCase() == "warrior") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
        }
        Player.skill["3"] = function() {
            console.log("This skill is a placeholder. It does nothing.");
        }
    } else if (Player.class.toLowerCase() == "immortal") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Earthquake");
            finalBoss.health = finalBoss.health - 50;
            console.log("Earthquake");
            finalBoss.health = finalBoss.health - 50;
        }
        Player.skill["3"] = function() {
            console.log("Cosmos destruction");
            finalBoss.health = finalBoss.health - 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        }
    }else {
       console.log("Please enter a valid class.");
            askClass();
    }
}

game.start();