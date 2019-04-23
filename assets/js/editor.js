jQuery(document).ready(function($) {

  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.bar').removeClass('flex-justify-end');
      $('.bar').addClass('flex-justify');
      $('.bar #backtop').removeClass('display-none');
    } else {
      $('.bar').removeClass('flex-justify');
      $('.bar').addClass('flex-justify-end');
      $('.bar #backtop').addClass('display-none');
    }
  });

  $('#backtop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});
