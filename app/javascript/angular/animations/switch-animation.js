angular.module('app')
  .animation('.switch-custom', function () {
    return {
      enter: function (element, done) {
        jQuery(element).css({
          position: 'absolute',
          top: 0,
          left: element.parent().width(),
          right: 0,
          opacity: 0
        });

        jQuery(element).animate({
          left: 0,
          opacity: 1
        }, done);
      },

      leave: function (element, done) {
        jQuery(element).css({
          position: 'absolute',
          left: 0,
          opacity: 1
        });

        jQuery(element).animate({
          left: element.parent().width() * -1,
          opacity: 0
        }, done);
      }
    }
  });
