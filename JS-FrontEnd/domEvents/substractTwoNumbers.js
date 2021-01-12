function subtract() {
    let numOne = $("#firstNumber");
    let numTwo = $("#secondNumber");
    let resultDiv = $("#result")

    let result = parseFloat(numOne.val()) - parseFloat(numTwo.val());
    resultDiv[0].textContent = result;
}