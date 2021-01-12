function toggle() {
    let button = document.getElementsByClassName("button");
    let div = document.getElementById("extra");
    if (button["0"].innerText === "More") {
        button["0"].innerText = "Less"
        div.style.display = "block";
    } else {
        button["0"].innerText = "More"
        div.style.display = "none";
    }

}