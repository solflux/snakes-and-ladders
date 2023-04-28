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
})
