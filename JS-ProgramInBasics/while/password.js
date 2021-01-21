function solve(input) {

    let name = input[0];
    let pass = input[1];
    let passInput = input[2];
    let index = 3;

    while (pass !== passInput) {
        passInput = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}



solve(["Nakov", "1234", "pass", "1324", "1234"]);