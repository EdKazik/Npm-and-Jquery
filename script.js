
$("#btn").click(() => {
    $(this).prop('disabled', true);
    const newDiv = $("<div id='new_div'></div>").css({ "height": '100px', 'width': '200px', 'border': '8px solid blue', 'background': 'yellow'})
    $(this).before(newDiv);
    const newBtn = $("<button id='new_btn'>Close</button>").css({ 'margin-left': '80px', 'margin-top': '35px'});
    newDiv.append(newBtn);
    $(new_btn).click(() => {
        $(this).prop('disabled', false);
        newDiv.remove()
    })
});

