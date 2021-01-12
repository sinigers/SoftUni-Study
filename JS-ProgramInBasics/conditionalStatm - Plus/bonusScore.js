function bonusScore(bonusPoints) {
    let bonusPoint = Number(bonusPoints);
    let bonus = 0.0;


    if (bonusPoint <= 100) {
        bonus = 5;
    } else if (bonusPoint > 100, bonusPoint < 1000) {
        bonus = bonusPoint * 0.20;
    } else if (bonusPoint > 1000) {
        bonus = bonusPoint * 0.10;
    }

    if (bonusPoint % 2 === 0) {
        bonus = bonus + 1;
    } else if (bonusPoint % 10 === 5) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(bonus + bonusPoint);
}



bonusScore("2704")