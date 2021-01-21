function solve(params) {
    let n = Number(params);
    let result = "";
    let a = 0;
    let b = 0;
    for (let index = 1111; index <= 9999; index++) {
        a = index.toString()[0];
        b = index.toString()[1];
        c = index.toString()[2];
        d = index.toString()[3];
        if (n % Number(a) == 0 && n % Number(b) == 0 && n % Number(c) == 0 && n % Number(d) == 0) {
            result += (index + " ");
        }


    }

    console.log(result);

}
solve(["11"])