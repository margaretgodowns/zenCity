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

  $(".homeNav").click(function() {
      $('body').animate({
          scrollTop: $("#homeSection").offset().top
        }, 800);
          });

  $(".todaysEventsNav").click(function() {
      $('body').animate({
          scrollTop: $("#todaySection").offset().top
        }, 800);
          });

  $(".futureEventsNav").click(function() {
      $('body').animate({
          scrollTop: $("#futureEventsSection").offset().top
        }, 800);
          });

  $(".weeklyEventsLink").click(function() {
      $('body').animate({
          scrollTop: $("#futureEventsSection").offset().top
        }, 800);
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
