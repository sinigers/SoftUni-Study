function search() {
    let towns = $('#towns li');
    let searched = $('#searchText').val().toLowerCase();
    let count = 0;

    for (let town of towns) {
        let currentTown = town.textContent.toLowerCase();
        if (currentTown.startWith(searched)) {
            $(town).css('font-weight', 'bold');
            count++;
        } else {
            $(town).css('font-weight', 'normal');
        }
    }
    $('#result').text(`${count} matches found`);
}