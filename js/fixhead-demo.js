$(function() {

  "use strict";

  // Fix top menu - not need
  var menuHeight = $('#header').outerHeight();
  var menuBotMargin = parseInt($('#header').css('margin-bottom'));
  $('#content').css({'margin-top': menuHeight + menuBotMargin});
  $('#header').css({'position': 'fixed', 'top': 0, 'width': '100%', 'z-index': 11});


  // Demo
  var $fixhead = $('.js-fixhead');

  var FHParms = {
    topOffset: $('#header').outerHeight(),
    tableMinPad: 35
  }

  if($fixhead.length) {
    $fixhead.fixhead(FHParms);
  }

});