function skiTrip(days, rooms, feedbacks) {
    let day = Number(days);
    let room = rooms;
    let feedback = feedbacks;

    let totalSum = 0;



    switch (room) {
        case "room for one person":
            if (day < 10) {
                totalSum = ((day - 1) * 18.00);
                break;
            } else if (day >= 10 && day <= 15) {
                totalSum = ((day - 1) * 18.00);
                break;
            } else if (day > 15) {
                totalSum = ((day - 1) * 18.00);
                break;
            }

        case "apartment":
            if (day < 10) {
                totalSum = ((day - 1) * 25.00) * 0.7;
                break;
            } else if (day >= 10 && day <= 15) {
                totalSum = ((day - 1) * 25.00) * 0.65;
                break;
            } else if (day > 15) {
                totalSum = ((day - 1) * 25.00) * 0.50;
                break;
            }
        case "president apartment":
            if (day < 10) {
                totalSum = ((day - 1) * 35.00) * 0.9;
                break;
            } else if (day >= 10 && day <= 15) {
                totalSum = ((day - 1) * 35.00) * 0.85;
                break;
            } else if (day > 15) {
                totalSum = ((day - 1) * 35.00) * 0.80;
                break;
            }
        default:

            break;
    }
    if (feedback === "positive") {
        totalSum = totalSum * 1.25;
        console.log((totalSum).toFixed(2));
    } else if (feedback === "negative") {
        totalSum = totalSum * 0.9;
        console.log((totalSum).toFixed(2));
    }

}


skiTrip("12", "room for one person", "positive");