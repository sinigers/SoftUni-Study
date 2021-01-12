function newHouse(flowers, numbers, sums) {
    let flower = (flowers);
    let number = Number(numbers);
    let sum = Number(sums);

    let totalSum = 0;


    switch (flower) {
        case "Roses":
            if (number < 80) {
                totalSum = (number * 5);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            } else if (number >= 80) {
                totalSum = ((number * 5) * 0.90);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            }
            break;
        case "Dahlias":
            if (number < 90) {
                totalSum = (number * 3.80);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            } else if (number >= 90) {
                totalSum = ((number * 3.80) * 0.85);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            }
            break;
        case "Tulips":
            if (number < 80) {
                totalSum = (number * 2.80);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            } else if (number >= 80) {
                totalSum = ((number * 2.80) * 0.85);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            }
            break;
        case "Narcissus":
            if (number < 120) {
                totalSum = ((number * 3) * 1.15);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            } else if (number >= 120) {
                totalSum = (number * 3);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            }
            break;
        case "Gladiolus":
            if (number < 80) {
                totalSum = ((number * 2.5) * 1.2);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            } else if (number >= 80) {
                totalSum = (number * 2.5);
                if (totalSum > sum) {
                    console.log(`Not enough money, you need ${(totalSum - sum).toFixed(2)} leva more.`);
                } else if (totalSum <= sum) {
                    console.log(`Hey, you have a great garden with ${number} ${flower} and ${(sum - totalSum).toFixed(2)} leva left.`);

                }
            }
            break;
        default:
            break;
    }


}

newHouse("Roses", "2", "3")