angular.module("zenCityApp")
  .factory("mainSvc", function ($rootScope, $log, $firebase) {

    var ref = new Firebase("https://zencity.firebaseio.com/events");

    var sync = $firebase(ref);

    var getEvents = function() {
      return sync.$asArray();

    };

    // var today = new (Date);
    // var curr_date = today.getDate();
    // var curr_month = today.getMonth()+1;
    // var curr_year = today.getFullYear();


    var addEvent = function (singleEvent) {
      ref.push(singleEvent);
    };

    return {
      getEvents: getEvents,
      addEvent: addEvent
    }

  });
