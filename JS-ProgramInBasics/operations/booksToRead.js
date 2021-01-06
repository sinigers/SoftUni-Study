function depositCalc(pages, pegPerHour, days) {
    for (let pages = 1; pages <= 1000; pages++);
    for (let pegPerHour = 1; pegPerHour <= 1000; pegPerHour++);
    for (let days = 0.00; days <= 10000.00; days++);
    let a = pages/pegPerHour;
    let hoursFin = a/days;
    console.log(hoursFin);
}

depositCalc(212,20,2);

//sumFin=sum+period*((sum*gpr)/12);