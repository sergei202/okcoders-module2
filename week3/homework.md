# Week 3 - Homework

We ended up reviewing Javascript and jQuery for this week.

## Day 1 - Monday
Please review the [homework from last week](../week2/homework.md).  Everyone had issues completing it.
Go through each day until you've mastered it and can do it from scratch.

Review the [classroom examples](classroom.md) we did as well.  Make sure you understand the code!


## Day 2 - Tuesday

Create a dynamic table using jQuery.

### Part 1
- Dynamically create a `<table>`, `<tr>`, and a `<td>`.  Add some text into the `<td>` with `.text()`
- Add a border for your table and cells

### Part 2
- Use a `for` loop to add 10 cells
- You should now have one row with 10 cells

### Part 3
- Use another `for` loop to add 10 rows
- You should now have 10 rows with 10 cells each

### Part 4
- Make the cells have 1 to 100 in them

### Hints
- Remember that we can use the jQuery constructor to create HTML elements
- Don't forget to `.append()` your elements to each another

## Day 3 - Wednesday

Create a simple tic-tac-toe game.

### Part 1

Create a table and add borders/spacing to make it look like a tic-tac-toe board.

You can do this in the markup, no need to use `.append()` (unless you _really_ want to).

### Part 2
Insert a `X` into the `<td>` that was clicked.

At this point you should have a tic-tac-toe board and an X into every cell that is clicked.

### Part 3
Alternate between X and O when a cell is clicked.

### Hints
- Don't over-think this, this assignment is much easier than yesterday's
- Remember that inside of a click handler, `$(this)` is the element that was clicked
