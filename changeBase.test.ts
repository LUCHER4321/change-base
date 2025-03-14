import { changeBase } from "./src";

test("Binario a decimal", () => {
    expect(changeBase([1, 0, 1, 1, 1], 2, 10)).toEqual([2, 3]);
    expect(changeBase([1, 1, 0, 0, 0], 2, 10)).toEqual([2, 4]);
    expect(changeBase([1, 1, 0, 0, 1], 2, 10)).toEqual([2, 5]);
});

test("Decimal a binario", () => {
    expect(changeBase([2, 3], 10, 2)).toEqual([1, 0, 1, 1, 1]);
    expect(changeBase([2, 4], 10, 2)).toEqual([1, 1, 0, 0, 0]);
    expect(changeBase([2, 5], 10, 2)).toEqual([1, 1, 0, 0, 1]);
});