function solve(params) {
    let byers = Number(params.shift());
    let b = byers;
    let index = 0;
    let product = params[index];
    // let currentPr = "";
    let itemCount = 0;
    let bill = 0;
    let allBills = 0;
    while (byers > 0) {
        itemCount = 0;
        for (let index = 0; byers > 0; index++) {
            product = params[index];
            if (product === "basket") {
                bill += 1.50;
                itemCount += 1;
            }
            if (product === "wreath") {
                bill += 3.80;
                itemCount += 1;
            }
            if (product === "chocolate bunny") {
                bill += 7.00;
                itemCount += 1;
            }
            if (product === "Finish") {
                if (itemCount % 2 === 0) {
                    bill = bill * 0.80;
                }
                console.log(`You purchased ${itemCount} items for ${bill.toFixed(2)} leva.`);
                allBills += bill;
                bill = 0;
                itemCount = 0;
                product = params[index + 1];
                byers -= 1;
            }
        }
    }
    console.log(`Average bill per client is: ${(allBills/b).toFixed(2)} leva.`);
}
solve(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"])