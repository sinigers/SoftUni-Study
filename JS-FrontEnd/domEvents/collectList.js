function extractText() {
    let listItems = document.querySelectorAll("#items li");
    let res = "";

    for (let index = 0; index < listItems.length; index++) {
        let item = listItems[index].textContent;
        res += item + "\n";
    }

    document.getElementById("result")
        .textContent = res;

}