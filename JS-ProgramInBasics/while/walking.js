function solve(param) {
    let index = 0;
    let sumOfWalks = 0;
    let walks = "";
    while (index < param.length) {
        walks = param[index];
        if (walks === "Going home") {
            sumOfWalks += Number(param[index + 1]);
            break;
        }
        if (sumOfWalks >= 10000) {
            break;
        }
        sumOfWalks += Number(walks);
        index++;
    }
    if (sumOfWalks >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumOfWalks-10000} steps over the goal!`);
    } else {
        console.log(`${10000-sumOfWalks} more steps to reach goal.`);
    }
}

solve(["125", "250", "4000", "30", "2678", "4682"])
    // (["1000", "1500", "2000", "6500"])
    // Goal reached! Good job!
    // 1000 steps over the goal!


// (["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
// Goal reached! Good job!
// 298 steps over the goal!

// (["1500", "300", "2500", "3000", "Going home", "200"])
// 2500 more steps to reach goal.

// (["125", "250", "4000", "30", "2678", "4682"])
// Goal reached! Good job!
// 1765 steps over the goal!