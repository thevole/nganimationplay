angular.module('app')
  .animation('.slide-custom', function () {
    return {
      enter: function (element, done) {
        jQuery(element).css({
          position: 'absolute',
          'z-index': 100,
          top: 100,
          left: 0,
          right: 0,
          opacity: 0
        });

        jQuery(element).animate({
          top: 0,
          opacity: 1
        }, done);
      },

      leave: function (element, done) {
        jQuery(element).css({
          position: 'absolute',
          'z-index': 101,
          top: 0,
          opacity: 1
        });
        jQuery(element).animate({
          top: -100,
          opacity: 0
        }, done)
      }

    }
  });