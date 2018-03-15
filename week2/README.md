# Week 2 - March 17th

This week we we learn how to run Javascript inside of a web page and how to interact with it.

## Running Javascript from a Web page
We can run Javascript from a web page (a `.html` file) two ways:
- We can write Javscript code inside of a `<script>` tag
- We can link to a `.js` file with `<script>` tag using the `src` _attribute_

Let's see an example of the first:
```
<html>
	...
	<script>
		alert('Hi!');
	</script>
	<body>
		...
	</body>
</html>
```
This method works great for small programs, and it keeps everything inside one file.  But when your code grows to more than 50 lines, it's time to give it it's own file.

We use the same script tag but point it to a file:
```
<script src="myFile.js"></script>
```

Notice that there is no code _inside_ the `<script>` tag, just the `src` _attribute_.


## Interacting with HTML
We technically can't interact with HTML.  We interact with what the HTML and CSS turn into.  That is called the [_DOM_](https://www.w3schools.com/js/js_htmldom.asp), the _Document Object Model_.  That's just a fancy term for how a web browser displays a web page.

There are two different ways for us to do this:
- DOM methods
- jQuery

### DOM Methods
Every javascript program that runs in a web browser has access to the DOM using the `document` global object.  There a lots of methods on this object, but we'll focus on `getElementById(id)`.  The `id` argument is the `id` attribute of some HTML tag you want to get.  Let's see an [example](http://jsbin.com/buyirofuwo/edit?html,output):
```
<html>
<body>
	<div id="myDiv">Hello from myDiv!</div>
	<script>
		var element = document.getElementById('myDiv');    // pass the same id as the <div> tag above has.
		element.style.backgroundColor = 'red';             // set the background color to red
	</script>
</body>
</html>
```

There are dozens of [element properties and methods](https://www.w3schools.com/jsref/dom_obj_all.asp).

### DOM Events
User actions (hover, click, keydown/keyup, etc) trigger _DOM events_.
We attach _listeners_ to listen to DOM events.  Listeners trigger our Javascript functions.


`element.addEventListener(type,listener)`.

Let's see a quick [example](http://jsbin.com/sacifiloxu/edit?html,output):

```
<html>
<body>
	<div id="myDiv">Click me!</div>

	<script>
		var element = document.getElementById('myDiv');    // pass the same id as the <div> tag above has.

		element.addEventListener('click', function() {     // Attach a click event listener
			element.style.backgroundColor = 'red';         // set the background color to red
		});
	</script>
</body>
</html>
```
