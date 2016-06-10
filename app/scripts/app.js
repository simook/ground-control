'use strict';

(function(){
  
  angular
    .module('groundControl', [
      'ui.router',
      'ngResource'
    ])
    .config(groundControlConfig);

  groundControlConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function groundControlConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('water', {
        url: '/',
        templateUrl: 'views/water.html',
        controller: 'WaterIndexController'
      });
  }
})();
