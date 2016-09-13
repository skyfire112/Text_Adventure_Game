var readline = require('readline');

var readlineThing = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var game = {
    start: function() { 
        beginText()
        setTimeout(function() {
            initialize()
        }, 6000)
    },
    restart: function() {
        game.start();
    }
}

var beginLoad;
function beginText() {
 beginLoad = setTimeout(function() {
   console.log(" ");
   setTimeout(function() {
     console.log("   ---=====---");
     setTimeout(function() {
       console.log("  Game Starting");
       setTimeout(function() {
         console.log("   ---=====---")
         setTimeout(function() {
           console.log(" ")
         }, 1000)
       }, 1000)
     }, 1000)
   }, 1000)
 }, 1000)
}

function initialize() {
            console.log("Welcome to Helio Project I")
    readlineThing.question("What is your name? ", function(answer) {
            Name(answer);
            console.log('Hi there ' + answer + " welcome to the game!")
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
            scroll();
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
    currentEnem: null,
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
            console.log("Earthquake");
            finalBoss.health = finalBoss.health - 50;
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

function wait(ms) {
    var start = new Date().getTime();
    for (var end = start; end < start + ms;) {
        end = new Date().getTime();

    }
}

function scroll() {
    console.log("The game begins!")
    wait (1000);
    console.log("[Intro:]");
    wait (2000);
    console.log("The Inferno Realm, a plane of existance which coexists with the universe in which humans live in, Earth.");
    wait (2000);
    console.log("Citizens of this Realm cultivates an unimaginable power, with a punch that rivals with the power of atomic bombs on planet Earth.")
    wait (2000);
    console.log("In the history of the Infernal realm, a foreign traveller had entered this world, yes another player like you...");
    wait (2000);
    console.log("Carving the way to victory, defeating the overlord of terror, a legend had been created");
    wait (2000);
    console.log("However, silently an unknown being had entered the Infernal realm along with the foreign traveller and had accumulated enough power to overwhelm the entire Infernal Realm");
    wait (2000);
    console.log("Soon the foreign traveller was slain...");
    wait (2000); 
    console.log(Player.name + ", the almighty power of the foreign traveller, no the strongest being's power has fused with you and have created another power,");
    wait (2000);
    console.log("it is an unknown power, yet special...")
    wait (4000);
    console.log("With your power of being a " + Player.class + " and your wisdom, you will create another legend");
    wait (2000);
    console.log("Hone your powers well and create another legend.")
    wait (2000);
    console.log("[You are being teleported...]")
}

game.start();