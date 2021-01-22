function solve(params) {
    let sum = 0;
    for (let index = 0; index < params.length; index++) {
        currenrElement = params[index];
        if (currenrElement % 2 === 0) {
            sum += Number(currenrElement);
        }
    }
    console.log(sum);
}
solve(['1', '2', '3', '4', '5', '6'])