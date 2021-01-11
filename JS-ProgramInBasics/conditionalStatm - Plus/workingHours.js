function workingHours(hour, day) {
    let h = Number(hour);

    if (day === "Sunday" || h < 10 || h > 18) {
        console.log("closed");

    } else if (h >= 10 || h <= 18) {
        console.log("open");
    }
}


workingHours("1", "Monday");