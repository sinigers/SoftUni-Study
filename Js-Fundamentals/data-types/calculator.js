function solve(numOne, operator, numTwo) {

    if (operator === "+") {
        console.log((Number(numOne) + Number(numTwo)).toFixed(2));
    } else if (operator === "-") {
        console.log((Number(numOne) - Number(numTwo)).toFixed(2));
    } else if (operator === "*") {
        console.log((Number(numOne) * Number(numTwo)).toFixed(2));
    } else if (operator === "/") {
        console.log((Number(numOne) / Number(numTwo)).toFixed(2));
    }
}

solve("5",
    "+",
    "10"
)