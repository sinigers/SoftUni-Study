function solve(params) {
    let floorNum = Number(params[0]);
    let roomNum = Number(params[1])
    let roomType = "";

    for (let f = floorNum; f >= 1; f--) {
        let result = "";

        for (let r = 0; r < roomNum; r++) {
            if (f === floorNum) {
                roomType = "L";
            } else if (f % 2 === 0) {
                roomType = "O";
            } else {
                roomType = "A";
            }
            // console.log(`${roomType}${f}${r}`);
            result += `${roomType}${f}${r}` + " ";
        }
        console.log(result);

    }
}
solve(["6", "4"])

// (["6", "4"])

// (["9", "5"])

// (["4", "4"])