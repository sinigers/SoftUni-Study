function solve(params) {
    let eggCount = Number(params.shift());
    let eggColor = "";
    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;
    let maxCount = 0;
    let currenColor = "";
    for (let index = eggCount; index >= 0; index--) {
        currenColor = params[index];
        if (currenColor === "orange") {
            orangeCount += 1;
        } else if (currenColor === "blue") {
            blueCount += 1;
        } else if (currenColor === "red") {
            redCount += 1;
        } else if (currenColor === "orange") {
            greenCount += 1;
        }
    }
    if (orangeCount > blueCount && orangeCount > redCount && orangeCount > greenCount) {
        maxCount = (`${orangeCount} -> orange`);
    } else if (redCount > blueCount && redCount > orangeCount && redCount > greenCount) {
        maxCount = (`${redCount} -> red`);
    } else if (greenCount > blueCount && greenCount > orangeCount && greenCount > redCount) {
        maxCount = (`${greenCount} -> green`);
    } else if (blueCount > greenCount && blueCount > orangeCount && blueCount > redCount) {
        maxCount = (`${blueCount} -> blue`);
    }
    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxCount}`);
}
solve([4, "blue", "red", "blue", "orange"])