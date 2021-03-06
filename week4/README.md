# Week 4

This week we will learn about NodeJS and server-side Javascript.

## Install NodeJS
Everyone will first need to download and install [NodeJS](https://nodejs.org/en/).  We'll use the LTS version, though either version will work.  LTS stands for _Long Term Support_,  meaning that it's stable and will be supported for at least 2 years by the Node team.

## Command Line Shell
NodeJS is run from the _command line_.  It's not run from a web page or browser, so it doesn't have a DOM.  Let's open a _shell_ (a command line interface) and run node:

### Windows
`Start` > `Run` > `cmd`

You'll see a black windows.  This is the cmd shell.  Type `node` and press enter.

Read about [cmd command basics](https://www.digitalcitizen.life/command-prompt-how-use-basic-commands).

### Mac
Mac come with a built-in shell called the Terminal. Launch it from your /Applications/Utilities folder.

Once opened, type `node` and press enter.

Read about the [Mac Terminal basics](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line).

### Linux
Open `konsole` and type `node`.


## Test Node
When you start node, you'll see a `>` prompt.  This is the node interpreter.  We can run Javascript from here.  Try a few of these:
- `1 + 2`
- `'Hello World'`
- `console.log('testing')`

Notice how this is similar to the Chrome Console. Let's try some more:
- `alert('I wont work!')`
- `prompt('You wont see me')`

`alert()` and `prompt()` don't exist inside Node because there is no DOM. This also means no jQuery.

Press `Ctrl`+`C` twice to exit Node.

## Your First NodeJS Program
Node will run in interpreter mode, as we've seen above, if it's not given a filename.  But if we pass a filename, it will execute the Javascript inside and exit.

Let's create a very simple program:
```js
function sayHi(name) {
    console.log('Hello ' + name);
}
sayHi('Fred');
sayHi('Mary');
```

Save this file as `test.js`.  Now find that file in your shell (you read the shell basics links, right?)

Run it with node: `node test.js`.  You should see something like:
```
Hello Fred
Hello Mary
```

## Arguments
We can make our NodeJS program use command line arguments.

Node has a special global variable called `process` that has a `argv` property.  `argv` is an array of the arguments.

```js
console.log(process.argv);
```
If we save/run the line above, and pass a few arguments:
`node args.js cat dog bird`

We should see something like:
```
[ '/usr/bin/node',
  '/home/sergei/projects/okcoders/module2/week3/examples/args.js',
  'cat',
  'dog',
  'bird'
```

Notice that `argv` also contains the node interpreter and a path to our file.

See the [`args.js`](examples/args.js) and [`add.js`](examples/add.js) examples.

## NodeJS Reading
- https://blog.codeship.com/node-js-tutorial/
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction


## Web servers and Express
NodeJS is usually used as a web server, [Express](https://expressjs.com/) makes that very easy.

Express is a framework which allows us to turn our Node programs into a web server and handle routes.

Read Express's [Hello World](https://expressjs.com/en/starter/hello-world.html) and
[Basic Routing](https://expressjs.com/en/starter/basic-routing.html) first to make sure you understand the basics of Express.

Let's see a very simple example:

```js
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
```

Before running this code, you'll need to install express: `npm install express`

Run the code and point a browser to http://localhost:8080

We just created a web server in less than 10 lines of code!

### `express.static()`
We can have express serve files and directories for using `express.static()`:

```js
app.use(express.static('public/'));
```
Read more about [`express.static()`](https://expressjs.com/en/starter/static-files.html).  See the full example [here](examples/express-static).


### jQuery `$.get()`
[`$.get()`](https://api.jquery.com/jQuery.get/) allows us to make an HTTP GET requests to servers.  We can use this to trigger and get data from our express routes.

```js
$.get('/my-get-route', function(res) {               // // res will hold the server response
    console.log('The server sent back: ' + res);
});
```

See a full example [here](examples/express-jquery-get).

## Quick Links
- [Examples](examples.md)
