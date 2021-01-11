function fmOld(old, sex) {
    let gender = (sex);
    let age = Number(old);

    if (gender === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else if (age < 16) {
            console.log("Master");
        }

    } else if (gender === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else if (age < 16) {
            console.log("Miss");
        }
    }
}
fmOld("13.5", "m");