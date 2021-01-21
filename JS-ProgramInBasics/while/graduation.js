function solve(params) {

    let name = params.shift();
    let index = 0;
    let count = 0;
    let sumGrade = 0;


    while (index <= params.length) {
        let grade = Number(params[index]);
        sumGrade += grade;
        if (grade < 4) {
            count += 1;
            if (count >= 2) {
                console.log(`${name} has been excluded at ${index} grade`);
                break;
            }
        }
        if (index + 1 === 12) {
            console.log(`${name} graduated. Average grade: ${(sumGrade/12).toFixed(2)}`);

        }
        index++
    }

}
solve(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);