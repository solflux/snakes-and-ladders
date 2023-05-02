import { Die, Rollable } from "./Die";

export class Game {
    private board: Map<Token, number>;
    private rolls: Map<Token, number>;
    private winner: Token | undefined;
    private die: Rollable;

    // non-positive value to represent the user hasn't rolled
    private NO_ROLL = -1

    constructor(tokens: Token[], die: Rollable = new Die(), board: Map<Token, number> = new Map<Token, number>()) {
        this.board = board;
        // initialize only if empty (i.e. not supplied)
        if (this.board.size === 0) {
            tokens.forEach(token => this.board.set(token, 1));
        }
        this.rolls = new Map<Token, number>();
        // default all players to no roll
        tokens.forEach(token => this.rolls.set(token, this.NO_ROLL));
        this.die = die;
    }

    public getTokenLocationFor(token: Token): number {
        return this.getCurrentLocation(token);        
    }

    private getCurrentLocation(token: Token): number {
        const location = this.board.get(token);
        if (location === undefined) {
            throw new Error("Token does not exist in this game")
        }
        return location;
    }

    public move(token: Token) {
        const spacesToMove = this.rolls.get(token);
        if (spacesToMove === undefined || spacesToMove === this.NO_ROLL) {
            throw new Error(`No roll found for token: ${token.id}`)
        }
        const currentLocation = this.getCurrentLocation(token);
        this.board.set(token, currentLocation + spacesToMove);
        this.rolls.set(token, this.NO_ROLL);
    }

    public roll(token: Token): number {
        const roll = this.die.roll();
        this.rolls.set(token, roll);
        return roll;
    }

    public getWinner(): Token | undefined {
        return this.winner;
    }
}

export class Token {
    readonly id: string;

    constructor(id: string){
        this.id = id;
    }
}
