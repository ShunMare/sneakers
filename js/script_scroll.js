var position_top_margin = 84;

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - position_top_margin;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});