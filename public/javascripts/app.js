angular.module('app', ['ngAnimate']);
angular.module('app')
  .controller('mainCtrl', ['$scope', function ($scope) {
    $scope.on = true;

    $scope.toggle = function () {
      $scope.on = !$scope.on;
    };
  }]);
$(document).foundation();