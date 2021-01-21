function solve(input) {

    let commit = input[0];
    let index = 0;
    let maxNum = input[0];

    while (commit !== "Stop") {
        let currentNum = input[index];
        index++;
        if (Number(currentNum) > maxNum) {
            maxNum = Number(currentNum);
        }

        if (currentNum === "Stop") {
            console.log(maxNum);
            break;
        }


    }
}
solve(["-1", "-2", "Stop"])