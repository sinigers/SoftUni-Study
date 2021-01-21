function solve(array) { //array = masiv (imeto nqma znachenie)

    let result = 0; // promenliva koq shte durji resultata

    let currentNumber = 0; // promenliva koqto shte durji chisloto pri vsqka iteraciq

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    // let firstNum = array.shift()

    for (let i = 1; i < array.length; i++) {

        currentNumber = Number(array[i]); // prezapisvam 0-lata i zapazvam novata stoinost ot masiva
        result++;

        if (currentNumber % 2 === 0) {
            p1++;
        }
        if (currentNumber % 3 === 0) {
            p2++;
        }
        if (currentNumber % 4 === 0) {
            p3++;
        }

        // result = currentNumber / 2; // tuk moje da presmqtash s veche prisvoenite promenlivi

    }
    let p1Result = p1 / result * 100; // kakuv procent se deli na 2 bez osttuk
    let p2Result = p2 / result * 100; // kakuv procent se deli na 3 bez osttuk
    let p3Result = p3 / result * 100; // kakuv procent se deli na 4 bez osttuk

    console.log(p1Result.toFixed(2) + "%"); // shte vrushta rezultata na vseki red
    console.log(p2Result.toFixed(2) + "%"); // shte vrushta rezultata na vseki red
    console.log(p3Result.toFixed(2) + "%"); // shte vrushta rezultata na vseki red
}
solve([
    "3",
    "3",
    "6",
    "9"
]);