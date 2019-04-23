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

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var barHeight = $(".bar").height() + 40;
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate( {
          scrollTop: target.offset().top - barHeight
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});
