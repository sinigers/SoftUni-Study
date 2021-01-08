function toyShop(tripsPrice, puzzelsNum, dolsesNum, bearsNum, minionsNum, trucksNum) {
    tripPrice = Number(tripsPrice);
    puzzelNum = Number(puzzelsNum);
    dolsNum = Number(dolsesNum);
    bearNum = Number(bearsNum);
    minionNum = Number(minionsNum);
    truckNum = Number(trucksNum);

    puzzlePrice = puzzelNum * 2.6;
    dolsPrice = dolsNum * 3;
    bearPrice = bearNum * 4.1;
    minionPrice = minionNum * 8.2;
    truckPrice = truckNum * 2;

    toysNum = puzzelNum + dolsNum + bearNum + minionNum + truckNum;
    price = puzzlePrice + dolsPrice + bearPrice + minionPrice + truckPrice;
    if (toysNum >= 50) {
        price = price * 0.75;

    }
    profit = price - price * 0.1;
    if (profit >= tripPrice) {
        console.log(`Yes! ${(profit-tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice-profit).toFixed(2)} lv needed.`);
    }

}

// ${(profit-tripPrice).toFixed(2)}

toyShop("40.8", "20", "25", "30", "50", "10")