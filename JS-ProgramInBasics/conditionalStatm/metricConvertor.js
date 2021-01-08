function metricConvertor(inNumb, inMetric, exitMetric) {
    let inNum = Number(inNumb);
    let inM = inMetric;
    let exitM = exitMetric;
    let result = Number

    if (inM === "mm" && exitM === "m") {
        console.log(result = (inNum / 1000).toFixed(3));
    } else if (inM === "m" && exitM === "cm") {
        console.log(result = (inNum * 100).toFixed(3));
    } else if (inM === "cm" && exitM === "mm") {
        console.log(result = (inNum * 10).toFixed(3));
    } else if (inM === "mm" && exitM === "cm") {
        console.log(result = (inNum / 10).toFixed(3));
    } else if (inM === "cm" && exitM === "m") {
        console.log(result = (inNum / 100).toFixed(3));

    } else if (inM === "mm" && exitM === "m") {
        console.log(result = (inNum / 1000).toFixed(3));

    } else if (inM === "m" && exitM === "mm") {
        console.log(result = (inNum * 1000).toFixed(3));

    }
}

metricConvertor("1201.34", "mm", "cm")