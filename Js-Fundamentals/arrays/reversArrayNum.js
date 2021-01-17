function solve(num, par) {
    let arr = [];
    let result = '';
    for (let index = 0; index < num; index++) {
        let current = par[num - 1 - index];
        arr.push(current);

    }

    for (let index = 0; index < arr.length; index++) {
        result += arr[index] + ' ';

    }
    console.log(result);
}
solve(3, [10, 20, 30, 40, 50])