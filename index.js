(function(){

  'use strict';

  $(function(){
    $('.toggle').on('click', function() {
      $('.content').toggleClass('slide');
    });
  });

}());
