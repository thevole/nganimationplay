angular.module('app')
  .animation('.custom-animation', function () {
    return {
      enter: function (element, done) {
        jQuery(element).css({color: '#ff0000'});
        jQuery(element).animate({color: '#0000ff'}, done);
        return function (cancelled) {
          if (cancelled) {
            jQuery(element).stop();
          }
        }
      },

      leave: function (element, done) {
        done();
      },

      move: function (element, done) {
        done();
      },

      beforeAddClass: function (element, className, done) {
        done();
      },

      addClass: function (element, className, done) {
        jQuery(element).css({color: '#ff0000'});
        jQuery(element).animate({color: '#0000ff'}, 2000, done);
        return function (cancelled) {
          if (cancelled) {
            jQuery(element).stop();
          }
        }
      },

      beforeRemoveClass: function (element, className, done) {
        done();
      },

      removeClass: function (element, className, done) {
        jQuery(element).animate({backgroundColor: '#ff0000'}, 2000, done);
        return function (cancelled) {
          if (cancelled) {
            jQuery(element).stop();
          }
        }
      },

      allowCancel: function (element, event, className) {

      }
    };
  });