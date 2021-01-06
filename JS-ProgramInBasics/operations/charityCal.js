function charityCalc(days, yamis, cakes, gofreti, pancakes) {
    let day = Number(days);
    let yami = Number(yamis);
    let cake = Number(cakes);
    let gofret = Number(gofreti);
    let pancake =Number(pancakes);
 
    sumCakes=cake*45
    sumGofrety=gofret*5.80
    sumPancakes=pancake*3.20
    sumPerDay= (sumCakes+sumGofrety+sumPancakes)*yami
    sumAllDays=sumPerDay*day
    sumNeto=sumAllDays-sumAllDays/8
    console.log(sumNeto);
}

charityCalc("23","8","14","30","16");



