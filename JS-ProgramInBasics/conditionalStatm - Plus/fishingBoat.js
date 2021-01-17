function fishingBoat(budgets, seasons, nums) {
    let budget = Number(budgets);
    let season = (seasons);
    let manNum = Number(nums);

    let totalSum = 0;
    let shipPrice = 0;

    if (season === "Spring") {
        if (manNum <= 6 && manNum % 2 == 0) {
            shipPrice = 3000 * 0.85;
        } else if (manNum <= 6 && manNum % 2 !== 0) {
            shipPrice = 3000 * 0.90;
        }

        if (manNum >= 7 && manNum <= 11 && manNum % 2 == 0) {
            shipPrice = 3000 * 0.80;
        } else if (manNum >= 7 && manNum <= 11 && manNum % 2 !== 0) {
            shipPrice = 3000 * 0.85;
        }

        if (manNum >= 12 && manNum % 2 == 0) {
            shipPrice = 3000 * 0.70;
        } else if (manNum >= 12 && manNum <= 18 && manNum % 2 !== 0) {
            shipPrice = 3000 * 0.75;
        }
    }
    if (season === "Summer") {
        if (manNum <= 6 && manNum % 2 == 0) {
            shipPrice = 4200 * 0.85;
        } else if (manNum <= 6 && manNum % 2 !== 0) {
            shipPrice = 4200 * 0.90;
        }

        if (manNum >= 7 && manNum <= 11 && manNum % 2 == 0) {
            shipPrice = 4200 * 0.80;
        } else if (manNum >= 7 && manNum <= 11 && manNum % 2 !== 0) {
            shipPrice = 4200 * 0.85;
        }

        if (manNum >= 12 && manNum <= 18 && manNum % 2 == 0) {
            shipPrice = 4200 * 0.70;
        } else if (manNum >= 12 && manNum <= 18 && manNum % 2 !== 0) {
            shipPrice = 4200 * 0.75;
        }
    }
    if (season === "Autumn") {
        if (manNum <= 6) {
            shipPrice = 4200 * 0.90;
        }
        if (manNum >= 7 && manNum <= 11) {
            shipPrice = 4200 * 0.85;
        }
        if (manNum >= 12 && manNum <= 18) {
            shipPrice = 4200 * 0.75;
        }
    }

    if (season === "Winter") {
        if (manNum <= 6 && manNum % 2 == 0) {
            shipPrice = 2600 * 0.85;
        } else if (manNum <= 6 && manNum % 2 !== 0) {
            shipPrice = 2600 * 0.90;
        }

        if (manNum >= 7 && manNum <= 11 && manNum % 2 == 0) {
            shipPrice = 2600 * 0.80;
        } else if (manNum >= 7 && manNum <= 11 && manNum % 2 !== 0) {
            shipPrice = 2600 * 0.85;
        }

        if (manNum >= 12 && manNum <= 18 && manNum % 2 == 0) {
            shipPrice = 2600 * 0.70;
        } else if (manNum >= 12 && manNum <= 18 && manNum % 2 !== 0) {
            shipPrice = 2600 * 0.75;
        }
    }
    if (budget >= shipPrice) {
        console.log(`Yes! You have ${(budget-shipPrice).toFixed(2)} leva left.`);
    } else if (budget < shipPrice) {
        console.log(`Not enough money! You need ${(shipPrice-budget).toFixed(2)} leva.`);
    }
}

fishingBoat("3000", "Summer", "20");