function solve(n) {
    let num = Number(n);
    let combinations = 0;


    for (let x = 0; x <= num; x++) {
        for (let y = 0; y <= num; y++) {

            for (let z = 0; z <= num; z++) {
                let sum = x + y + z;
                if (sum !== num) {} else {
                    combinations++;
                }
            }
        }
    }
    console.log(combinations)
}

solve("20")