function areaFigures(figure, size1, size2) {
    let fig = figure;
    let sz1 = Number(size1);
    let sz2 = Number(size2);
    if (fig === "square") {
        console.log((sz1 * sz1).toFixed(3));
    } else if (fig === "rectangle") {
        console.log((sz1 * sz2).toFixed(3));
    } else if (fig === "circle") {
        console.log((sz1 * sz1 * Math.PI).toFixed(3));
    } else if (fig === "triangle") {
        console.log((sz1 * sz2 / 2).toFixed(3));
    }


}

areaFigures("circle", 6, 5)