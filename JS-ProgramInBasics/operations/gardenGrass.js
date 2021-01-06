function petShop(area) {
    for (let area = 0.00; area <= 10000.00; area++);
    
    let a = Number(7.61);
    let b = Number(0.18);
    
    let sum = area * a;
    let discount = sum*b
    let finSum = sum-discount
        console.log(`The final price is: ${finSum} lv.`);
        console.log(`The discount is: ${discount} lv.`);

}

petShop(550);

//