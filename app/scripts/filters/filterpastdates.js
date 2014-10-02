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
  .filter('filterPastDates', function (moment) {
    return function (events) {
      var filterByDate = [];
      for (var i = 0; i < events.length; i++) {

        var currentDate = new Date();

        // var dateChecked = new Date(events[i].date).getTime();

        if(moment(currentDate).isBefore(events[i].date, 'hour')) {
          console.log("we're in!");
          filterByDate.push(events[i]);
          console.log(filterByDate);
        }

        // if (currentDate <= Date.parse(events[i].date)) {
        //   filterByDate.push(events[i]);
        // }
      }
      return filterByDate;
    };
  });
