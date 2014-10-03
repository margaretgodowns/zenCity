'use strict';

/**
* @ngdoc filter
* @name zenCityApp.filter:eventDateFilter
* @function
* @description
* # eventDateFilter
* Filter in the zenCityApp.
*/
angular.module('zenCityApp')
.filter('eventDateFilter', function () {
  return function (events) {
    if (events && events.length) {
      var filtered = [];
      var cutOffDate = moment().startOf('day').subtract(1, 'millisecond');
      for (var i = 0; i < events.length; i++) {
        var evt = events[i];
        if (evt.date === cutOffDate) {
          filtered.push(evt);
        }
      }
      return filtered;
    } else {
      return events;
    }
  };
});
