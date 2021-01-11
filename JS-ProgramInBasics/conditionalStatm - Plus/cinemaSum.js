function cinemaSum(types, rows, cols) {
    let type = types;
    let row = Number(rows);
    let col = Number(cols);

    let tickNum = row * col;
    let totalSum = 0;

    if (type === "Premiere") {
        totalSum = ((tickNum * 12.00).toFixed(2));
    } else if (type === "Normal") {
        totalSum = ((tickNum * 7.50).toFixed(2));
    } else if (type === "Discount") {
        totalSum = ((tickNum * 5.00).toFixed(2));
    }
    console.log(`${totalSum} "leva"`)

}

cinemaSum("Normal", "21", "13")