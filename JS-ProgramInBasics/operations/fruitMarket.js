function fruitMarket(srawberrysPrice, bananasKG, orangesKG, bluebarriesKG, srawberrysKG) {
    let srawberryPrice = Number(srawberrysPrice);
    let bananaKG = Number(bananasKG);
    let orangeKG = Number(orangesKG);
    let bluebarrieKG = Number(bluebarriesKG);
    let srawberryKG =Number(srawberrysKG);
 
    bluebarriePrice=srawberryPrice/2;
    orangePrice=bluebarriePrice*0.60;
    bananaPrice=bluebarriePrice*0.20;
    sumBlueberry=bluebarriePrice*bluebarrieKG;
    sumOranges=orangePrice*orangeKG;
    sumBananas=bananaPrice*bananaKG;
    sumStrawberrys=srawberryPrice*srawberryKG;

    sum=sumBlueberry+sumOranges+sumBananas+sumStrawberrys;


    console.log(sum);
}

fruitMarket("48","10","3.3","6.5","1.7");



