(function ($, document, window) {

    $.fn.fixhead = function(options) {
      // Public variables

      var settings = $.extend({
        topOffset: 0, // Top offset
        tableMinPad: 20,
        defaultWidths: [],
        tableBorderWidthFirst: 0,
        tableBorderWidthLast: 0,
        headSelector: '.js-head',
        colsSelector: '.js-head-col',
        tableSelector: '.js-table',
        init: $.noop // Callback function on init
      }, options);

      function geometry() {
        if ($tFirstLine.length)  {
          $tFirstLine.find('td').each(function(index){
            var cellWidthPlus = (index == 0 ? settings.tableBorderWidthFirst : (index == ($tFirstLine.find('td').length - 1) ? settings.tableBorderWidthLast : 0));

            $tHeadCols.filter(":eq(" + index + ")").css({
              'width': $(this).outerWidth() + cellWidthPlus + 'px'
              });
            });
          } else {
            if (settings.defaultWidths.length > 0) {
              for (i in settings.defaultWidths) {
                var $col = $tHeadCols.filter(":eq(" + i + ")")
                if ($col.length) { $col.css({'width': settings.defaultWidths[i] + 'px'}); }
              }
            }
          }
          var heights = [];
          $tHeadCols.css({'height': ''}); // reset
          $tHeadCols.each(function() {
            heights.push($(this).outerHeight());
          });
          var maxHeight = Math.max.apply(Math, heights);
          $tHeadCols.css({'height': maxHeight + 'px'});
      }

      function flow() {
        var contentPos = $tFirstLine.offset().top;
        var scrollTop = $(document).scrollTop();
        var floatHeight = $tHead.outerHeight();

        var tableTop = parseFloat($tTable.offset().top);
        var tableHeight = parseFloat($tTable.outerHeight());
        var botTablePoint = tableTop + tableHeight - settings.tableMinPad;

        var scrollLimit = scrollTop + settings.topOffset + floatHeight;
        var isFloat = (scrollLimit > contentPos);
        var isEndtable = (scrollLimit > botTablePoint);

        var tableHideTopMargin = isEndtable ? botTablePoint-scrollLimit : 0;

        var colsWidth = 0;
        $tHeadCols.each(function(){
          colsWidth += $(this).outerWidth();
        });

        if (isFloat) {
          $tHead.css({'position': 'fixed', 'top': settings.topOffset + 'px', 'left': $control.offset().left, 'width': colsWidth + 'px', 'z-index': 10,
            'margin-top': tableHideTopMargin
          });
          $tTable.css({'paddingTop': floatHeight + 'px'});
        } else {
          $tHead.css({'position': 'relative', 'top':0, 'left': 0, 'width': colsWidth + 'px'});
          $tTable.css({'paddingTop': 0});
        }
      }

      function resize() {
        geometry();
        if ($tFirstLine.length) {
          flow();
          setTimeout(function(){geometry(); flow();}, 100);
          setTimeout(function(){geometry(); flow();}, 500);
        }
      }

      function scroll() { flow(); }

      /* Run */

      var $control = this;


      $(window).unbind("resize.fixhead");
      $(window).unbind("scroll.fixhead");

      // Head
      var $tHead = $control.find(settings.headSelector);
      var $tHeadCols = $tHead.find(settings.colsSelector); // "Cols"

      // Table
      var $tTable = $control.find(settings.tableSelector);
      var $tFirstLine = $tTable.find('tr:eq(0)'); // First line of table

      settings.init($tHead, $tHeadCols, $tTable, $tFirstLine);
      resize();
      if ($tFirstLine.length) {
        $(window).bind('resize.fixhead', resize);
        $(window).bind('scroll.fixhead', scroll);
      }


      return $control;
    };

}(jQuery, document, window));