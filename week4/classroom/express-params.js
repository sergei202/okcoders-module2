// Import the express package.  If you get an error:  npm install express
var express = require('express');

// Create our express app
var app = express();

// Listen on port 8080
app.listen(8080, function() {
	console.log('Listening on http://localhost:8080');
});

// Go to localhost:8080/echo/hi
app.get('/echo/:text', function(req,res) {
	res.json(req.params.text);
});
