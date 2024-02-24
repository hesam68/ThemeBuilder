$('.add-container i ').click(function (e) { 
    e.preventDefault();
    $(this).hide();
    $(this).parents('.add-container').find('.grid-flex').css('display', 'flex');
});