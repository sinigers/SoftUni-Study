function solve(params) {
    let juryCount = Number(params.shift());
    let name = params.shift();
    let gradeSum = 0;
    let totoalGrade = 0;
    let examCount = 0;
    while (name !== "Finish") {
        gradeSum = 0;
        if (name === "Finish") {
            break;
        }
        for (let i = 0; i < juryCount; i++) {
            let grade = Number(params.shift());
            gradeSum += grade;

        }
        console.log(`${name} - ${(gradeSum/juryCount).toFixed(2)}.`);
        name = params.shift();
        totoalGrade += gradeSum / juryCount;
        examCount += 1;
    }

    console.log(`Student's final assessment is ${(totoalGrade/examCount).toFixed(2)}.`);

}

solve(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])
    // (["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])
    // While-Loop - 5.75.
    // For-Loop - 5.75.
    // Student's final assessment is 5.75.

// (["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"])
// Arrays - 4.92.
// Lists - 5.75.
// Student's final assessment is 5.34.

// (["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])
// Objects and Classes - 5.00.
// Dictionaries" - 4.82.
// RegEx - 3.15.
// Student's final assessment is 4.32.