function attachEvents() {
    $('.button').on('click', selectedTown);

    function selectedTown() {

        // let currentButton = $(this);

        if ($(this).hasClass('selected')) {
            $(this)
                .removeClass('selected');
        } else {
            $('.button').removeClass('selected');
            $(this)
                .addClass('selected');
        }
    }
}