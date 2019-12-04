# Connect 4

<h1 align = center>
<img src= https://github.com/LeenaYaseen/connect4/blob/master/pic/logo-aa.png>
</h1>
<h2 align = center>
  <br>
  <img src= https://github.com/LeenaYaseen/connect4/blob/master/pic/c4.png>

</h2>

Connect 4 is a two-player connection game in which the first player will put a piece into the board that will fall to the lowest level. Then the second player will put their own piece as the same method. The winner of the game is determined if a player successfully connected 4 circles either horizontally, vertically, or diagonally.
For this Project, a 4x4 gameboard was built and functioned using CSS,HTML, and JavaScript.

# List of technologies used
## Hardware:
-	Laptop with windows OS installed.
## Software:
-	Gitbash
-	Visual studio code
-	Google Chrome
-	HTML,CSS and JavScript.

# Wireframes
Initital webpage design:
<h2>
<img src=https://github.com/LeenaYaseen/connect4/blob/master/pic/wireframe.png>
</h2>



The game will be functional on one webpage. To know more about the game and how to play it, user can click on instructions to be redirected to another page.

# User Stories

-	User is able to start a new game.
-	User is able to insert the marker on the last cell of the board.
-	User is shown a message if they won/lose, or if it’s a tie.
-	User is indicated by color on which player has which color.
-	User cannot add on the same cell. Instead, he is able to add above it or next to it.
-	User is able to restart the game after finishing it.

# Development process and logic

The project took 4 days to develop starting from Saturday 30 November – Tuesday 3 December.
<br>
Chronological process:

## Day:1
-	Created the webpage using HTML and CSS.
-	Created 3 separated files of HTML, CSS, and JavaScript.
-	First attempt to create the board using “grid” functionality on CSS.
-	Researched about the game functionality and idea and how to construct it on PCs.

## Day:2
-	Started coding into JavaScript.
-	Divided already created board into <divs> and assigned their classes as 'column-1', 'column-2', 'column-3', 'column-4'.
-	Inside these <divs> it has <box> class , in which the markers will be filled with.
-	First Attempt into making the markers fall into the last column of the grid using JQuery functions '($(selector).last().addClass())'.
-	Created only one marker (‘yellow’) to test on it.

## Day:3
-	Unable to stack markers onto each other with the previous code.
-	Second attempt into making the markers fall into last column using 2D array.
-	Created a new JavaScript.
-	Created a new board for the game using <divs>, and inside of it has classes along with `Id` on them.
-	Divided board into rows.
-	Successfully created a function to get attributes of each <box>.
-	Focused on using `Ids` inside of the classes.
-	Reversed rows into column-reverse using CSS "display:flex"
-	Using JQuery, created an event in which if <column> is selected, the marker will be pushed to the last <box> in it.
-	Repeated process for all 4 columns.

## Day:4 (Summary of the process)
*Note: that this only applies on 4x4 gameboard.
-	Created variable 'player' to indicate if its player1 or player 2.
-	Created variables 'i','j','k','l' and initialized them with '0' to use for iteration of each column.
-	Created variable 'columnID' to store the ID of the <column> from its class.
-	Created a '$(selector).hover()' function to indicate which <column> the user is on.
-	Created a '$(selector).click()' function to able user to add the marker inside the box.
-	When the user clicks on the <column>, the columnID will be stored into the variable. Then it will go into a function of “if’s where it will check for which player (if its 0 then it is player 1 or if its 1 then it is player 2).
-	Once the user clicks, the marker will be added into the last element. (Ex. Column = 0 and i =0. Which indicates it’s the last element on the board as per the ‘Id’)
-	Repeated the process for all columns as well as same process for player 2. 
-	Created a function to reset the game when button is clicked using function 'location.load()' on JQuery.
-	Created 3 functions to check for possible winnings situations ( 'Horizontal()', 'Vertical()', and 'Diagonal()').
-	Modified styles and effects on the website.

# List unsolved problems and future plans

## Unsolved Problems:
-	Optimizing the code to make it as minimum as possible.

## Future additions:
-	Create a player vs AI computer.
-	Add a homepage for the game.
-	Add sound effects for buttons.
-	Count score and keep it.
-	Let the player choose the marker color.

# Solved function of the winner

```
horizontalCheckPlayer()
verticalCheckPlayer()
diagonalCheckPlayer()

```

Created 3 functions to check for the winner. The comparison happens by using ``if()`` statements in which it compares between each <box> inside the <board> if it has all red in one line or all yellow.

```
if($("#01").hasClass('yellow') && $("#02").hasClass('yellow') && $("#03").hasClass('yellow') && $("#04").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
```
Above is an example of how the `if()` statement works. Based on the <column>, the number of the `Id` will change.

# Favorite function work

```
$("[class*=column-]"). click(function()
           columnID = $(this).attr('id')
```

In general, JQuery functions where very useful for me. I was able to interact with the websites efficiently only by using these events. The `click()` and `attr()` function was the most important. I retrieved the values of the `Id` of the class <column> then saved it into a variable. Afterwards, this value has been used in winning functions, click and others.

<h2 align=center>
<img src = https://github.com/LeenaYaseen/connect4/blob/master/pic/connect4.gif>
</h2>
  
## By Leena

https://leenayaseen.github.io/connect4/







