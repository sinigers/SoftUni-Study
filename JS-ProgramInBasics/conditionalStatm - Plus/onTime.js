function onTime(hExams, mExams, hArrive, mArrive) {
    let hE = Number(hExams * 60);
    let mE = Number(mExams);
    let timeEmin = hE + mE;

    let hA = Number(hArrive * 60);
    let mA = Number(mArrive);
    let timeAmin = hA + mA;
    let mDiff = Math.abs(timeEmin - timeAmin);
    // let mDiffLate = timeAmin - timeEmin;

    let definition = "";


    if (timeEmin >= timeAmin) {
        definition = "On time";
        if (mDiff > 30) {
            definition = "Early";
        }
    }

    if (timeEmin < timeAmin) {
        definition = "Late";
    }

    console.log(definition);

    if (mDiff !== 0) {
        if (mDiff >= 60 && timeEmin > timeAmin) {
            if (mDiff % 60 < 10) {
                console.log(`${Math.floor(mDiff/60)}:0${(mDiff % 60)} hours before the start`);
            } else { console.log(`${Math.floor(mDiff/60)}:${(mDiff % 60)} hours before the start`); }

        } else if (mDiff < 60 && mDiff > 0 && timeEmin > timeAmin) {
            console.log(`${mDiff} minutes before the start`);
        }
        if (mDiff < 60) {
            console.log(`${Math.abs(mDiff)} minutes after the start`);
        } else if (mDiff > 60) {
            console.log(`${Math.floor(mDiff/60)}:${(mDiff% 60)} hours after the start`);
        }

    }
}


onTime("11", "30", "12", "29")