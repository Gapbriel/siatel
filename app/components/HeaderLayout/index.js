/* global define: true */
define(function(require) {

  var Marionette = require('marionette'),
    Template = require('text!./index.html');

  var View = Marionette.ItemView.extend({

    template:Template,
    className: 'headerlayout'

  });

  return View;


});
