import { Die } from "./Die";

test("Given that the random generator provides 0.166, when the die is rolled, the die rolls 1", () => {
    // arrange
    const die = new Die(() => 0.166);
    // act
    const roll = die.roll();
    // assert
    expect(roll).toBe(1);
})

test("Given that the random generator provides 0.833, when the die is rolled, the die rolls 5", () => {
    const die = new Die(() => 0.833);
    // act
    const roll = die.roll();
    // assert
    expect(roll).toBe(5);
})

test("Given that the random generator provides 0.999, when the die is rolled, the die rolls 6", () => {
    const die = new Die(() => 0.999);
    // act
    const roll = die.roll();
    // assert
    expect(roll).toBe(6);
})

test("Given that the random generator provides 0, when the die is rolled, the die rolls 1", () => {
    const die = new Die(() => 0);
    // act
    const roll = die.roll();
    // assert
    expect(roll).toBe(1);
})