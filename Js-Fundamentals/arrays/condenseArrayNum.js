function solve(array) {
    let condensed = [];
    if (array.length === 1) {
        console.log(`${array}`); // is already condensed to number
    } else {
        while (array.length > 1) {
            condensed = [];
            for (let index = 0; index < array.length - 1; index++) {
                let currentNum = Number(array[index]) + Number(array[index + 1]);
                condensed.push(currentNum);
            }
            array = condensed;
        }
        console.log(condensed.toString());
    }

}
solve([5, 0, 4, 1, 2])