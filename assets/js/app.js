(function($) {
  "use strict";

  $( function() {
    $('.nav > li').click( function() {
      $('.nav > li').removeClass('active');
      $(this).addClass('active');
    });
  });

})(jQuery);