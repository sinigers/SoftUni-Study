function sumSeconds(secOne, secTwo, secTree) {
    let sOne = Number(secOne);
    let sTwo = Number(secTwo);
    let sTree = Number(secTree);

    let totalTime = sOne + sTwo + sTree;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }


}

sumSeconds("35", "45", "44")