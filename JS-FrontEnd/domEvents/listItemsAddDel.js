function addItem() {
    let newContent = document.getElementById('newText').value; //  darji texta, koito vuvejdame v poleto
    let listItem = document.createElement('li'); //sazdava nov li element
    let ul = document.getElementById('items');

    if (newContent !== '') {
        listItem.appendChild(document.createTextNode(newContent + " "));
        let span = document.createElement('span');
        span.innerHTML = '<a href = "#">[Delete]</a>';
        span.addEventListener('click', deleteItem);

        listItem.appendChild(span);
        ul.appendChild(listItem);
        document.getElementById('items')
            .appendChild(listItem);

        document.getElementById('newText').value = '';

        function deleteItem() {
            let currentItem = this.parentNode;
            let unordedList = currentItem.parentNode;
            unordedList.removeChild(currentItem);

        }
    }



}