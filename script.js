// Анимация прокрутки
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Выделение навигации при прокрутке
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Закрывает адаптивное меню при нажатии пункта меню
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
