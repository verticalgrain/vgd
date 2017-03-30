app.loaded = (function($){
  'use strict';

  function init(){
    // setTimeout(function() {
    //   $('body').scrollTop(30);
    // },1);
    $('html').addClass('is-anchored');
    $('body').addClass('loaded');
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(window).on('load', init);

})(jQuery);