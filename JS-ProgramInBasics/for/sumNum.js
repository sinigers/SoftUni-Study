function sumNum(numbers) {
   
    let sum=0;

    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
        
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumNum("1234");

