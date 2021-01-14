function solve(r, h) {
    let vol = (1 / 3 * Math.PI * r * r * h).toFixed(4);

    let l = Math.sqrt(r * r + h * h);
    let are = (Math.PI * r * r + Math.PI * r * l).toFixed(4);

    console.log(`volume = ${vol}`);
    console.log(`area = ${are}`);
}
solve(3, 5)