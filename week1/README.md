# Week 1 - March 10th

## Pre-class

If you are absolutely new to Javascript, please check out one (or more)
of these sources before class to get a jump start:
- [W3Schools](https://www.w3schools.com/js/default.asp)
- [Code Academy - Intro to Javascript](https://www.codecademy.com/learn/introduction-to-javascript)
- [Code School - Javascript Part 1](http://javascript-roadtrip.codeschool.com/levels/1/challenges/1)
- [YouTube](https://youtu.be/fGdd9qNwQdQ) has some great intro videos on Javascript


## [Variables](https://www.w3schools.com/js/js_variables.asp)
Variables allow us to store values.  Variables can be created three different ways: `var`, `let`, `const`.
`var` and `let` are _almost_ the same.  I'll use _var_ in class, but feel free to use _let_.

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
var a = 23;			// This is a statement.  We are creating a variable called 'a'.
a + 10;				// This is not a statement.  It's an expression.
if(a>10) doThis();		// This is a statement.
```

Note that both expressions and statements end with a semicolon.  This allows us to put more than one statement on a line:
`var a=10; var b=20; var c=a*b;`

Also note that comments start with `//`.

## Types
Javascript has seven main types:
- `Number` (0, 0.1, 22, etc)
- `String` (anything that is text: `My name is Sergei`)
- `Boolean` (`true` or `false`)
- `Date` (represents a point in time, stored as milliseconds since Jan 1 1970 UTC)
- `Object` (a collection of name/value pairs: `{firstName:'Sergei', lastName:'G', age:34}`)
- `Array` (a collection of other types: `['Sergei','Mark','Samantha']`)
- `Function` (functions allow us to execute specific named chunks of code)

### [Numbers](https://www.w3schools.com/js/js_numbers.asp)
Numbers are exactly what they sound like: They store numeric values.  We can preform numeric operations on them:
- `1 + 2`
- `9 - 2`
- `10 * 10`
- `100 / 3`

We can also use built-in `Math` functions:
- Round numbers with `Math.round(12.3)`
- Get a random number with `Math.random()` (this will return a decimal between 0 and 1)
- [Lots of other `Math` functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)


### [Strings](https://www.w3schools.com/js/js_strings.asp)
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


## [Booleans](https://www.w3schools.com/js/js_booleans.asp)
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
!true				// NOT true, so false.  This is read as 'bang true'.
```

## [Typecasting](https://www.w3schools.com/js/js_datatypes.asp)
Javascript is what is a called a _weak-typed_ language.
That means a value can start off as one type and be used as a different type.

Let's see an example of this:
`'2' * '2'`.  Note that we are trying to multiply text, that doesn't make sense, so Javascript tries to convert the text into a number for us.

Let's try another example: `'2' + '2'`.  Notice that now we get `'22'` instead of the expected `4`.  Why?
Because Javascript saw two strings that were being concatenated together (remember that `+` is used for addition and concatenation).  What if we had a string and we wanted to force it into a number?

Javascript has a few different ways to do it:
```
var numberString = '123';
Number(numberString);			// use the Number constructor
+numberString;					// Force a positive sign to it
1*numberString;					// Multiply it by 1
parseInt(numberString);			// Use the built-in [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function
```

We can also force a number into a string a few different ways:
```
var number = 123;
String(number);					// Use the String constructor
number.toString();				// Use the Number's [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) function
number + '';					// Adding a string to a number will always return a string.
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
a + b;
```


### `console.log()`
`console.log()` allows your code to output to the Chrome console.  This may seem like a strange thing at first, but it will become an invaluable debug tool.  Examples:

```
console.log('A string');
console.log(myVariable);
console.log(myName, myAge);
console.log('My name is %o, my age is %o.', myName, myAge);
```

## `alert()` and `prompt()`
We can use `alert()` to display a message to the user: `alert('Hi!')`

`prompt()` allows us to ask the user for input: `prompt('Your name');`

We can combine the two to create simple programs:
```
var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;
alert('Hello ' + fullName + '!');
```

## [Objects](https://www.w3schools.com/js/js_objects.asp)
Objects are one of the most powerful features of Javascript.
An object is a collection of values with names, called _properties_:
```
var myObj = {
	color: 'red',
	shape: 'square',
	size: 5
};
```
Note that objects are created with curly braces (`{}`) and note the comma between properties.
We can access a property using _dot notation_:
```
myObj.color			// 'red'
myObj.size			// 5
myObj.blah			// undefined
```

We can change or create new properties the same way:
```
myObj.size = 6;
myObj.name = 'My Red Square';	// create a new property
```

## [Arrays](https://www.w3schools.com/js/js_arrays.asp)
Arrays are ordered collections of unnamed values.  These are all arrays:
```
var scores = [80,77,55];	// Note the square brackets
['cat', 'dog', 'bird'];		// Arrays can contain any type
[23, 'Nick', false, [1,2,3]]	// Arrays can contain all different values and even other arrays
```

Arrays have a `length` property that tells you the size:
```
[].length;			// 0
[1].length;			// 1
[1,4,11,-22].length		// 4
```

We can access the values inside an array by using _array notation_.
We simply append the _index_ (or position) of the item we want in square backets to the array:

```
var myArray = ['cat','dog','mouse','bird'];
myArray[0];			// Access the first element.  Note that it is 0.
myArray[2];			// Access the third element.
myArray[88];			// undefined
myArray[myArray.length-1];	// Access the last element
```
We _push_ items on to an array and _pop_ them off:
```
var list = [];			// Start with an empty array
list.push(10);			// push 10 onto our array
list.push(20);			// push 20 onto it
list;				// view our array: [10,20]
list.pop();			// returns the _last_ item on the array: 20
```

## [Functions](https://www.w3schools.com/js/js_functions.asp)
Functions are blocks of code that we can _execute_ or run:
```
function sayHi() {				// define our function
	console.log('Hi!');
}

sayHi();					// execute our function
```

Functions can have _arguments_ and _return_ values:
```
function add(a,b) {				// Our function takes two arguments: a and b
	return a + b;				// Our function returns the value of the expression a+b
}
var answer = add(42,42);
```
