function solve(input) {
    let deposit = input[0];
    let blance = 0;
    let index = 1;

    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);
        if (amount < 0) {
            console.log("Invalid operation!");
            console.log(`Total: ${Number(blance).toFixed(2)}`);
            break;
        }
        blance += Number(deposit);
        console.log(`Increase: ${Number(deposit).toFixed(2)}`);
        deposit = input[index];
        index++;
    }
    if (deposit === "NoMoreMoney") {
        console.log(`Total: ${Number(blance).toFixed(2)}`);
    }
}



solve(["120", "45.55", "-150"])