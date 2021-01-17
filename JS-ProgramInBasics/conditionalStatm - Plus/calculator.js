function calculator(numb1, numb2, operators) {

let num1=Number(numb1);
let num2=Number(numb2);
let operator= (operators);
let evOdd="";

let result=0;numb1
if(operator === "+" || operator === "-" || operator === "*"){
if(operator === "+"){
result=num1+num2;
}
if(operator === "-"){
    result=num1-num2;
    }
if(operator === "*"){
    result=num1*num2;
}if(result % 2 === 0){evOdd="even"}else {evOdd="odd"}

console.log(`${numb1} ${operators} ${numb2} = ${result} - ${evOdd}`)
}
  
if(operator === "/"){
    if(num2 === 0){console.log(`Cannot divide ${numb1} by zero`)}
    else {result=num1/num2;
    console.log(`${numb1} ${operators} ${numb2} = ${result.toFixed (2)}`)
}
}
if(operator === "%"){
    if(num2 === 0){console.log(`Cannot divide ${numb1} by zero`)}
    else {result=num1%num2;
    console.log(`${numb1} ${operators} ${numb2} = ${result}`)
    }
}

}


calculator("12", "0", "%");


