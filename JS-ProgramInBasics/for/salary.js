function solve(array) {
    let tabNum = Number(array[0]);
    let salary = Number(array[1]);

    let face = 0;
    let insta = 0;
    let redi = 0;

    let result = 0; // promenliva koq shte durji resultata

    let currentSite = "";

    let fee = 0;

    for (let i = 2; i < array.length; i++) {

        currentSite = (array[i]);
        result++;

        if (currentSite === "Facebook") {
            face++;
            salary -= 150;
        }
        if (currentSite === "Instagram") {
            insta++;
            salary -= 100;
        }
        if (currentSite === "Reddit") {
            redi++;
            salary -= 50;
        }
    }
    let salariFin = salary - fee;


    if (salariFin <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salariFin);
    }
}
solve(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);