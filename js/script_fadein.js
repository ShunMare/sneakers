$(window).on("scroll", function() {
  $('.feature-content-card li img').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > bottom_of_object){
          $(this).css({'opacity': '1', 'transform': 'translateY(0)'});
      }
  });
});
