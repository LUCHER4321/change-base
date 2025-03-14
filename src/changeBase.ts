export const changeBase = (
    digits: number[],
    base: number,
    newBase: number
) => {
    if(base === newBase) return digits;
    let num = digits.reduce((acc, digit) => acc * base + digit, 0);
    let newDigits: number[] = [];
    while (num > 0) {
        const rest = num % newBase;
        newDigits.unshift(rest);
        num = Math.floor(num / newBase);
    }
    return newDigits.length === 0 ? [0] : newDigits;
};