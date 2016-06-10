"use strict";

(function(){
  
  angular
    .module('groundControl')
    .controller('WaterIndexController', WaterIndexController);

  WaterIndexController.$inject = ['$scope','$resource'];

  function WaterIndexController($scope, $resource) {
    $scope.state = $resource('/api/v1/water');
    $scope.state.get();
  }
})();