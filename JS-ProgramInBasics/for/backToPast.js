function solve(arguments) {
    let allMoney = Number(arguments.shift());
    let deathYear = Number(arguments.shift());
    let yearOld = 18;
    let spentMoney = 12000;;



    for (let index = 1800; index <= deathYear; index++) {
        if (index >= 1801) {
            yearOld++
            spentMoney = spentMoney + 12000;
        }
        if (index % 2 !== 0) {

            spentMoney = spentMoney + 50 * yearOld;

        }
    }



    if (spentMoney <= allMoney) {
        console.log(`Yes! He will live a carefree life and will have ${(allMoney-spentMoney).toFixed (2)} dollars left.`);
    } else {
        console.log(`He will need ${(spentMoney-allMoney).toFixed (2)} dollars to survive.`);
    }


}

solve([50000, 1802])