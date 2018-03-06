# Week 1 - March 10th

## Pre-class

If you are absolutely new to Javascript, please check out one (or more)
of these sources before class to get a jump start:
- [Code Academy - Intro to Javascript](https://www.codecademy.com/learn/introduction-to-javascript)
- [Code School - Javascript Part 1](http://javascript-roadtrip.codeschool.com/levels/1/challenges/1)
- [YouTube](https://youtu.be/fGdd9qNwQdQ) has some great intro videos on Javascript


## Variables
Variables allow us to store values.  Variables can be created three different ways: `var`, `let`, `const`.
We'll only use `var` for the first few weeks.

Variable name can't have spaces and must start with a letter.  Variables use _camel case_:
```
var a = 12;
var name = 'Steve';
var myFirstName = 'Sergei';
var favoriteFood = 'pizza';
```

## Expressions and Statements
Whenever we use something as a _value_, it's called an _expression_.
Expressions can be simple values or variables, or combined with _operators_.  The following are all expressions:

```
5;
3 + 5;
a + 5;
a + b + (5 * 5);
'Hello' + 'World';
```

_Statements_ are basically actions.  Assigning variables are statements, loops and `if` blocks are as well:
```
var a = 23;			// This is a statement.  We are creating a variable called 'a'
a + 10;				// This is not a statement.  Nothing get changed.
if(a>10) doThis();	// This is a statement.
```

Note that both expressions and statements end with a semicolon.  This allows us to put more than one statement on a line:
`var a=10; var b=20; var c=a*b;`

Also note that comments start with `//`.

## Types
Javscript has seven main types:
- `Number` (0, 0.1, 22, etc)
- `String` (anything that is text: `My name is Sergei`)
- `Boolean` (`true` or `false`)
- `Date` (represents a point in time, stored as milliseconds since Jan 1 1970 UTC)
- `Object` (a collection of name/value pairs: `{firstName:'Sergei', lastName:'G', age:34}`)
- `Array` (a collection of other types: `['Sergei','Mark','Samantha']`)
- `Function` (functions allow us to execute specific named chunks of code)

### `Number`
`Number`s are exactly what they sound like: They store numeric values.  We can preform numeric operations on them:
- `1 + 2`
- `9 - 2`
- `10 * 10`
- `100 / 3`

We can also use built-in `Math` functions:
- Round numbers with `Math.round(12.3)`
- Get a random number with `Math.random()` (this will return a decimal between 0 and 1)
- [Lots of other `Math` functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)


### `String`
Strings are anything that is text.  Javascript reads anything in single or double quotes as strings:
```
'Hi there!'
"Hello"
```
Strings can be _concatenated_  (joined together) with `+`:
```
'Hello' + ' there';
'Hi' + ' ' + 'there';
```

There are also [lots of `String` functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).


## `Boolean`
Booleans are simply `true` or `false`: `var a=true; var b=false;`

Expressions can be turned into booleans by using logical operators:

- `==` is the _equality_ operator, `===` is the _strict equality_ operator.  We'll always use the strict version.
- `!` is the _NOT_ operator.  It converts a true into a false and vise-versa.
- `&&` is the _AND_ operator.  `a && b` both `a` and `b` must be true for the expression to be true.
- `||` is the _OR_ operator.  `a || b` if either `a` or `b` are true then the expression is true.

```
1 === 1;			// is 1 equal to 1?  Yes, so returns true.
1 !== 0;			// is 1 NOT equal to 0?  Yes, so returns true.
10 < 5;				// is 10 less than 5?  No, so returns false.
!true				// we can use the exclamation mark as _not_.  This is read as 'bang true'.
```

## Chrome Console
The Chrome Console is a great place to run Javascript.  We can access it multiple ways:
- The Chrome Menu: `More tools` > `Developer Tools`
- Mac: `Command + Option + I`
- Windows/Linux: `F12` or `Control + Shift + I`

We can run single line expressions by just typing them out and pressing enter:
- `10 + 20` => `30`
- `'Hello'` => `'Hello'`
- `'Hello + ' ' + 'World'` => `'Hello World'`

We can run more complex multi-line expressions by using shift-enter:
```
var a = 1;
var b = 2;
a + b;```

### `console.log()`
`console.log()` allows your code to output to the Chrome console.  This may seem like a strange thing at first, but it will become an invaluable debug tool.  Examples:
```
console.log('A string');
console.log(myVariable);
```
