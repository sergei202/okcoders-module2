# Week 3 - March 24th

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
```
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

## NodeJS Reading
- https://blog.codeship.com/node-js-tutorial/
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
