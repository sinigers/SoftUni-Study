function solve(params) {
    let sumE = 0;
    let sumO = 0;
    let subtr = 0;
    for (let index = 0; index < params.length; index++) {
        currenrElement = params[index];
        if (currenrElement % 2 === 0) {
            sumE += Number(currenrElement);
        } else {
            sumO += Number(currenrElement);
        }
    }
    subtr = sumE - sumO
    console.log(subtr);
}
solve(['1', '2', '3', '4', '5', '6'])