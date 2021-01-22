function solve(params) {
    let result = '';
    params.reverse()
    for (let index = 0; index < params.length; index++) {
        result += params[index] + ' ';

    }
    console.log(result);
}
solve(['a', 'b', 'c', 'd', 'e'])