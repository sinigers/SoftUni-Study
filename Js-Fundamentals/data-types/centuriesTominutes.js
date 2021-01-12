function solve(params) {
    let years = params * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutres = hours * 60;
    console.log(`${params} centuries = ${years} years = ${days} days = ${hours} hours = ${minutres} minutes`);
}
solve(1)