import { Token } from "./Token";

export class Game {
    private board: Map<Token, number>;

    constructor(tokens: Token[]){
        this.board = new Map<Token, number>()
        tokens.forEach(token => this.board.set(token, 1));
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
}
