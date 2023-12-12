var tab = $('.tab-button');
var content = $('.tab-content');

$('.list').click(function(e) {
    tabChange(e.target.dataset.id);
});

function tabChange(i) {
    tab.removeClass('orange');
    tab.eq(i).addClass('orange');
    content.removeClass('show');
    content.eq(i).addClass('show');
}
