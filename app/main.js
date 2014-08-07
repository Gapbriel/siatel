/**
 * Rjs Configuration. At least we need it empty for the module grunt-bower-requirejs
 * @see https://github.com/yeoman/grunt-bower-requirejs
 *
 * global require
 */
require.config({
  paths: {
    'backbone': 'vendor/backbone/backbone',
    'backbone.babysitter': 'vendor/backbone.babysitter/Gruntfile',
    'backbone.wreqr': 'vendor/backbone.wreqr/Gruntfile',
    'jquery': 'vendor/jquery/jquery',
    'jqueryUi': 'vendor/jquery-ui/ui/jquery-ui',
    'underscore': 'vendor/underscore/underscore',
    'jst': 'vendor/jst/jst',
    'marionette': 'vendor/marionette/lib/backbone.marionette',
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
    'text': 'vendor/text/text',
    'scrollUp':"helpers/scrollup"
  },

  shim: {

    jqueryUi: {
      deps: ['jquery'],
      exports: 'JqueryUi'
    },

    underscore: {
      exports: "_"
    },

    scrollUp: {
      deps: ['jquery'],
      exports: 'scrollUp'
    },

    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Marionette'
    },
    bootstrap: {
      deps: ["jquery"],
      exports: "$.fn.popover"
    }
  }
});

require([
    'app',
    'bootstrap',
    'scrollUp'
  ],
  function(app,bootstrap,scrollUp) {
    "use strict";
    app.start();
  }
);
