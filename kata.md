# Snakes and Ladders

## Feature 1 - Moving Your Token
The first feature we want implemented is the ability to move your token across the board using dice rolls. Players will need the ability to roll a dice, move their token the number of squares indicated by the dice roll and should win if they land on the final square.

### Token Can Move Across the Board
As a player
I want to be able to move my token
So that I can get closer to the goal

Given the game is started
When the token is placed on the board
Then the token is on square 1
Given the token is on square 1
When the token is moved 3 spaces
Then the token is on square 4
Given the token is on square 1
When the token is moved 3 spaces
And then it is moved 4 spaces
Then the token is on square 8

### Moves Are Determined By Dice Rolls
As a player
I want to move my token based on the roll of a die
So that there is an element of chance in the game

Given the game is started
When the player rolls a die
Then the result should be between 1-6 inclusive
Given the player rolls a 4
When they move their token
Then the token should move 4 spaces

### Player Can Win the Game
As a player
I want to be able to win the game
So that I can gloat to everyone around

Given the token is on square 97
When the token is moved 3 spaces
Then the token is on square 100
And the player has won the game
Given the token is on square 97
When the token is moved 4 spaces
Then the token is on square 97
And the player has not won the game

## Feature 2 - Snakes and Ladders
The second feature we would like is an additional element of chance in the form of implementing snakes and ladders on the game board and having them move the player's token up and down the board.

### Snakes Go Down
As a player
I want snakes to move my token down
So that the game is more fun

Given there is a snake connecting squares 2 and 12
When the token lands on square 12
Then the token is on square 2
Given there is a snake connecting squares 2 and 12
When the token lands on square 2
Then the token is on square 2

### Ladders Go Up
As a player
I want ladders to move my token up
So that the game is more fun

Given there is a ladder connecting squares 2 and 12
When the token lands on square 2
Then the token is on square 12
Given there is a ladder connecting squares 2 and 12
When the token lands on square 12
Then the token is on square 12

## Feature 3 - Multiple Players
Another feature for the game that we would like is the ability to play it using multiple players. The number of players will be selected on the front end. We are only looking at using human players now, but may use computer controller players later.

### Determining Play Order
As a player
I want to influence the play order
So that player 1 doesn't always go first

Given there are two players
When the game is started
Then the players must roll dice to determine their play order
Given the players are rolling to determine play order
When Player 1 rolls higher than Player 2
Then Player 1 rolls first
Given the players are rolling to determine play order
When Player 2 rolls higher than Player 1
Then Player 2 rolls first
Given the players are rolling to determine play order
When Player 1 rolls the same as Player 2
Then the players must roll again

### Following Play Order
As a player
I want to follow the play order
So that the game is more fair

Given it is Player 1's turn
When they have moved their token
Then it is Player 2's turn
Given it is Player 2's turn
When they have moved their token
Then it is Player 1's turn

## Feature 4 - Computer Controlled Character
The fourth feature that we would like to see is the ability to play against computer controlled characters instead of just using human players.

### Computer Play Order
As a player
I want to start a game against the computer
So that I can play even when I don't have friends

Given there is a computer controller character
When the game is started
Then the computer should roll for it's turn order
Given there is a computer controller character
When it is that character's turn
Then they should roll the dice and move their token

### Computer Playing
As a player
I want to play against the computer
So that I can play even when I don't have friends

Given the game is started
When it is the computer's turn
Then the computer should roll and move it's token