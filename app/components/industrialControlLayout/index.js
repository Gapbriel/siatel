/* global define: true */
define(function(require) {

  var Marionette = require('marionette'),
      Contents = require('conf/contents'),
      Jqueryiu = require('jqueryUi'),
      Template = require('jst!./index.html');

 var View = Marionette.ItemView.extend({
    template:Template,
    className:'industrialcontrollayout container',
    contents:Contents,

     onShow: function(){
      this.$el.effect( "slide", "slow" );
    },

    serializeData: function() {
      var self = this;
      var component = this.contents.industrial_Control[this.options.industrial_Control_component];
      return {
        title:component['title'] ,
        panelBody:component['panelBody'] ,
        imageUrl:component['imageUrl'] ,
        footerTitle:component['footerTitle'] ,
        footerContent:component['footerContent'],
        pdfButton:component['pdfButton']
        // title:this.options.medidorUv.title ,
        // panelBody:this.options.medidorUv.panelBody ,
        // imageUrl:this.options.medidorUv.imageUrl ,
        // footerTitle:this.options.medidorUv.footerTitle ,
        // footerContent:this.options.medidorUv.footerContent,
        // pdfButton:this.options.medidorUv.pdfButton
      };
    },



  });

  return View;

});
