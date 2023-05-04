import { Die, Rollable } from "./Die";

export class Game {
    private tokenLocations: Map<Token, number>;
    private rolls: Map<Token, number>;
    private winner: Token | undefined;
    private die: Rollable;
    private transformations: Map<number, number>;

    // non-positive value to represent the user hasn't rolled
    private NO_ROLL = -1
    // represent the final square number
    private MAX_BOARD_SIZE = 100;

    constructor(tokens: Token[], die: Rollable = new Die(), tokenLocations: Map<Token, number> = new Map<Token, number>(), transformations: Map<number, number> = new Map<number, number>()) {
        this.tokenLocations = tokenLocations;
        // initialize only if empty (i.e. not supplied)
        if (this.tokenLocations.size === 0) {
            tokens.forEach(token => this.tokenLocations.set(token, 1));
        }
        this.rolls = new Map<Token, number>();
        // default all players to no roll
        tokens.forEach(token => this.rolls.set(token, this.NO_ROLL));
        this.transformations = transformations;
        this.die = die;
    }

    public getTokenLocationFor(token: Token): number {
        return this.getCurrentLocation(token);        
    }

    private getCurrentLocation(token: Token): number {
        const location = this.tokenLocations.get(token);
        if (location === undefined) {
            throw new Error("Token does not exist in this game")
        }
        return location;
    }

    public move(token: Token) {
        const newLocation = this.getNewLocation(token);
        this.tokenLocations.set(token, newLocation);
        // reset the rolls to show roll has been used up
        this.rolls.set(token, this.NO_ROLL);
        if (newLocation === this.MAX_BOARD_SIZE) {
            this.winner = token;
        }
    }

    private getNewLocation(token: Token): number {
        const originalLocation = this.getCurrentLocation(token)
        const spacesToMove = this.rolls.get(token);
        if (spacesToMove === undefined || spacesToMove === this.NO_ROLL) {
            throw new Error(`No roll found for token: ${token.id}`)
        }
        // assume they haven't overshot the board
        let newLocation = originalLocation + spacesToMove; 
        if (newLocation > this.MAX_BOARD_SIZE) {
            // turns out they have so don't actually move them
            newLocation = originalLocation;
        }
        // now apply any transformations (i.e. snakes or ladders they might be on)
        newLocation = newLocation + this.getTransformationFor(newLocation)
        return newLocation;
    }

    private getTransformationFor(location: number): number {
        const transformation = this.transformations.get(location);
        if (transformation === undefined) {
            return 0;
        }
        return transformation;
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
