function solve(params) {
    let numOne = Number(params.shift());
    let numTwo = Number(params.shift());
    let printLine = "";

    for (let index = numOne; index <= numTwo; index++) {
        let currentNum = "" + index;
        let oddSum = 0;
        let evenSum = 0;
        for (let diapazon = 0; diapazon <= currentNum.length; diapazon++) {
            let currentDigit = Number(currentNum.charAt(diapazon));
            if (diapazon % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printLine += `${index} `;
        }
    }
    console.log(printLine);
}
solve(["100000",
    "100050"
])