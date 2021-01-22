function solve(array, num) {
    let arrayN = [];
    for (let index = 0; index < num; index++) {
        arrayN = array;
        cElement = array[index];
        arrayN = array.shift()
    }
    console.log(arrayN);
}
solve([51, 47, 32, 61, 21],
    2
)