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
  var eventsToday = [];
  // var eventsThisWeek = [];
  // var eventsThisMonth = [];

  for (var i = 0; i < events.length; i++) {
    var currentDate = new Date();
    var dateChecked = new Date(events[i].date);
    if (dateChecked === currentDate) {
      eventsToday.push(events[i]);
    }
  }
  return eventsToday;
};
});


// $scope.dateToday = Date.parse(curr_month + "/" + curr_date + "/" + curr_year);
// $scope.dateRange = " ";
//
// $scope.eventDateFilter = function(datePicked) {
//   if (datePicked === 'Today') {
//     $scope.dateRange = $scope.dateToday;
//   }
// };
