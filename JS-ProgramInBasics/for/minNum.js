function solve(array) {
    let numberCount = Number(array[0]);

    let smallestNum = Number(array[1]); // promenliva koq shte durji nai malkoto chislo

    let currentNumber = Number(""); // promenliva koqto shte durji chisloto pri vsqka iteraciq

    for (let index = 1; index < array.length; index++) {
        currentNumber = Number(array[index]);

        if (currentNumber < smallestNum) {
            smallestNum = currentNumber;
        }



    }
    console.log(smallestNum)
}
solve(["3", "-10", "20", "-30"]);