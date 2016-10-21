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
            //readlineThing.close();
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
    },
    slime: {
        name: "Slime",
        health: 5,
        skill: {
            attack: function(){
                console.log("Splash");
                Player.health = Player.health - 0;
                console.log("Nothing Happened.")
            }, 
            bounce: function() {
                console.log("Bong Bong Bong")
                Player.health = Player.health - 2;
            }
        }
    },
    Internet_Drone: {
        name: "Internet Drone",
        health: 5,
        skill: {
            attack: function(){
                console.log("Checking your google history...");
                Player.health = Player.health - 2;
                console.log("You are shamed for life.")
            },
            Dank: function(){
                console.log ("Loading your recent google history...")
                Player.health = Player.health - 1;
                console.log("Blood flows out of your nose.")
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
    },
    shop: {
        name: "The shady shop",
        NPC: [],
        items: {

        }
    }
}


var Player = {
    name: "Eric",
    race: "Human",
    class: "Mage",
    gender: "Male",
    health: 20,
    currentLocation: location.town.name,
    currentEnemies: null,
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

var NPC = {
    priest: {
        heal: function() {
            //do heal
        }
    },
    ShopKeeper: {
        sell: function () {
            //sell
        }
    }
}

function Name(answer) {
    Player.name = answer;
}

function gender(answer) {
    Player.gender = answer;
}

function rollDice() {
    return Math.floor(Math.random() * 6+1);
    //Math.floor = rounds down to the nearest whole number
    //Math.random = choose a random number between 0 and 1
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
            console.log("Universal Collapse!");
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
    wait (3000);
    console.log("Citizens of this Realm cultivates an unimaginable power, with a punch that rivals with the power of atomic bombs on planet Earth.")
    wait (3000);
    console.log("In the history of the Infernal realm, a foreign traveller had entered this world, yes another player like you...");
    wait (3000);
    console.log("Carving the way to victory, defeating the overlord of terror, a legend had been created");
    wait (3000);
    console.log("However, silently an unknown being had entered the Infernal realm along with the foreign traveller and had accumulated enough power to overwhelm the entire Infernal Realm");
    wait (3000);
    console.log("Soon the foreign traveller was slain...");
    wait (2000); 
    console.log(Player.name + ", the almighty power of the foreign traveller, no the strongest being's power has fused with you and have created another power,");
    wait (2000);
    console.log("it is an unknown power, yet special...");
    wait (4000);
    console.log("With your power of being a " + Player.class + " and your wisdom, you will create another legend");
    wait (2000);
    console.log("Hone your powers well and create another legend.");
    wait (2000);
    console.log("[You are being teleported...]");
    wait (2000);
    director();
};

function move(intro) {
    if (intro == true) {
    console.log("Hello " + Player.name + " I am AI, a guider to help you at certain times, and you are currently in " + location.name.town + " i cannot help you fight, but i can help when you don't know what to do, so to ask for my help, you can call my name. But for now you can explore the town! Good Luck!");
    } else if (intro == false) {
    readlineThing.question("What do you want to do? [To move, type North, South, West and East.]", function(answer) {
        if (Player.currentLocation == location.town.name) {
            if (answer == "North") {
                readlineThing.question (" Do you want to enter " + location.shop.name + "?", function(answer) {
                    if (answer == "Yes"){
                        readlineThing.question("What do you want to buy? [1 = bomb, 2 = unlimited teleportation to town]", function(answer) {
                            if (answer == "1") {
                                console.log("[You dig your bag for money, but ends up with nothing.]")
                                wait (2000);
                                console.log("The shopkeeper stares at you.")
                                wait (1000);
                                console.log("Fine, have this bomb, it should keep you alive, so don't die and haunt me saying, ")
                                wait (100);
                                console.log("Gah!!! It's your fault, that i died!!!")
                                wait (100);
                                console.log("System: You have recieved a bomb, along with another stare...")
                                wait (500);
                                console.log("you leave.")
                                move(false)
                            } else if (answer == "2") {
                                console.log("[You dig your bag for money, but ends up with nothing, except for a rotten sandwich.]")
                                wait (2000);
                                console.log("The shopkeeper stares at you.")
                                wait (1000);
                                console.log("You make an awkward laugh.")
                                wait (1000);
                                console.log("The shop keeper stares at you.")
                                wait (1000);
                                console.log("While staring, he grabs the teleportation device and walks to you.")
                                wait (1000);
                                console.log("He grabs the half eaten sandwhich and places the device into your bag.")
                                wait (500);
                                console.log("The shopkeeper eats the sandwhich and tosses you out of the shop.")
                                wait(500);
                                move(false)
                            }
                        })
                    } else if (answer == "No") {
                        console.log("You did not enter.")
                        move(false)
                    }
                })
            } else if (answer == "West") {
                console.log ("You bump into a huge dark figure.")
                wait (1000);
                console.log ("A huge man looms over you...") 
                wait (1000);
                console.log ("You awkwardly smile.")
                Player.health = Player.health - 5;
                console.log ("You have lost 5 health.")
                move(false)
            } else if (answer == "East") {
                readlineThing.question ("Do you want to enter " + location.woods.name + "? [Yes or No]", function(answer) {
                    if (answer == "Yes") {
                        console.log ("You have entered the " + locations.woods.name + ".")
                        director();
                    } else if (answer == "No") {
                        console.log ("You did not enter.")
                        director();
                    }
                })
            } else if (answer == "South") {
                console.log ("A healer is sleeping.")
                readlineThing.question ("Do you want to leave?")
                if (answer == "Yes") {
                    readlineThing.question ("Do you want to wake it up?")
                    if (answer == "Yes") {
                        console.log ("The healer wakes up and stares at you.")
                        console.log ("You stare him back.")
                        Player.health = Player.health - 1;
                        console.log ("system: you lost 1 health from fear.")
                        Player.health = Player.health + 3;
                        console.log ("You were healed out of pity...")
                        console.log ("system: gained 3 health.")
                        move(false);
                    }
                } else if (answer == "No") 
                console.log ("You left.")
                move(false);
            }
        } else if (Player.currentLocation == location.woods.name) {

        }
    })
} 
}
function director() {
    var diceThrow = rollDice();
    if (Player.currentlocation == location.woods.name){
        if (diceThrow > 0) {
            battle();
        }
    } else if (Player.currentLocation == location.town.name) {
        console.log("You are currently in town. Please choose a direction on where you want to go.");
        playerChoice();
        move(false)
    } 
}

move();
//director();

function battle () {
    var diceThrow = rollDice();
    if (diceRoll < 3) {
        console.log ("There is no enemy.")
        move(false);
    } else if (diceroll > 2){
    console.log("A wild " + chooseEnemies + " appeared!");
    readlineThing.question("What will you do? [Fight or Run] ", function(answer) {
        if (answer == "Run"){
            console.log("You have fled from battle.")
             readlineThing.close();
             move(false);
        } else if (answer == "Fight"){
            console.log("What will you do?")
                if (Player.chooseClass == mage) {
                    readlineThing.question("Choose skill number 1, 2, or 3. To activate press 1, 2, or 3, to activate the skill respectively.", function(answer) {
                        if (answer == "1") {
                            console.log (chooseClass.Player.skill["1"])
                        } else if (answer == "2") {
                            console.log (chooseClass.Player.skill["2"])
                        } else if (answer == "3") {
                            console.log (chooseClass.Player.skill["3"])
                        }
                    })
                }
            }
        });   
    battle();
    } if (Player.health == 0) {
        console.log ("You have died. Now ressurecting...")  
        wait (1000);
        console.log ("Ressurection location: [" + Player.location.town.name + "]")
        wait (500);
        console.log ("You have ressurected.")
        wait (1000);
        move (false);
    }
}  

function playerChoice() {

}

function chooseEnemies() {
    var diceRoll = rollDice()
    if (diceRoll == 1) {
        enemies.ogre
    } else if (diceRoll == 2) {
        enemies.slime
    } else if (diceRoll == 3) {
        enemies.Internet_Drone
    }
}


game.start();