import { Die, Rollable } from "./Die";

export class Game {
    private board: Map<Token, number>;
    private rolls: Map<Token, number>;
    private die;

    // non-positive value to represent the user hasn't rolled
    private NO_ROLL = -1

    constructor(tokens: Token[], die: Rollable = new Die()){
        this.board = new Map<Token, number>()
        tokens.forEach(token => this.board.set(token, 1));
        this.rolls = new Map<Token, number>();
        // initialise 
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

}

export class Token {
    readonly id: string;

    constructor(id: string){
        this.id = id;
    }
}
