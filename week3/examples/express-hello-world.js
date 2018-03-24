// Hello World express web server.
// Don't forget to install express: npm install express

// Import the express module.
var express = require('express');

// Create an express app
var app = express();

// Add a GET request handler at root
app.get('/', function(req,res) {
	res.send('<h1>Hello World!</h1>');
});

// Tell our app to listen on port 8080
app.listen(8080);

// Tell the user we're ready to go
console.log('Listening at http://localhost:8080');
