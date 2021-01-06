function depositCalc(rent) {
    let rnt = Number (rent)
    cake = rnt*0.20;
    drinks = cake*0.55;
    animator=rnt/3;
    sum = rnt+cake+drinks+animator;
    console.log(sum);
}

depositCalc("2250");

