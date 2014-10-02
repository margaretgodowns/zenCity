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
  .filter('eventDateFilter', function (moment) {
    // console.log("getting into function");
    return function (events){
      // console.log("trying to return events");
  var eventsToday = [];
  // var eventsThisWeek = [];
  // var eventsThisMonth = [];

  for (var i = 0; i < events.length; i++) {
    // console.log("getting into for loop");
    var currentDate = new Date().getTime();
    var dateChecked = new Date(events[i].date);
    if (moment(currentDate).isSame(events[i].date, 'day')) {
      console.log("today today!")
      eventsToday.push(events[i]);
      // console.log(dateChecked);
      // console.log(currentDate);
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
