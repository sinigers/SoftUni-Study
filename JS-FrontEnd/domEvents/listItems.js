function addItem() {
    let newContent = document //  darji texta, koito vuvejdame v poleto
        .getElementById("newItemText").value;
    let newListItem = document.createElement("li"); //sazdava now li element
    newListItem.textContent = newContent; // svarzva newContenta s novia list element
    let list = document.getElementById("items"); // dobavia lis elementa v ID = items

    list.appendChild(newListItem);
    document
        .getElementById("newItemText").value = ""; // iztriva poleto za pisane sled pribawqne
}