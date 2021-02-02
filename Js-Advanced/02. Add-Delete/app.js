function addItem() {
  const newElement = document.getElementById("newItemText").value;
  let list = document.getElementById("items");
  if (newElement.lenght === 0) return;

  document.createElement("li");
  let listItem = document.createElement("li");
  listItem.textContent = newElement;

  let remove = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");
  remove.appendChild(linkText);
  remove.href = "#";
  remove.addEventListener("click", deleteItem);

  listItem.appendChild(remove);
  list.appendChild(listItem);
  function deleteItem() {
    listItem.remove();
  }
}

// function remove() {
//   const liElement = document.getElementById("toDelete");
//   liElement.parentNode.removeChild(liElement);
// }
