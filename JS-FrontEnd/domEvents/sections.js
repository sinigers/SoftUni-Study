function create(sentances)
let parentDiv = document.getElementById("content");
for (sentance of sentances) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.textContent = sentance;
    paragraph.style.display = "none";
    div.addEventListener("clik", function() {
        div.childNodes["0"].style.display = "block";
    });
    div.appendChild(paragraph);
    parentDiv.appendChild(div);
}