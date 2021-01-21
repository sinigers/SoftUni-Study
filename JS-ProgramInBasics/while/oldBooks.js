function solve(params) {
    let search = params.shift();
    let index = 0;



    while (index <= params.length) {
        let bookName = params[index];
        if (search === bookName) {
            console.log(`You checked ${index} books and found it.`);
            break;
        }
        // (search !== bookName && index >= params.length)
        if (bookName === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${index} books.`);
            break;
        }
        index++
    }
}
solve(["The Spot", "Stronger", "Life Style", "Troy", "No More Books"])