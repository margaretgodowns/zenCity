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

  $scope.isCollapsed = false;

  $(".todaysEventsNav").click(function() {
      $('body').animate({
          scrollTop: $("#todaySection").offset().top
              }, 500);
          });

  $(".futureEventsNav").click(function() {
      $('body').animate({
          scrollTop: $("#futureEventsSection").offset().top
              }, 500);
          });

  $(".weeklyEventsLink").click(function() {
      $('body').animate({
          scrollTop: $("#futureEventsSection").offset().top
              }, 500);
          });



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
