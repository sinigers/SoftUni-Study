function solve(inputs) {

    let days = Number(inputs[0]);
    let patientNumberDay = Number(inputs[1]);;
    let doctorNumberAday = 7;
    let sumPatient = 0;
    let sumDoctors = 7;
    let untreatedPatient = 0;
    let treatedPatinent = 0;

    for (let index = 1; index < inputs.length; index++) {
        patientNumberDay = (inputs[index]);
        if (patientNumberDay > doctorNumberAday) {
            untreatedPatient += patientNumberDay - doctorNumberAday;
            doctorNumberAday += 1;
        }
        // sumPatient += (inputs[index]);
        // sumDoctors = 7 * ([index]);

    }
    // for (let index = 3; index <= days; index += 3) {
    //     if (sumDoctors < sumPatient) {
    //         sumDoctors += 1;
    //     }
    // }
    console.log(doctorNumberAday);
    console.log(untreatedPatient);
    console.log(treatedPatinent);
    console.log(sumDoctors);
    console.log(`Treated patients: ${sumDoctors}.`);
    console.log(`Untreated patients: ${sumPatient-doctorNumberAday}.`); //брой непрегледани пациенти
}

solve([4, 7, 27, 9, 1]);