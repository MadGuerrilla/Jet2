var screenover = $('#screenover');

$('*[data-modal-target]').on('click', function() {
    var target = '#' + $(this).attr('data-modal-target');
    displayShow(screenover);
    displayShow(target);
    $('body').css({
        'position': 'fixed',
        'overflow-y': 'hidden'
    })
});

$('.closeModal').on('click', function() {
    closeModal()
})

$(screenover).on('click', function() {
    closeModal()
})

function closeModal() {
    $('.modal').animate({
        'opacity': '0.0'
    }, 'fast', function() {
        $('.modal').hide()
    })
    $(screenover).animate({
        'opacity': '0.0'
    }, 'fast', function() {
        $(screenover).hide()
    })
    $('body').attr('style', '')
}

function displayShow(show) {
    $(show).show().animate({
        'opacity': '1.0'
    }, 'fast');
}
