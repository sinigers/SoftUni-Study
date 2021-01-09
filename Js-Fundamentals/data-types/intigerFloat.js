function solve(numOne, numTwo, numTree) {
    let sum = Number(numOne + numTwo + numTree)
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

}
solve(9, 100, 1.1)