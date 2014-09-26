'use strict';

/**
 * @ngdoc function
 * @name zenCityApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the zenCityApp
 */
angular.module('zenCityApp')
  .controller('mainCtrl', function ($scope, $routeParams, $rootScope, mainSvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    
  });
