export class Die {
    private maxRoll: number = 6;
    private minRoll: number = 1;
    private randomGenerator: RandomFloatGenerator;

    constructor(randomGenerator: RandomFloatGenerator = Math.random) {
        this.randomGenerator = randomGenerator;
    }

    public roll():number {
        // generate random float, then scale by max rolls size and use floor to convert to integer
        const randomInteger = Math.floor(this.randomGenerator() * this.maxRoll);
        // then add min roll so it isn't counting from 0
        return randomInteger + this.minRoll;
    }
}

export type RandomFloatGenerator = () => number;
