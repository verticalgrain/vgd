app.example = (function($){
  'use strict';

  function init(){
    $('div').addClass('laded');
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);
