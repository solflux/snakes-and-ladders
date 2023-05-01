import { Die } from "./Die";

export class Game {
    private board: Map<Token, number>;
    
    private die;

    constructor(tokens: Token[], die: Die = new Die()){
        this.board = new Map<Token, number>()
        tokens.forEach(token => this.board.set(token, 1));
        this.die = die;
    }

    public getTokenLocation(token: Token): number {
        return this.getCurrentLocation(token);        
    }

    private getCurrentLocation(token: Token): number {
        const location = this.board.get(token);
        if (location === undefined) {
            throw new Error("Token does not exist in this game")
        }
        return location;
    }

    public move(token: Token, spacesToMove: number) {
        const currentLocation = this.getCurrentLocation(token);
        this.board.set(token, currentLocation + spacesToMove);
    }

    public roll(): number {
        return this.die.roll();
    }

}

export class Token {
    readonly id: string;

    constructor(id: string){
        this.id = id;
    }
}
