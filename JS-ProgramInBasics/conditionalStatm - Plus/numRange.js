function numRange(num) {
    let number = Number(num);

    if (number === 0 || number > 100 || number < -100) {
        console.log("No");

    } else if (number >= -100 || number <= 100) {
        console.log("Yes");
    }
}


numRange("-110");