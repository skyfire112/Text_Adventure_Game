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