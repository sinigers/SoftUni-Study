function solve(params) {
    let numDays = params.shift();
    let index = 0;
    let sumAday = 0;
    let currentDay = 0;
    let sum = 0;
    let winCounAgame = 0;
    let loseCounAgame = 0;
    let winCounAday = 0;
    let loseCounAday = 0;
    let winC = 0;
    let loseC = 0;
    while (index < params.length) {
        currentDay += 1;
        loseCounAday = 0;
        winCounAday = 0;
        sumAday = 0;
        while (params[index] !== "Finish") {
            winCounAgame = 0;
            loseCounAgame = 0;
            let result = params[index + 1];
            if (result === "win") {
                sumAday += 20;
                winCounAgame += 1;
            } else {
                loseCounAgame += 1;
            }
            index += 2;
            winCounAday += winCounAgame;
            loseCounAday += loseCounAgame;
        }
        if (winCounAday > loseCounAday) {
            sumAday = sumAday * 1.1;
        }
        index += 1;
        winC += winCounAday;
        loseC += loseCounAday;
        sum += sumAday;
    }

    if (winC < loseC) {
        console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`);

    } else {
        console.log(`You won the tournament! Total raised money: ${(sum*1.2).toFixed(2)}`);
    }

}

solve(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"])

// (["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"])
// You won the tournament! Total raised money: 132.00

// (["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", 
// "win", "Finish", "volleyball", "win", "basketball", "win", "Finish" ])

// You lost the tournament! Total raised money: 84.00