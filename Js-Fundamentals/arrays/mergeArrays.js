function solve(arrayA, arrayB) {
    let arrayNew = [];
    let cElementN = 0;
    for (let index = 0; index < arrayA.length; index++) {
        let cElementA = arrayA[index];
        let cElementB = arrayB[index];

        if (index % 2 === 0) {
            cElementN = Number(cElementA) + Number(cElementB);
        } else {
            cElementN = Number(cElementA.toString() + cElementB.toString());
        }
        arrayNew.push(cElementN);
    }
    console.log(arrayNew.join(" - "));
}

solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44", "4"])