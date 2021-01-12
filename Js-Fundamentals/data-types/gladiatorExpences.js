function solve(lostFightsCount, helmetRrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let helmetT = parseInt(Number(Number(lostFightsCount) / 2));
    let swordT = parseInt(Number(Number(lostFightsCount) / 3));
    let shieldT = parseInt(Number(lostFightsCount) / 6);
    let armorT = parseInt(shieldT / 2);
    sum = helmetT * Number(helmetRrice) + swordT * Number(swordPrice) + shieldT * Number(shieldPrice) + armorT * Number(armorPrice);


    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
solve('23',
    '12.50',
    '21.50',
    '40',
    '200'
)


// ('7',
//     '2',
//     '3',
//     '4',
//     '5'
// )