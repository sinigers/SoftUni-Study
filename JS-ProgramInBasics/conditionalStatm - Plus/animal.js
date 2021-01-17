function animal(animal) {
    let anim = (animal);

    switch (anim) {
        case "dog":
            console.log("mammal");
            break;

        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;

        default:
            console.log("unknown");
            break;
    }
}
animal("Thursday");