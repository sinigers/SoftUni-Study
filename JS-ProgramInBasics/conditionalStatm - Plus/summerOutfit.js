function summerOutfit(temperatures, times) {
    let time = times;
    let temp = Number(temperatures);


    let outfit = "outfits";
    let shoes = "shoess";

    switch (time) {
        case "Morning":
            if (temp >= 10 && temp <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            } else if (temp > 18 && temp <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            } else if (temp >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            }
        case "Afternoon":
            if (temp >= 10 && temp <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            } else if (temp > 18 && temp <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            } else if (temp >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            }
        case "Evening":
            if (temp >= 10 && temp <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            } else if (temp > 18 && temp <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            } else if (temp >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            }
        default:

            break;
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
}







summerOutfit("22", "Afternoon")