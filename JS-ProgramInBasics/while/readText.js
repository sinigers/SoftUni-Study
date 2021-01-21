function solve(input) {


    let index = 0;

    while (true) {
        let currentWord = input[index];
        index++;
        if (currentWord === "Stop") {
            break;
        }
        console.log(currentWord);
    }


}
solve(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);