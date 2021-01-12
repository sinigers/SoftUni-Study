function addItem() {
    let inputText = document.getElementById("newItemText");
    let inputValue = document.getElementById("newItemValue");
    let select = document.getElementById("menu");

    let option = document.createElement("option");
    option.innerText = inputText.value;
    option.value = inputValue.value;
    select.appendChild(option)

    inputText.value = "";
    inputValue.value = "";

}