angular.module('app')
  .controller('mainCtrl', ['$scope', function ($scope) {
    $scope.on = true;

    $scope.toggleOn = function () {
      $scope.on = !$scope.on;
    };
  }]);