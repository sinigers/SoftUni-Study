function extractText() {
    let result = [];

    let listItems = $('#items li')
        .toArray()
        .map(x => result.push(x.textContent));

    $('#result').text(result.join(', '))
}