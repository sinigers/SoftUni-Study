function solve(array) {
    let a = Number(array.shift());
    let b = Number(array.shift());
    let n = Number(array);
    let count = 0;
    let countTwo = 0;
    let firstComb = "";

    for (let index = a; index <= b; index++) {
        for (let i = a; i <= b; i++) {
            let sum = index + i;
            if (sum === n) {
                count += 1;
                if (count === 1) {
                    // console.log(`${index} + ${i} = ${n}`);
                    firstComb = (`(${index} + ${i} = ${n})`);
                }
            }
            countTwo += 1;

        }

        // if (count === 0) {
        //     console.log(`${count} combinations - neither equals ${n}`);
        //     break;
        // }
    }
    if (count === 0) {
        console.log(`${countTwo} combinations - neither equals ${n}`);
    } else {
        console.log(`Combination N:${count} ${firstComb}`);

    }
}

solve(["88", "888", "1000"])

// (["1", "10", "5"])

// (["23", "24", "20"])

// (["88", "888", "1000"])

// (["88", "888", "2000"])