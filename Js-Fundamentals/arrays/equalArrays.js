function solve(a, b) {
    let sum = 0;
    let areEqual = true;
    let ind = 0;
    for (let index = 0; index < a.length; index++) {
        a[index] = Number(a[index]);
        b[index] = Number(b[index]);
        sum += a[index]
        ind++;
        if (a[index] !== b[index]) {
            areEqual = false;
            break;
        }

    }
    if (areEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${ind-1} index`);
    }

}
solve(['10', '20', '30'], ['10', '10', '30'])