function solve(distance, passengers, price) {
    let neededMoney = 0;
    let fuel = 0;
    fuel = (distance / 100) * 7;
    fuel += passengers * 0.100;
    neededMoney = fuel * price

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
solve(260, 9, 2.49)