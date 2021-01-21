function solve(input) {

    let num = input[0];
    let index = 0;
    let minNun = Number(input[0]);

    while (num !== "Stop") {
        let currentNum = Number(input[index]);
        num = input[index];
        index++;

        if (currentNum < minNun) {
            minNun = currentNum;
        }
    }
    if (num === "Stop") {
        console.log(minNun);
    }

}
solve(["-10", "20", "-30", "Stop"])