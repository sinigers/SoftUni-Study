function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let clearBtn = $('<button>Clear</button>');
    let list = $('<ul>');

    //Textarea function
    textArea.val(0);

    textArea.attr('disabled', true);

    //Btn formation
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    //list foramtion
    list.addClass('result');

    $(clearBtn).on('click', function() {
        textArea.val(0)
    });
    $(incrementBtn).on('click', function() {
        textArea.val(Number(textArea).val() + 1)
    });
    $(addtBtn).on('click', function() {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    // appending
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    clearBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}