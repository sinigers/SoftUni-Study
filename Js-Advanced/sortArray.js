function sortArray(arr, type) {
    const sortingNum={
        'asc':(a,b)=>a-b,
        'desc': (a,b)=>b-a
    }

  
    return arr.sort(sortingNum[type])
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));


// function sortArray(arr, type) {
    
//     const sortingString={
//         'asc':(a,b)=>a.localeCompare(b),
//         'desc': (a,b)=>b.localeCompare(a)
//     }
//     return arr.sort(sortingString[type])
// }

// console.log(sortArray(['c', 'a', 'f', 'g', 'b'], 'asc'));