app.loaded = (function($){
  'use strict';

  function init(){
    // setTimeout(function() {
    //   $('body').scrollTop(30);
    // },1);
    $('html').addClass('is-anchored');
    $('body').addClass('loaded');

    // Lazy load XT
    $.extend($.lazyLoadXT, {
      edgeY:  500,
    });
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(window).on('load', init);

})(jQuery);