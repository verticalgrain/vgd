app.overlay = (function($){
  'use strict';

  function init(){
    $('.js-overlay').click('on',function() {
      var type = $(this).attr('data-overlay-type');
    })

    $('.overlay').click('on',function(e){
      if(e.target !== e.currentTarget) return;
      $('body').removeClass('is-overlay-open is-overlay-transparent');
      $('.overlay').empty();
    })
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(window).on('load', init);

})(jQuery);
