# Week 2 - March 17th

#### Quick Links
- [Classroom Examples](classroom.md)
- [Homework](homework.md)

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
            element.style.backgroundColor = 'blue';        // set the background color to red
        });
    </script>
</body>
</html>
```

## jQuery
jQuery makes dealing with the DOM much easier.  But at a price: We need to include the jQuery library using a `<script>` tag:

```
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
</html>
```

Once we include the script, we access jQuery using the `$` global object.  jQuery can also be accessed using the `jQuery` global object (both point to the same object), but `$` is shorter and preferred.

jsbin makes it really easy: Click 'Add Library' and select 'jQuery 3.1.0'.

### jQuery `.css()`
Let's see our `backgroundColor` example from the DOM Methods section using jQuery:
```
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
    <div id="myDiv">Hello from myDiv!</div>
    <script>
        $('#myDiv').css('backgroundColor', 'red');
    </script>
</body>
</html>
```
A few important things to notice:
- The `id` has a `#` (hash) in front of it.  This is because jQuery takes a `selector` (more on this later)
- Instead of using `.styles.backgroundColor`, we use the `.css()` method

Here is the [jsbin of this example](http://jsbin.com/soguvazotu/edit?html,js,output).

Read more about it [here](https://www.tutorialspoint.com/jquery/jquery-css.htm).

### jQuery event listeners and `.on()`
We can add event listeners to elements using the `.on()` method:
```
$('#myDiv').on('click', myClickHandlerFunction);
```

Let's see our click example from earlier using jQuery:
```
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
    <div id="myDiv">Hello from myDiv!</div>
    <script>
        $('#myDiv').on('click', function() {
            $('#myDiv').css('backgroundColor', 'blue');
        });
    </script>
</body>
</html>
```
Here's the [jsbin](http://jsbin.com/sajemey/edit?html,js,output) for you guys to play with.

When we're inside an event handler, we can use `this` to refer to the element that the handler is attached to.  Our example above simply becomes:
```
$('#myDiv').on('click', function() {
    $(this).css('backgroundColor', 'blue');
});
```

Here is a simple [counter example](http://jsbin.com/yabupuf/edit?html,js,output).

### jQuery Selectors
jQuery selectors allow us to select one (or more) elements 3 different ways:
- By id: `'#id'`
- By class: `'className'`
- By tag name: `'p'`

Here's an example of [by class](http://jsbin.com/pebusas/edit?html,js,output) and an example of [by tag name](http://jsbin.com/yeviboz/edit?html,js,output).

Read more on selectors [here](https://www.tutorialspoint.com/jquery/jquery-selectors.htm).


### Forms and Input fields

jQuery makes working with `<input>` fields easy with the `.val()` method.

Calling it without an argument will return the current value of the input.  Passing an argument will overwrite it.

[Example jsbin](http://jsbin.com/miqerot/edit?html,js,output) and the [`.val()` documentation](http://api.jquery.com/val/).


### Other jQuery Goodies

#### Class helpers: `addClass()`, `removeClass()`, and `hasClass()`
jQuery makes it very easy to add and remove classes:
```
$('li').addClass('done');             // Add the important class to all li elements
$('.done').removeClass('done');       // Find all elements with .important and remove it
```

We can check if an element has a class using `hasClass()`:
```
$('mySelector').hasClass('done')
```

Here is a [simple shopping list example](http://jsbin.com/bunayad/edit?html,css,js,output) that uses all three methods.

jQuery also has `toggleClass()` that does `addClass()`, `removeClass()`, and `hasClass()` for us: [Example jsbin](http://jsbin.com/kiqacix/edit?html,css,js,output)

#### `.show()` and `.hide()`
We can show and hide elements using the `.show()` and `.hide()` methods: [Example jsbin](http://jsbin.com/jerogod/edit?html,css,js,output).
