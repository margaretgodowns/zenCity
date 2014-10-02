'use strict';

/**
 * @ngdoc function
 * @name zenCityApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the zenCityApp
 */
angular.module('zenCityApp')
  .controller('mainCtrl', function ($scope, fbutil, mainSvc, $anchorScroll, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  $scope.events = mainSvc.getEvents();

  $scope.scrollTo = function(id) {
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash(id);

    // call $anchorScroll()
    $anchorScroll();
  };


  $scope.combine = function(date,time) {
    if (date && time) {
      return date + ' ' + time;
    } else {
      return "";
    }
  };



  // $scope.dateToday = Date.parse(curr_month + "/" + curr_date + "/" + curr_year);
  // $scope.dateRange = " ";
  //
  // $scope.eventDateFilter = function(datePicked) {
  //   if (datePicked === 'Today') {
  //     $scope.dateRange = $scope.dateToday;
  //   }
  // };


  $scope.addSingleEvent = function (singleEvent) {
    mainSvc.addEvent(singleEvent);
    $scope.singleEvent= {};
  };

  });
