function solve(yearsOld, washersPrice, toyPrice) {


    let washerPrice = Number(washersPrice);
    let tPrice = Number(toyPrice);

    let currentYear = 0;
    let toyNumber = 0;
    let sumSaved = 0;
    let money = 10;


    for (let index = 1; index <= yearsOld; index++) {
        currentYear = Number(index);

        if (currentYear % 2 === 0 && currentYear >= 2) {
            sumSaved += (money - 1);
            money += 10;
        }

        if (currentYear % 2 !== 0) {
            toyNumber += 1
        }
    }

    let totalSum = sumSaved + toyNumber * tPrice;


    if (totalSum >= washerPrice) {

        console.log(`Yes! ${(totalSum-washerPrice).toFixed (2)}`)
    } else {
        console.log(`No! ${(washerPrice-totalSum).toFixed (2)}`)
    }

}
solve("21", "1570.98", "3");