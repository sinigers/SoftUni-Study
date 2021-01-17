function solve(params) {

    let rowCount = Number(params);
    let columnCount = Number(params);
    console.log('<div class="chessboard">');
    for (let index = 1; index <= params; index++) {
        console.log(`  <div>`);
        let row = index;
        if (row % 2 === 0) {
            for (let index = 1; index <= params; index++) {
                let color = index;
                if (color % 2 === 0) {
                    console.log(`    <span class="black"></span>`)
                } else {
                    console.log(`    <span class="white"></span>`);
                }
            }
        } else {
            for (let index = 1; index <= params; index++) {
                let color = index;
                if (color % 2 === 0) {
                    console.log(`    <span class="white"></span>`)
                } else {
                    console.log(`    <span class="black"></span>`);
                }
            }
        }
        console.log(`  </div>`)
    }
    console.log(`</div>`)
}

// console.log(`</div>`);
// console.log(`</div>`);
//     <div class="chessboard">
//   <div>
//     <span class="black"></span>
//     <span class="white"></span>
//     <span class="black"></span>
//   </div>
//   <div>
//     <span class="white"></span>
//     <span class="black"></span>
//     <span class="white"></span>
//   </div>
//   <div>
//     <span class="black"></span>
//     <span class="white"></span>
//     <span class="black"></span>
//   </div>
// </div>

solve(3)