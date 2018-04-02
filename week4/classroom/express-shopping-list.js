// Import the express package.  If you get an error:  npm install express
var express = require('express');

// Create our express app
var app = express();

// Listen on port 8080
app.listen(8080, function() {
	console.log('Listening on http://localhost:8080');
});

// Serve the shopping-list directory
app.use(express.static('./shopping-list'));

// Define an array of starting items
var items = [
	'Milk',
	'Ham',
	'Cheese'
];

// Add a route to get the current items.  Go to http://localhost:8080/items to trigger this route
app.get('/items', function(req,res) {
	res.json(items);
});

// Add a route to add items.  Go to http://localhost:8080/add/new-item to trigger it.
app.get('/add/:item', function(req,res) {
	console.log(req.params.item);
	items.push(req.params.item);
	res.json(items);
});
