// Import the express package.  If you get an error:  npm install express
var express = require('express');

// Create our express app
var app = express();

// Listen on port 8080
app.listen(8080, function() {
	console.log('Listening on http://localhost:8080');
});

app.use(express.static('./public'));

var items = [
	'Milk',
	'Ham',
	'Cheese'
];

app.get('/items', function(req,res) {
	res.json(items);
});

app.get('/add/:item', function(req,res) {
	console.log(req.params.item);
	items.push(req.params.item);
	res.json(items);
});
