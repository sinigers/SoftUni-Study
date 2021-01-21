function solve(params) {
    let name = params.shift();
    let allSeats = Number(params.shift());
    // let ticketType = params.shift();
    let allTick = 0;
    let sumAllTick = 0;
    let sumAllStud = 0;
    let sumAllStand = 0;
    let sumAllKid = 0;
    while (name !== undefined) {
        let numStudentTick = 0;
        let numStandartTick = 0;
        let numKidsTick = 0;
        while ((line = params.shift()) !== "End") {
            if (line === "standard") {
                numStandartTick += 1;
            }
            if (line === "student") {
                numStudentTick += 1;
            }
            if (line === "kid") {
                numKidsTick += 1;
            }
            allTick = (numStudentTick + numStandartTick + numKidsTick);
            if (line === "Finish" || allTick == allSeats || line === "End") {
                break;
            }
        }
        sumAllTick += allTick;
        sumAllStud += numStudentTick;
        sumAllStand += numStandartTick;
        sumAllKid += numKidsTick;
        // console.log(`${name} - ${%} full`);
        console.log(`${name} - ${(((numStudentTick + numStandartTick + numKidsTick)/allSeats)*100).toFixed(2)}% full.`);
        name = params.shift();
        allSeats = Number(params.shift());
        if (name === "Finish") {
            console.log(`Total tickets: ${sumAllTick}`);
            console.log(`${((sumAllStud/sumAllTick)*100).toFixed(2)}% student tickets.`);
            console.log(`${((sumAllStand/sumAllTick)*100).toFixed(2)}% standard tickets.`);
            console.log(`${((sumAllKid/sumAllTick)*100).toFixed(2)}% kids tickets.`);
            break;
        }
    }

}

solve(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student",
    "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"
])

// (["Taxi","10","standard","kid","student","student","standard","standard","End",
// "Scary Movie","6","student","student","student","student","student","student","Finish"])
// Taxi - 60.00% full.
// Scary Movie - 100.00% full.
// Total tickets: 12
// 66.67% student tickets.
// 25.00% standard tickets.
// 8.33% kids tickets.

// (["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student",
// "standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard""Finish"])
// The Matrix - 40.00% full.
// The Green Mile - 35.29% full.
// Amadeus - 100.00% full.
// Total tickets: 17
// 41.18% student tickets.
// 47.06% standard tickets.
// 11.76% kids tickets.