define(function(require) {

  var Marionette = require('marionette');

  var Composer = function() {
    if (!(this instanceof Composer)) {
      return new Composer();
    }
    this.storage = {};
  };

  Composer.prototype = {

    constructor: Composer,

    /**
      Register a layout using a unique name.

      @param {String} name
      @param {Object} layout
     **/
    register: function(name, layout) {
      if (!Marionette.getOption(layout, 'regions')) {
        throw 'Layout argument must be an instance of Marionette.Layout';
      }

      if (this.storage[name]) {
        throw 'Collision with an already existent layout';
      }

      this.storage[name] = layout;

      return this;
    },

    /**
    @param {String} name accessor for the stored layout by name.
    **/
    layout: function(name) {
      return this.storage[name] || null;
    },

    /**
    @param {String} path The accepted format is layout/region
    **/
    region: function(path) {
      // split the path into <layout-name>/<region-name>
      var parts = path.split('/');

      if (parts.length != 2) {
        throw 'The parameters must be <layout-name>/<region-name>';
      }

      var layoutName = parts[0],
        regionName = parts[1],
        layout = this.storage[layoutName];

      if (!layout) {
        throw 'First registry the layout calling Composer#register method';
      }

      return layout[regionName];
    }
  };

  return Composer;
});
