angular.module('app', ['ngAnimate']);
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

  }]);
$(document).foundation();
