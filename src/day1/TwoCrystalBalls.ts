export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmt = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmt;

    for (i; i < breaks.length; i += jumpAmt) {
        if (breaks[i] === true) {
            break;
        }
    }

    i -= jumpAmt;

    for (let j = 0; j <= jumpAmt && i < breaks.length; ++j, ++i) {
        if (breaks[i] === true) {
            return i;
        }
    }

    return -1;
}
