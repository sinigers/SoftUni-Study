function depositCalc(sum, period, gpr) {
    let sm = Number(sum);
    let b = Number(period);
    let c = Number(gpr);
    a = (sm*(gpr/100));
    b =  (a/12);
    c = period*b;
    sumFin = sm+c;
    console.log(sumFin);
}

depositCalc("200","3","5.7");

//sumFin=sum+period*((sum*gpr)/12);

