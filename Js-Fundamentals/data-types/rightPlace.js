function solve(stringm, char, stringg) {

    let fullWord = stringm.replace('_', char);

    if (fullWord === stringg) {
        console.log('Matched');

    } else {
        console.log('Not Matched');

    }
}
solve('Str_ng', 'I', 'Strong')