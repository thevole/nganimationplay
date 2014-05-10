angular.module('app', ['ngAnimate']);
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
angular.module('app')
  .animation('.test-repeater-custom', function () {
    return {
      enter: function (element, done) {
        jQuery(element).css({
          position: 'relative',
          left: -10,
          opacity: 0
        });

        jQuery(element).animate({
          left: 0,
          opacity: 1
        }, done);
      },

      leave: function (element, done) {
        jQuery(element).css({
          position: 'relative',
          left: 0,
          opacity: 1
        });

        jQuery(element).animate({
          left: -10,
          opacity: 0
        }, done);
      },

      move: function (element, done) {
        jQuery(element).css({
          opacity: 0.5
        });
        jQuery(element).animate({
          opacity: 1
        }, done);

      }
    }
  });
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

angular.module('app')
  .controller('mainCtrl', ['$scope', function ($scope) {
    $scope.on = true;

    $scope.toggle = function () {
      $scope.on = !$scope.on;
    };

    $scope.danger = false;

    $scope.toggleDanger = function () {
      $scope.danger = !$scope.danger;
    };

    $scope.show = true;
    $scope.toggleShow = function () {
      $scope.show = !$scope.show;
    };

    $scope.special = false;
    $scope.toggleSpecial = function () {
      $scope.special = !$scope.special;
    };

    $scope.custom = false;
    $scope.toggleCustom = function () {
      $scope.custom = !$scope.custom;
    };

    $scope.items = [
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ];

  }]);
$(document).foundation();
