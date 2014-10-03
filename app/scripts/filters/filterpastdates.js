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
      if (events && events.length) {
        var filtered = [];
        var cutOffDate = moment().startOf('day').subtract(1, 'millisecond');
        for (var i = 0; i < events.length; i++) {
          var evt = events[i];
          if (cutOffDate.isBefore(evt.date)) {
            filtered.push(evt);
          }
        }
        return filtered;
      } else {
        return events;
      }
    };
  });
