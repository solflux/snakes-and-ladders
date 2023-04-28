
describe("Moving your token", () => {
    it("Given the game is started, when the token is placed on the board, then the token is on square one", () => {
        // arrange
        const game = new Game(new Board(), [new Token("1")]); 
        // act
        const tokenLocation = game.getTokenLocation("1");
        // assert
        expect(tokenLocation).toBe(1);
    })
})
