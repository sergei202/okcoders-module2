# Week 2 - Homework

This week will we do daily micro-assignments.
Each day will should take about 5-15 minutes to complete.

Doing it daily will make sure you guys don't forget the material between weeks!

## Day 1 - Saturday the 17th

### Part 1
Create a web page with a button that displays an alert box.

##### Hints
- Don't forget to add the jQuery library!
- Remember how we created a click handler?

### Part 2
Add a `<div>` tag with some text.  Now make the button change the background color of the text (get rid of the alert from Part 1).

##### Hints
- Remember how we used the [`.css()`](http://api.jquery.com/css/) method in class?

### Part 3
Make the button now toggle the background color of the text.
##### Hints
- You'll need to create a CSS class to set the background backgroundColor
- You can use [`.toggleClass()`](http://api.jquery.com/toggleclass/) to handle all the heavy-lifting of checking/add/removing the class.

## Day 2 - Sunday the 18th

Create a new web page that counts the number of button clicks.
You'll need a single `<div>` and a single button.

#### Hints
- Don't forget to add the jQuery library!
- What do we need when counting something? A variable!
- Remember that we can use [`.text()`](https://www.w3schools.com/jquery/html_text.asp) to update the text inside of an element.

## Day 3 - Monday the 19th

Create a web page to count the number of votes for Item A and Item B.
#### Hints
- This is very similar to the click counter from yesterday.  But instead of one button and one `<div>`, you'll need two of each.
- If we're counting/tracking two separate items, how many variables do we need?

## Day 4 - Tuesday the 20th
Create a web page that will take a number and add it to a running total.  You'll need:
- One `<input>`, the user will enter their number here
- One button, the user will press the button to add the entered number to the total
- One `<div>` to display the running total

Example:
- The total should be zero when the page loads
- If the user enters 25 and presses the button, the total becomes 25
- If the user enters 10 and presses the button, the total increases to 35

#### Hints
- Don't forget that anytime we're summing/totaling something, we need a variable
- You'll need to use `.val()` to get the value from the input field
- Remember that `.val()` always returns a string, how do we cast it to a number?

## Day 5 - Wednesday the 21st
Today we'll make a very simple shopping list.  We'll build on to this example over the next few days.

### Part 1
You'll need an input field and an 'Add' button.  Once an item is added, it will appear inside an ordered list (`<ol>`).

### Part 2
After an item is added, clear out the input field.

#### Hints
- Remember that we can append elements to other elements with the [`.append()`](https://www.w3schools.com/jquery/html_append.asp) method
- We can create new HTML elements using the [jQuery function](http://api.jquery.com/jQuery/#jQuery2): `$('<div>My Div</div')`
- We did something very similar as a class example; don't use that code unless you really need to.  Challenge yourself to write it from scratch!
