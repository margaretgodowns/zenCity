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

  $scope.limit = 2;
  $scope.events = mainSvc.getEvents();

  $scope.combine = function(date,time) {
    if (date && time) {
      return date + ' ' + time;
    } else {
      return "";
    }
  };

  $scope.addSingleEvent = function (singleEvent) {
    mainSvc.addEvent(singleEvent);
    $scope.singleEvent= {};
  };

  });
