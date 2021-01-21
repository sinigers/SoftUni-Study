function solve(shootTime, scenseNum, scenseTime) {
    let allTime = Number(shootTime);
    let scCounr = Number(scenseNum);
    let scTime = Number(scenseTime);
    let neededTime = (scTime * scCounr + allTime * 0.15);

    if (allTime > neededTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(allTime - neededTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime-allTime)} minutes.`);
    }
}
solve(135, 5, 20)