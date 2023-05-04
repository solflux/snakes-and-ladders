import { Rollable } from "./Die";
import { Token, Game } from "./Game";

const playerOne: Token = new Token("steve");

// fake to help inject specific rolls
class DeterministicDie implements Rollable {
    private rolls: number[];
    private currentIndex: number = 0;

    constructor(rolls: number[]){
        this.rolls = rolls;
    }

    public roll(): number {
        // very niave implementation, but fine as a fake for these tests
        const roll = this.rolls[this.currentIndex];
        this.currentIndex = this.currentIndex + 1;
        return roll;
    }
}

describe("Moving your token", () => {
    describe("Token can move across the board", () => {
        it("Given the game is started, when the token is placed on the board, then the token is on square one", () => {
            // arrange
            const game = new Game([playerOne]); 
            // act
            const tokenLocation = game.getTokenLocationFor(playerOne);
            // assert
            expect(tokenLocation).toBe(1);
        })
    
        it("Given the token is on square 1, when the token is moved 3 spaces, then the token is on square 4", () => {
            // arrange
            const game = new Game([playerOne], new DeterministicDie([3]));
            // act
            game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(game.getTokenLocationFor(playerOne)).toBe(4);
        })
    
        it("Given the game is started, when a token not on the board is moved, then an error is thrown", () => {
            // arrange
            const game = new Game([]);
            // act
            // assert
            expect(() => game.move(playerOne)).toThrow(Error);
        })
    
        it("Given the token is on square 1, when the token is moved 3 spaces, and then the token is moved 4 spaces, then the token is on square 8", () => {
            // arrange
            const game = new Game([playerOne], new DeterministicDie([3,4]));
            // act
            game.roll(playerOne);
            game.move(playerOne);
            game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(game.getTokenLocationFor(playerOne)).toBe(8);
        })

        it("Give the game is started, when a player moves without rolling first, then an error is thrown", () => {
            // arrange
            const game = new Game([playerOne]);
            // act
            // assert
            expect(() => game.move(playerOne)).toThrow(Error);
        })
        it("Give the the play has moved once, when a player moves again without rolling first, then an error is thrown", () => {
            // arrange
            const game = new Game([playerOne]);
            // act
            game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(() => game.move(playerOne)).toThrow(Error);
        })
    })

    describe("Moves are determined by dice rolls", () => {
        // note: removed between 1-6 test specified in kata, as it's covered by die tests and isn't really a good test case

        it("Give the player rolls a 4, when they move their token, then the token should move 4 spaces", () => {
            // arrange
            const die = new DeterministicDie([4]);
            const game = new Game([playerOne], die);
            // act
            const roll = game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(game.getTokenLocationFor(playerOne)).toBe(5);
        })
    })

    describe("Player can win the game", () => {
        it("Given the token is on square 97, when the token is moved 3 spaces, then the token is on square 100", () => {
            // arrange
            const die = new DeterministicDie([3]);
            const board = new Map<Token, number>([
                [playerOne, 97]
            ]);
            const game = new Game([playerOne], die, board);
            // act
            game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(game.getTokenLocationFor(playerOne)).toBe(100);
        })

        it("Given the token is on square 97, when the token is moved 3 spaces, then the player has won the game", () => {
            // arrange
            const die = new DeterministicDie([3]);
            const board = new Map<Token, number>([
                [playerOne, 97]
            ]);
            const game = new Game([playerOne], die, board);
            // act
            game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(game.getWinner()).toBe(playerOne);
        })

        it("Given the token is on square 97, when the token is moved 4 spaces, then the token is on square 97", () => {
            // arrange
            const die = new DeterministicDie([4]);
            const board = new Map<Token, number>([
                [playerOne, 97]
            ]);
            const game = new Game([playerOne], die, board);
            // act
            game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(game.getTokenLocationFor(playerOne)).toBe(97);
        })

        it("Given the token is on square 97, when the token is moved 4 spaces, then the player has not won the game", () => {
            // arrange
            const die = new DeterministicDie([4]);
            const board = new Map<Token, number>([
                [playerOne, 97]
            ]);
            const game = new Game([playerOne], die, board);
            // act
            game.roll(playerOne);
            game.move(playerOne);
            // assert
            expect(game.getWinner()).toBe(undefined);
        })
    })
})

describe("Snakes and ladders", () => {
    describe("Snakes go down", () => {
        it("Given there is a snake connecting square 2 and 12, when the token lands on square 12, then the token is on square 2", () => {
            // arrange
            const die = new DeterministicDie([2]);
            const board = new Map<Token, number>([
                [playerOne, 10]
            ]);
            const game = new Game([playerOne], die, board);
            // assert
            game.roll(playerOne);
            game.move(playerOne);
            // act
            expect(game.getTokenLocationFor(playerOne)).toBe(2);
        })
    })
})

