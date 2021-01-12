function smallShop(goods, town, num) {
    let product = goods;
    let city = town;
    let quantity = Number(num);
    let totalSum = 0;


    switch (city) {
        case "Sofia":
            if (product == "coffee") {
                totalSum = quantity * 0.50;
                console.log(totalSum);
            } else if (product == "water") {
                totalSum = quantity * 0.80;
                console.log(totalSum);
            } else if (product == "beer") {
                totalSum = quantity * 1.20;
                console.log(totalSum);
            } else if (product == "sweets") {
                totalSum = quantity * 1.45;
                console.log(totalSum);
            } else if (product == "peanuts") {
                totalSum = quantity * 1.60;
                console.log(totalSum);
            }
            break;
        case "Plovdiv":
            if (product == "coffee") {
                totalSum = quantity * 0.40;
                console.log(totalSum);
            } else if (product == "water") {
                totalSum = quantity * 0.70;
                console.log(totalSum);
            } else if (product == "beer") {
                totalSum = quantity * 1.15;
                console.log(totalSum);
            } else if (product == "sweets") {
                totalSum = quantity * 1.30;
                console.log(totalSum);
            } else if (product == "peanuts") {
                totalSum = quantity * 1.50;
                console.log(totalSum);
            }
            break;
        case "Varna":
            if (product == "coffee") {
                totalSum = quantity * 0.45;
                console.log(totalSum);
            } else if (product == "water") {
                totalSum = quantity * 0.70;
                console.log(totalSum);
            } else if (product == "beer") {
                totalSum = quantity * 1.10;
                console.log(totalSum);
            } else if (product == "sweets") {
                totalSum = quantity * 1.35;
                console.log(totalSum);
            } else if (product == "peanuts") {
                totalSum = quantity * 1.55;
                console.log(totalSum);
            }
            break;
    }

}
smallShop("sweets", "Varna", "2");