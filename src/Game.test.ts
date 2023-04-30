import { Token, Game } from "./Game";


describe("Moving your token", () => {
    describe("Token can move across the board", () => {
        it("Given the game is started, when the token is placed on the board, then the token is on square one", () => {
            // arrange
            const token = new Token("steve");
            const game = new Game([token]); 
            // act
            const tokenLocation = game.getTokenLocation(token);
            // assert
            expect(tokenLocation).toBe(1);
        })
    
        it("Given the token is on square 1, when the token is moved 3 spaces, then the token is on square 4", () => {
            // arrange
            const token = new Token("steve");
            const game = new Game([token]);
            // act
            game.move(token, 3);
            // assert
            expect(game.getTokenLocation(token)).toBe(4);
        })
    
        it("Given the game is started, when a token not on the board is moved, then an error is thrown", () => {
            // arrange
            const token = new Token("steve");
            const game = new Game([]);
            // act
            // assert
            expect(() => game.move(token, 2)).toThrow(Error);
        })
    
        it("Given the token is on square 1, when the token is moved 3 spaces, and then the token is moved 4 spaces, then the token is on square 8", () => {
            // arrange
            const token = new Token("steve");
            const game = new Game([token]);
            // act
            game.move(token, 3);
            game.move(token, 4);
            // assert
            expect(game.getTokenLocation(token)).toBe(8);
        })
    })

    describe("Moves are determined by dice rolls", () => {
        it("Given the game is started, when the player rolls a die, then the results should be between 1-6 inclusive", () => {
            // arrange
            const token = new Token("steve");
            const game = new Game([token]);
            // act
            const roll = game.roll();
            // assert
            expect(roll).toBe(8);
        })
    })    
})
