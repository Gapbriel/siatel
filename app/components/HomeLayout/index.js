/* global define: true */
define(function(require) {

  var Marionette = require('marionette'),
    template = require('text!./index.html');

  var View = Marionette.ItemView.extend({

    template:template,
    className:'homeLayout',

      onShow: function(){
       $('.carousel').carousel({
        interval: 5000 //changes the speed
      });
    },

  });

  return View;

});

