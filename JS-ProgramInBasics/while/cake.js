function solve(params) {
    let index = 0;
    let w = Number(params.shift(0));
    let l = Number(params.shift(0));
    let allPeaces = w * l;
    let countPeaces = 0;

    while (index < params.length) {
        countPeaces = Number(params[index]);
        allPeaces -= countPeaces;
        index++;
        if (params[index] === "STOP") {
            break;
        }
    }
    if (allPeaces < 0) {
        console.log(`No more cake left! You need ${Math.abs(allPeaces)} pieces more.`);

    }
    if (allPeaces >= 0) {
        console.log(`${allPeaces} pieces are left.`);
    }


}
solve(["10", "2", "2", "4", "6", "STOP"])