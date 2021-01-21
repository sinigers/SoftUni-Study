function solve(params) {
    let sumForVacartion = Number(params.shift(0));
    let savedMoney = Number(params.shift(0));
    let index = 0;
    let action = params[0];
    let sum = Number(params[1]);
    let countSpend = 0;

    while (sumForVacartion > savedMoney) {
        sum = Number(params[index + 1]);
        action = params[index];
        if (action === "spend") {
            savedMoney -= sum;
            if (savedMoney <= 0) {
                savedMoney = 0;
            }
            countSpend += 1;
        }
        if (action === "save") {
            savedMoney += sum;
        }
        index += 2;
        if (countSpend >= 5) {
            console.log();
        }
        if (savedMoney >= sumForVacartion) {
            console.log(`You saved the money for ${index/2} days.`);
        }
        if (countSpend >= 5) {
            console.log("You can't save the money.");
            console.log(`${index/2}`);
            break;
        }

    }
}
solve(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])