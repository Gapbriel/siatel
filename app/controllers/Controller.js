define(function(require) {
  'use strict';
  var Marionette = require('marionette'),

   // HomeView = require('components/HomeLayout/index'),
    contents = require('conf/contents'),

    Article = require('components/ArticleContent/index'),

    Jqueryiu = require('jqueryUi'),

    ContactUsView = require('components/contactUsLayout/index'),

   // LandingView = require('components/HeaderLayout/index');

    RadioPageView = require('components/RadioPageLayout/index'),

    EspecializacionView = require('components/especializacionLayout/index'),

    IndControl = require('components/industrialControlLayout/index'),

    cargadorBaView =  require('components/BatteryChargerLayout/index'),

    contadorPrgmView = require('components/programCounterLayout/index'),

    emuladorRtdView = require('components/emuladorRtdLayout/index'),

    interfasesIndView = require('components/interfasesIndLayout/index'),

    EnergiasView = require('components/EnergiasLayout/index'),

    KombiView = require('components/KombiLayout/index'),

    InstrumentalView = require('components/Instrumental/index'),

    DelsatView = require('components/DelsatLayout/index')

  var Controller = Marionette.Controller.extend({

    initialize: function(app){
      this.appRegions = app._regionManager._regions;
    },

    repetidoresInfrarojo : function() {
      this.appRegions.layoutRight.show(new Article());
    },

    energias : function() {
      this.appRegions.layoutRight.show(new EnergiasView());
    },

    contactUs : function() {
      this.appRegions.layoutRight.show(new ContactUsView());
    },

    medidorUv : function() {
      this.appRegions.layoutRight.show(new IndControl({
          industrial_Control_component : "medidorUv"
      }));
    },

    cargadorBateria : function() {
      this.appRegions.layoutRight.show(new cargadorBaView());
    },

    contadorPrograma : function() {
      this.appRegions.layoutRight.show(new contadorPrgmView());
    },

    emuladorRtd : function() {
      this.appRegions.layoutRight.show(new emuladorRtdView());
    },

    interfasesInd: function() {
      this.appRegions.layoutRight.show(new interfasesIndView());
    },

    especializacion : function () {
       this.appRegions.layoutRight.show(new EspecializacionView());
    },

    radio: function() {
      this.appRegions.layoutRight.show(new RadioPageView());
    },

    instrumental: function () {
      this.appRegions.layoutRight.show(new InstrumentalView());
    },

    kombi: function () {
      this.appRegions.layoutRight.show(new KombiView());
    },

    delsat: function () {
      this.appRegions.layoutRight.show(new DelsatView());
    }

  });

  return Controller;

});
