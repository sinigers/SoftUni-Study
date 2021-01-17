function volley(yearsType, hollidaysNum, weekendsNum) {

    let hollNum = Number(hollidaysNum);
    let weeksTravel = Number(weekendsNum);
    let allYearWeek = 48;

    let totalGames = 0;
    let gameSf = 0;
    let weekInSofia = 48 - weeksTravel;

    gameSf = (weekInSofia * (3.0 / 4) + (hollidaysNum * (2.0 / 3)));

    totalGames = gameSf + weeksTravel;

    if (yearsType === "leap") {
        console.log(Math.floor(totalGames * 1.15));
    } else console.log(Math.floor(totalGames));
}

volley("asd", "5", "2")