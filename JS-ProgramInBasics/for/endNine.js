function endNine(numOne, numTwo) {

    let currentNum = 0;
    numOne = Number(numOne);
    numTwo = Number(numTwo);

    let number = "";
    let result = 0;

    for (let index = numOne; index <= numTwo; index++) {
        currentNum = Number(index);


        if (index % 9 === 0) {
            result += index;
            number += index.toString() + "\n";
        }
    }
    console.log(`The sum: ${result}`);
    console.log(number);

}
endNine("100", "200")