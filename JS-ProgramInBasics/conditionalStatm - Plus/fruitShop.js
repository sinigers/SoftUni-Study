function fruitShop(products, days, nums) {
    let number = Number(nums);
    let day = days;
    let product = products;
    totalSum = number * product;

    if ((day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") &&
        (product === "banana" || product === "apple" || product === "orange" || product === "grapefruit" || product === "kiwi" || product === "pineapple" || product === "grapes")) {
        if (product === "banana") {
            console.log((totalSum = number * 2.5).toFixed(2));
        } else if (product === "apple") {
            console.log((totalSum = number * 1.2).toFixed(2));
        } else if (product === "orange") {
            console.log((totalSum = number * 0.85).toFixed(2));
        } else if (product === "grapefruit") {
            console.log((totalSum = number * 1.45).toFixed(2));
        } else if (product === "kiwi") {
            console.log((totalSum = number * 2.70).toFixed(2));
        } else if (product === "pineapple") {
            console.log((totalSum = number * 5.50).toFixed(2));
        } else if (product === "grapes") {
            console.log((totalSum = number * 3.85).toFixed(2));
        }


    } else if ((day === "Sunday" || day === "Saturday") &&
        (product === "banana" || product === "apple" || product === "orange" || product === "grapefruit" || product === "kiwi" || product === "pineapple" || product === "grapes")) {
        if (product === "banana") {
            console.log((totalSum = number * 2.7).toFixed(2));
        } else if (product === "apple") {
            console.log((totalSum = number * 1.25).toFixed(2));
        } else if (product === "orange") {
            console.log((totalSum = number * 0.9).toFixed(2));
        } else if (product === "grapefruit") {
            console.log((totalSum = number * 1.60).toFixed(2));
        } else if (product === "kiwi") {
            console.log((totalSum = number * 3.00).toFixed(2));
        } else if (product === "pineapple") {
            console.log((totalSum = number * 5.60).toFixed(2));
        } else if (product === "grapes") {
            console.log((totalSum = number * 4.20).toFixed(2));
        }

    } else {
        console.log("error");
    }


}


fruitShop("banana", "Monday", "0.5");