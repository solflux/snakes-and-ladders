import { Token } from "./Token";
import { Game } from "./Game";


describe("Moving your token", () => {
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
})
