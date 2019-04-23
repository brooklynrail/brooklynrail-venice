jQuery(document).ready(function($) {

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#backtop').show();
    } else {
      $('#backtop').hide();
    }
  });

  $('#backtop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});
