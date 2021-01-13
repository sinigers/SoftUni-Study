function calc() {
    let firstNum = Number(document
        .getElementById("num1").value);
    let sectNum = Number(document
        .getElementById("num2").value);
    let sum = firstNum + sectNum;
    let result = document
        .querySelectorAll("input")[2].value = sum;
    // .getElementById("sum").value = sum; --- selektira po ID
    // .getElementByTagName("input")[2].value = sum;  --- selektira kolekcia - vtroi index na TagName "input"
    // .querySelector("input:last-child").value = sum;      ---- selektira kolekcia - posleno na ot Inputite
}