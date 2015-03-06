define([
  'marionette',
  'components/HeaderLayout/index',
  'components/MenuLayout/index',
  'components/HomeLayout/index',
  'controllers/Controller',
  'backbone'
],
    function (Marionette,HeaderView,MenuLayout,HomeView,Controller,Backbone) {
        "use strict";

        var app = new Marionette.Application();

        var Router =  Marionette.AppRouter.extend({
              controller: new Controller(app),
              appRoutes: {
                'instrumentosSiatel':'instrumentosSiatel',
                'repetidores': 'repetidoresInfrarojo',
                'energias':'energias',
                'contactUs' : 'contactUs',
                'clients':'clients',
                'medidorUv':'medidorUv',
                'cargadorBateria':'cargadorBateria',
                'contadorPrograma':'contadorPrograma',
                'especializacion':'especializacion',
                'emuladorRtd':'emuladorRtd',
                'interfasesInd':'interfasesInd',
                'radio':'radio',
                'instrumental':'instrumental',
                'kombi':'kombi',
                'delsat':'delsat',
                'home':'home',
                'quienesSomos':'quienesSomos'
              }
            });

       var appRouter = new Router();//

        app.addRegions({
            header: '.header',
            // layoutLeft: '.container-left',
            layoutRight:'.container-right'
        });

        app.addInitializer(function () {
            app.header.show(new HeaderView());
            // app.layoutLeft.show(new MenuLayout());
            app.layoutRight.show(new HomeView());
        });

        app.addInitializer(function () {
              Backbone.history.start();
        });

        return app;
    });
