function newHouse(flowers, numbers, sums) {


    let number = Number(numbers);
    let budget = Number(sums);

    let totalSum = 0;

    if (flowers == "Roses") {
        if (number > 80) {
            totalSum = (number * 5) * 0.90;
        } else {
            totalSum = (number * 5);
        }
    } else if (flowers == "Dahlias") {
        if (number > 90) {
            totalSum = (number * 3.80) * 0.85;
        } else {
            totalSum = (number * 3.80);
        }
    } else if (flowers == "Tulips") {
        if (number > 80) {
            totalSum = (number * 2.80) * 0.85;
        } else {
            totalSum = (number * 2.80);
        }
    } else if (flowers == "Narcissus") {
        if (number < 120) {
            totalSum = (number * 3) * 1.15;
        } else {
            totalSum = (number * 3);
        }
    } else if (flowers == "Gladiolus") {
        if (number < 80) {
            totalSum = (number * 2.5) * 1.2;
        } else {
            totalSum = (number * 2.5);
        }
    }
    if (totalSum > budget) {
        console.log(`Not enough money, you need ${Math.abs(budget - totalSum).toFixed(2)} leva more.`);
    } else if (totalSum <= budget) {
        console.log(`Hey, you have a great garden with ${number} ${flowers} and ${(budget - totalSum).toFixed(2)} leva left.`);
    }
}

newHouse("Roses", "55", "250")