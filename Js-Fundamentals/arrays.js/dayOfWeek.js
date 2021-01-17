function solve(params) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday', 'Sunday']
    if (params >= 1 && params <= 7) {
        console.log(days[params - 1]);

    } else {
        console.log('Invalid day!');
    }
}
solve(1)