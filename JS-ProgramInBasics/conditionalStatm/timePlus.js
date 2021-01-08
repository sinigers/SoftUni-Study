function timePlus(hours, minutes) {
    let hour = Number(hours) * 60;
    let minute = Number(minutes) + 15;

    let timeMin = hour + minute;
    hour = (Math.floor(timeMin / 60));
    let time = (`${(hour)}:${(minute)}`)

    // let time = (`${h}:${min}`);


    console.log(time);


}

timePlus("2", "55")