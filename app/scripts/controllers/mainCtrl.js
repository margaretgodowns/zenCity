'use strict';

/**
 * @ngdoc function
 * @name zenCityApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the zenCityApp
 */
angular.module('zenCityApp')
  .controller('mainCtrl', function ($scope, fbutil, mainSvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.events = mainSvc.getEvents();

  $scope.addSingleEvent = function (singleEvent) {
    mainSvc.addEvent(singleEvent);
  }
  });
