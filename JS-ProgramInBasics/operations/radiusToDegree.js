function radiusToDegree(input) {
    let radius = Number(input);
    let degree = radius*180/Math.PI;
    
    console.log(degree.toFixed(0));
}

radiusToDegree();