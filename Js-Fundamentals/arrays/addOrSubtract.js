function solve(array) {
    let arrNew = [];
    let sumOrig = 0;
    let sumNew = 0;

    for (let index = 0; index < array.length; index++) {
        cElement = array[index];
        sumOrig += cElement;
        if (cElement % 2 === 0) {
            cElement = cElement + index;
        } else {
            cElement = cElement - index;
        }
        arrNew.push(cElement);
        sumNew += cElement;

    }
    console.log(arrNew);
    console.log(sumOrig);
    console.log(sumNew);
}
solve([-5, 11, 3, 0, 2])