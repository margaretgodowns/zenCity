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
      var eventsToday = [];
      var startOfDay = moment().startOf('day').subtract(1, 'millisecond');
      var endOfDay = moment().endOf('day');
      for (var i = 0; i < events.length; i++) {
        var evt = events[i];
        if (startOfDay <= moment(evt.date)) {
          if(moment(evt.date) <= endOfDay) {
              eventsToday.push(evt);
            }
        }
      }
      return eventsToday;
    }
  };
});
