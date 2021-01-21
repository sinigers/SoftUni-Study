function solve(params) {
    let name = params.shift();
    let index = 0;
    let currentType = params[index];
    let currentPoints = 0;
    let sumPoints = 301;
    let shootCount = 0;
    let negativeShootCount = 0;
    while (currentType !== "Retire" || sumPoints > 0) {
        if (sumPoints === 0 || currentType === "Retire") {
            break;
        }
        for (let index = 0; sumPoints <= 301; index++) {
            currentType = params[index];
            currentPoints = 0;
            if (currentType === "Single") {
                currentPoints = Number(params[index + 1]);
            }
            if (currentType === "Double") {
                currentPoints = Number((params[index + 1]) * 2);
            }
            if (currentType === "Triple") {
                currentPoints = Number((params[index + 1]) * 3);
            }
            shootCount += 1;
            index++;
            sumPoints -= currentPoints;
            if (currentPoints > sumPoints) {
                negativeShootCount += 1;
                sumPoints += currentPoints;
            }
            if (sumPoints === 0) {
                console.log(`${name} won the leg with ${shootCount} shots`);
                break;
            }
            if (currentType === "Retire") {
                console.log(`${name} retired after ${negativeShootCount} unsuccessful shots.`);
                break;
            }
        }
    }
}
solve(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double",
    "5", "Triple", "10", "Double", "6", "Retire"
])