function newHome(flowerType, numOfFlowers, budgetAsString) {

    let number = Number(numOfFlowers);
    let budget = Number(budgetAsString);
    let total = 0;

    if (flowerType == "Roses") {
        if (number > 80) {
            total = (number * 5) * 0.9;
        } else {
            total = number * 5;
        }
    } else if (flowerType == "Dahlias") {
        if (number > 90) {
            total = (number * 3.8) * 0.85;
        } else {
            total = number * 3.8;
        }
    } else if (flowerType == "Tulips") {
        if (number > 80) {
            total = (number * 2.8) * 0.85;
        } else {
            total = number * 2.8;
        }
    } else if (flowerType == "Narcissus") {
        if (number < 120) {
            total = number * 3 + (number * 3) * 0.15;
        } else {
            total = number * 3;
        }
    } else if (flowerType == "Gladiolus") {
        if (number < 80) {
            total = number * 2.5 + (number * 2.5) * 0.2;
        } else {
            total = number * 2.5;
        }
    }

    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${number} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`);
    } else if (budget < total) {
        console.log(`Not enough money, you need ${Math.abs(budget - total).toFixed(2)} leva more.`);
    }

}

newHome("Roses", "55", "250")