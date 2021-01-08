function schoolShip(inCome, rating, minSum) {
    let inComes = Number(inCome);
    let ratings = Number(rating);
    let minSums = Number(minSum);

    if(inComes > minSums && ratings < 5.50){
        console.log("You cannot get a scholarship!");
    }else if (inComes < minSums && ratings >=4.50) {
        console.log(`You get a Social scholarship ${Math.floor(minSums*0.35)} BGN`);
    }else if (ratings >=5.50) {
        console.log(`You get a scholarship for excellent results ${Math.floor(rating*25)} BGN`);
      
    }
    
}



schoolShip("700.00","5.65", "420.00")