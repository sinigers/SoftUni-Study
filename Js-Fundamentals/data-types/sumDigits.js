function solve(number) {
    let num = number.toString()
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);
    }
    console.log(sum);
}
solve(245678)