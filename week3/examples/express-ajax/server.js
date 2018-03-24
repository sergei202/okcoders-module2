// Express static example
// Don't forget to install express: npm install express

// Import the express module.
var express = require('express');

// Create an express app
var app = express();

// Serve everything in the public/ directory
app.use(express.static('public/'));

// Add a route handler at /test
app.get('/test', function(req,res) {
	res.send('The server said Hi!');
});

// Tell our app to listen on port 8080
app.listen(8080);

// Tell the user we're ready to go
console.log('Listening at http://localhost:8080');
