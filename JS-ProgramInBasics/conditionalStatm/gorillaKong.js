function gorillaKong(budget, statists, clothes){
let budgetNum=Number (budget);
let statistNum=Number (statists);
let clothesPrice=Number (clothes);

let  decor=budgetNum*0.10;
let clothesTotal=clothesPrice*statistNum;
if (statistNum >= 150){
clothesTotal=clothesTotal*0.90;
}
price=clothesTotal+decor;

if(price > budgetNum){
    console.log("Not enough money!");
    console.log(`Wingard needs ${(price-budgetNum).toFixed(2)} leva more.`);
}else if(price <= budgetNum){

    console.log("Action!");
    console.log(`Wingard starts filming with ${(budgetNum-price).toFixed(2)} leva left.`)
}


}

gorillaKong("20000","120","55.5")