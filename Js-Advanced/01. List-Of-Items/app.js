function addItem() {
  // creat new li
  const newElement= document.createElement('li');

  // get text from input
  newElement.textContent=document.getElementById('newItemText').value;

  // put new element with value on the end of UList
  document.getElementById("items").appendChild(newElement);

  
}