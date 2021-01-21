function solve(input) {

    let number = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (number > sum) {
        let submitions = Number(input[index]);
        sum += submitions;
        index++;
    }
    console.log(sum);
}



solve(["10"]);