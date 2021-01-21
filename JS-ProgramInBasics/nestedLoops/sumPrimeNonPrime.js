function solve(params) {
    let countPr = 0;
    let countNoPr = 0;
    let sumPrimes = 0;
    let sumNonPrime = 0;

    for (let index = 0; index < params.length; index++) {
        let isPrime = true;
        if (params[index] === "stop") {
            break;
        }
        let currentNum = Number(params[index]);

        if (currentNum < 0) {
            console.log("Number is negative.");
        }
        if (currentNum > 1) {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                sumPrimes += currentNum;
                countPr += 1;
            } else {
                sumNonPrime += currentNum;
                countNoPr += 1;
            }
        }
    }
    console.log(`Sum of all prime numbers is: ${sumPrimes}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

solve(["0", "-9", "0", "stop"])
    //Sum of all prime  
    // Sum of all prime numbers is: 29
    // Sum of all non prime numbers is: 13

// (["30", "83", "33", "-1", "20", "stop"])
// Number is negative.
// Sum of all prime numbers is: 83
// Sum of all non prime numbers is: 83