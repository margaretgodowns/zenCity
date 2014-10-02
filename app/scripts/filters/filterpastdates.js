'use strict';

/**
 * @ngdoc filter
 * @name zenCityApp.filter:filterPastDates
 * @function
 * @description
 * # filterPastDates
 * Filter in the zenCityApp.
 */
angular.module('zenCityApp')
  .filter('filterPastDates', function () {
    return function (events) {
      var filterByDate = [];
      for (var i = 0; i < events.length; i++) {
        console.log("HI");
        var currentDate = new Date();
        console.log(currentDate);
        var dateChecked = new Date(events[i].date);
        console.log(dateChecked);
        if (currentDate <= dateChecked) {
          filterByDate.push(events[i]);
        }
      }
      return filterByDate;
    };
  });
