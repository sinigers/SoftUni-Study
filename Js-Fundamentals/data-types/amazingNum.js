function solve(numb) {
    let num = numb.toString();
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);

    }
    let result = sum.toString().includes('9');

    console.log(result ?
        `${num} Amazing? True` :
        `${num} Amazing? False`);
}
solve(1233)