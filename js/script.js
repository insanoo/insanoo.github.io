$('.page-1, .page-2, .page-3, .page-4').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 60
    }, 1500, 'swing');
});

