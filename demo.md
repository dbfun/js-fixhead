/*
Title: jQuery FixHead live demo
Description: jQuery FixHead live demo
*/

<link rel="stylesheet" href="/css/fixhead.css" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="/js/fixhead.js"></script>
<script src="/js/fixhead-demo.js"></script>


## FixHead

FixHead is a jQuery plugin that fix a head section of a table.

**Demo:** (scroll the page)

<div class="js-fixhead" style="margin-bottom:0.6em;">
  <div class="js-head fixhead-head">
    <div class="js-head-col">#</div>
    <div class="js-head-col">Parameter</div>
    <div class="js-head-col">Description</div>
    <div class="js-head-col">Example</div>
    <div class="js-head-col">Default value</div>
  </div>

  <table class="js-table fixhead-table">
    <tr>
      <td class="col col-1">1</td>
      <td class="col col-2">headSelector</td>
      <td class="col col-3">jQuery selector for table head</td>
      <td class="col col-4">'.js-head'</td>
      <td class="col col-5">'.js-head'</td>
    </tr>
    <tr>
      <td class="col col-1">2</td>
      <td class="col col-2">colsSelector</td>
      <td class="col col-3">jQuery selector for column select in table head</td>
      <td class="col col-4">'.js-head-col'</td>
      <td class="col col-5">'.js-head-col'</td>
    </tr>
    <tr>
      <td class="col col-1">3</td>
      <td class="col col-2">tableSelector</td>
      <td class="col col-3">jQuery selector for table select</td>
      <td class="col col-4">'.js-table'</td>
      <td class="col col-5">'.js-table'</td>
    </tr>
    <tr>
      <td class="col col-1">4</td>
      <td class="col col-2">topOffset</td>
      <td class="col col-3">top offset minimum of the head (if page has fixed top menu)</td>
      <td class="col col-4">$('#header').outerHeight()</td>
      <td class="col col-5">0</td>
    </tr>
    <tr>
      <td class="col col-1">5</td>
      <td class="col col-2">tableMinPad</td>
      <td class="col col-3">minimum padding of table end</td>
      <td class="col col-4">35</td>
      <td class="col col-5">20</td>
    </tr>
    <tr>
      <td class="col col-1">6</td>
      <td class="col col-2">defaultWidths</td>
      <td class="col col-3">default cols widths</td>
      <td class="col col-4">[200, 200, 200, 200]</td>
      <td class="col col-5">[]</td>
    </tr>
  </table>
</div>

## Setup

Add CSS in `<head>` section:

    <link rel="stylesheet" href="/css/fixhead.css" type="text/css" />

or add `js-fixhead.styl` in your [Stylus](http://en.wikipedia.org/wiki/Stylus_(stylesheet_language)) preprocessor stylessheet:

    @import "js-fixhead.styl"

Then, before your closing `<body>` tag add:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="/js/fixhead.js"></script>

JavaScript:

    $(function() {
      var $fixhead = $('.js-fixhead');
      if($fixhead.length) { $fixhead.fixhead(); }
    });

If your page has fixed top menu, specify additional option `topOffset`, f.e.:

    topOffset: $('#header').outerHeight()

and set top menu `z-index` more than 10

## Settings

See the demo above.

## Own stylization

Please, don't use padding for table!

If you want to use padding for table head cells, apply this CSS rule:

    box-sizing: border-box

## Callbacks

There is one callback: `init`.

## Another site live demo

[Investinrussia](http://investinrussia.ru/project-database)