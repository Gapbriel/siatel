/* global define: true */
define(function(require) {

 var Marionette = require('marionette'),
     Jqueryiu = require('jqueryUi'),
    Template = require('jst!./index.html');


 var View = Marionette.ItemView.extend({

    template:Template,
    className:'quienespagelayout',

     onShow: function(){
      this.$el.effect( "slide", "slow" );
    },

  });

  return View;

});
