// Import the express package.  If you get an error:  npm install express
var express = require('express');

// Create our express app
var app = express();

// Listen on port 8080
app.listen(8080, function() {
	console.log('Listening on http://localhost:8080');
});

// Serve index.html in the current directory
app.use(express.static('./'));
