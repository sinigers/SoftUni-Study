function solve(params) {

    while (params.length > 0) {
        let destination = params.shift();
        let minSum = Number(params.shift());
        let save = Number(params.shift());
        console.log(`Going to ${destination}!`);
        for (let index = save; index <= minSum; index += save) {
            save = Number(params.shift());
        }
        if (params[0] === "End") {
            break;
        }
    }

}
solve(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])


// (["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])

// (["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])