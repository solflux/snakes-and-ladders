export class Die {
    private maxRoll: number = 6;
    private minRoll: number = 1;
    private randomGenerator: RandomFloatGenerator;

    constructor(randomGenerator: RandomFloatGenerator = Math.random) {
        this.randomGenerator = randomGenerator;
    }

    public roll():number {
        const randomFloat = this.randomGenerator();
        // guard against poorly configured generators, not sure this is stricly necessary
        if (randomFloat < 0 || randomFloat >= 1) {
            throw new Error("Random generator provided values outside of expected bounds")
        }
        // scale by max roll size and use floor to convert to integer
        const randomInteger = Math.floor(this.randomGenerator() * this.maxRoll);
        // then add min roll so it isn't counting from 0
        return randomInteger + this.minRoll;
    }
}

export type RandomFloatGenerator = () => number;
