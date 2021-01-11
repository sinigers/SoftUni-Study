function solve(num) {
    let stage = '';
    let digitOne = 0;
    let digitTwo = 0;
    let sum = 0;
    for (let index = 1; index <= num; index++) {

        digitTwo = index % 10;
        digitOne = parseInt(index / 10);
        sum = digitTwo + digitOne;
        if (sum === 5 || sum === 7 || sum === 11) {
            stage = 'True';
        } else {
            stage = 'False';
        }
        console.log(`${index} -> ${stage}`);
    }
}
solve(15)