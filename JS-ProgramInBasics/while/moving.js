function solve(params) {

    let freeSpace = Number(params.shift()) * Number(params.shift()) * Number(params.shift());
    let index = 0;
    let countBoxes = 0;

    while (params !== "Done") {
        if (params[index] === "Done") {
            console.log(`${freeSpace-countBoxes} Cubic meters left.`);
            break;
        }
        countBoxes += Number(params[index]);

        if (freeSpace < countBoxes) {
            console.log(`No more free space! You need ${countBoxes-freeSpace} Cubic meters more.`);
            break;
        }

        index++;
    }

}
solve(["10", "1", "2", "4", "6", "Done"]);