function jurney(budgets, seasons) {
    let budget = Number(budgets);

    let totalSum = 0;
    let destination = "";
    let typeRoom = "";

    if (budget <= 100) {
        if (seasons == "summer") {
            totalSum = budget * 0.30;
            destination = "Bulgaria";
            typeRoom = "Camp";
        }
        if (seasons == "winter") {
            totalSum = budget * 0.70;
            destination = "Bulgaria";
            typeRoom = "Hotel";
        }
    }

    if (budget > 100 && budget <= 1000) {
        if (seasons == "summer") {
            totalSum = budget * 0.40;
            destination = "Balkans";
            typeRoom = "Camp";
        }
        if (seasons == "winter") {
            totalSum = budget * 0.80;
            destination = "Balkans";
            typeRoom = "Hotel";
        }
    }


    if (budget > 1000) {
        totalSum = budget * 0.90;
        destination = "Europe";
        typeRoom = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeRoom} - ${(totalSum).toFixed (2)}`);
}




jurney("312", "summer");

//   измежду "Bulgaria", "Balkans" и "Europe"

