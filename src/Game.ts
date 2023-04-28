import { Token } from "./Token";

export class Game {
    private board: Map<Token, number>;

    constructor(tokens: Token[]){
        this.board = new Map<Token, number>()
        tokens.forEach(token => this.board.set(token, 1));
    }

    public getTokenLocation(token: Token): number {
        const location = this.board.get(token);
        
        if (location === undefined) {
            throw new Error("Token does not exist in this game")
        }

        return location;        
    }
}
