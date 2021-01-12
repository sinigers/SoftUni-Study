function tradeCommision(citys, nums) {
    let number = Number(nums);
    let city = citys;

    let totalSum = 0;





    switch (city) {

        case "Sofia":
            if (number < 0) {
                console.log("error");
            } else if (number >= 0 && number <= 500) {
                console.log((totalSum = number * 0.05).toFixed(2));
                break;
            } else if (number > 500 && number <= 1000) {
                console.log((totalSum = number * 0.07).toFixed(2));
                break;
            } else if (number > 1000 && number <= 10000) {
                console.log((totalSum = number * 0.08).toFixed(2));
                break;
            } else if (number > 10000) {
                console.log((totalSum = number * 0.12).toFixed(2));
                break;
            }

        case "Varna":
            if (number >= 0 && number <= 500) {
                console.log((totalSum = number * 0.045).toFixed(2));
                break;
            } else if (number > 500 && number <= 1000) {
                console.log((totalSum = number * 0.075).toFixed(2));
                break;
            } else if (number > 1000 && number <= 10000) {
                console.log((totalSum = number * 0.1).toFixed(2));
                break;
            } else if (number > 10000) {
                console.log((totalSum = number * 0.13).toFixed(2));
                break;
            }
        case "Plovdiv":
            if (number >= 0 && number <= 500) {
                console.log((totalSum = number * 0.055).toFixed(2));
                break;
            } else if (number > 500 && number <= 1000) {
                console.log((totalSum = number * 0.08).toFixed(2));
                break;
            } else if (number > 1000 && number <= 10000) {
                console.log((totalSum = number * 0.12).toFixed(2));
                break;
            } else if (number > 10000) {
                console.log((totalSum = number * 0.145).toFixed(2));
                break;
            }
        default:
            console.log("error");
            break;
    }
}



tradeCommision("Varna", "3874.50");