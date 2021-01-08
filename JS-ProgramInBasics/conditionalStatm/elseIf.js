function demo(num){
    let grade = Number(num);

    if (grade >= 5.5) {
    console.log("excellent");
} else if (grade >= 4.5) {
    console.log("very good");
} else if (grade >= 3.5) {
    console.log("good");
} else if (grade >= 3.0) {
    console.log("not good");
} else if (grade >= 2.0) {
    console.log("bad");
}
demo(5)