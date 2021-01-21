function solve(params) {

    let numBadgrades = params.shift();
    let index = 0;
    let currentParam = params[1];
    let examName = params[0];
    let counterBadgrades = 0;
    let sumOfGrades = 0;

    while (currentParam !== "Enough") {
        examName = params[index];
        currentParam = params[index + 1];

        if (Number(currentParam) <= 4) {
            counterBadgrades += +1;
        }
        if (counterBadgrades >= numBadgrades) {
            //  Ако получи определеният брой незадоволителни оценки:
            console.log(`You need a break, ${numBadgrades} poor grades.`);
            break;
        }
        if (examName === "Enough") {
            // Ако Марин стигне до командата Enough, отпечатайте на 3 реда:
            console.log(`Average score: ${(sumOfGrades / (index/2)).toFixed(2)}`);
            console.log(`Number of problems: ${index/2}`);
            console.log(`Last problem: ${params[index-2]}`);
            break;
        }
        sumOfGrades += Number(currentParam);
        index += 2;

    }

}

solve(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);