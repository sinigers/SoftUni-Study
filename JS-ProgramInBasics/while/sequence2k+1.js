function solve(input) {

    let number = Number(input[0]);
    let index = 0;
    let counter = 1;



    while (number >= counter) {
        console.log(counter);
        counter = 2 * counter + 1;
    }

}



solve(["10"]);