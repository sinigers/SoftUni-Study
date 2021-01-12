function solve(num) {
    let result = '';
    let currentNum = '';
    for (let index = 0; index < num; index++) {
        currentNum = index;
        let letterF = String.fromCharCode(97 + currentNum);
        // result += letter;

        // console.log(result);
        for (let index = 0; index < num; index++) {
            currentNum = index;
            let letterS = String.fromCharCode(97 + currentNum);
            // result += letter;

            // console.log(result);
            for (let index = 0; index < num; index++) {
                currentNum = index;
                let letterT = String.fromCharCode(97 + currentNum);


                console.log(`${letterF}${ letterS }${ letterT }`);
            }

        }

    }
}
solve(3)