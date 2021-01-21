function solve(destination, period, daysCount) {
    let dest = destination;
    let per = period;
    let days = Number(daysCount);
    let sum = 0;
    switch (dest) {
        case "Germany":
            if (per === 21 - 23) {
                sum = days * 32;
            } else if (per === 24 - 27) {
                sum = days * 37;
            } else if (per === 24 - 27) {
                sum = days * 43;
            }
            break;
        case "France":
            if (per === 21 - 23) {
                sum = days * 30;
            } else if (per === 24 - 27) {
                sum = days * 35;
            } else if (per === 24 - 27) {
                sum = days * 40;
            }
            break;
        case "Italy":
            if (per === 21 - 23) {
                sum = days * 28;
            } else if (per === 24 - 27) {
                sum = days * 32;
            } else if (per === 24 - 27) {
                sum = days * 39;
            }
            break;
        default:
            break;
    }
    console.log(`Easter trip to ${dest} : ${sum.toFixed(2)} leva.`);
}
solve("Germany", 24 - 27, 5)