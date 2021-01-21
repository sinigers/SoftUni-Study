function solve(params) {
    let tax = Number(params);
    let boots = Number(tax * 0.6);
    let shirt = Number(boots * 0.8);
    let ball = Number(shirt / 4);
    let acses = Number(ball / 5);
    console.log((tax + boots + shirt + ball + acses).toFixed(2));
}
solve(320)