function hotelRoom(months, nightsNum) {
    let nightNum = Number(nightsNum);
    let totalSumA = 0;
    let totalSumS = 0;
    let room = "";
    let month = months;


    if (month === "May" || month === "October") {
        totalSumA = nightNum * 65;
        totalSumS = nightNum * 50;
    }
    if (month === "June" || month === "September") {
        totalSumA = nightNum * 68.70;
        totalSumS = nightNum * 75.20;
    }
    if (month === "July" || month === "August") {
        totalSumA = nightNum * 77;
        totalSumS = nightNum * 76;
    } else if (room === "Studio") {

    }
    if (nightNum > 14) {
        totalSumA = totalSumA * 0.90;
        if (month === "June" || month === "September") {
            totalSumS = totalSumS * 0.80;
        }
        if (month === "May" || month === "October") {
            totalSumS = totalSumS * 0.70;
        }
    }
    if (nightNum > 7 && nightNum < 14) {
        if (month === "May" || month === "October") {
            totalSumS = totalSumS * 0.95;
        }
    }
    console.log(`Apartment: ${ totalSumA.toFixed (2) } lv.`);
    console.log(`Studio: ${ totalSumS.toFixed (2)  } lv.`);

}
hotelRoom("June", "15")