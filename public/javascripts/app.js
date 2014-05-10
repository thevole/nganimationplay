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
