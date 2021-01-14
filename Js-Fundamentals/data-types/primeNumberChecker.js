function solve(num) {
    if (num === 2) {
        console.log('true');
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                console.log('true');
                break;
            } else if (num === i * i) {
                console.log('false');
                break;
            } else {
                console.log('false');
                break;
            }
        }
    } else {
        console.log('false');
    }

}

solve(81)