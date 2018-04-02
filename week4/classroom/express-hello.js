// Import the express package.  If you get an error:  npm install express
var express = require('express');

// Create our express app
var app = express();

// Listen on port 8080
app.listen(8080, function() {
	console.log('Listening on http://localhost:8080');
});

// Add route handler on /
// req=request, res=response
app.get('/', function(req,res) {
	res.send('<html><body><h1>Hi!</h1>');
});


app.get('/one', function(req,res) {
	res.send('<h1>Hello from one!</h1>');
});
