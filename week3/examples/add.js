// This program adds the two arguments passed to it.

// First check and make sure we have two arguments
if(process.argv.length!==4) {
	console.log('Usage:  node add.js [num1] [num2]');
	process.exit(1);			// Exit out of the program.
}

// Take the first 1st/2nd arguments and convert to numbers
var num1 = +process.argv[2];
var num2 = +process.argv[3];

console.log(num1 + ' + ' + num2 + ' = ' + num1+num2);
