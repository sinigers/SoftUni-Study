function solve(input) {
    let income = input.shift();

    let total = 0;

    while (income !== "NoMoreMoney") {
        if (Number(income) > 0) {
            total += Number(income);

            console.log(`Increase: ${Number(income).toFixed(2)}`);
        }

        if (Number(income) <= 0) {
            console.log("Invalid operation!");
            console.log(`Total: ${total.toFixed(2)}`);
            break;
        }
        income = input.shift();
    }
    if (income === "NoMoreMoney") {
        console.log(`Total: ${total.toFixed(2)}`)
    }
}

solve(["120", "45.55", "-150"])