angular.module("zenCityApp")
  .factory("mainSvc", function ($rootScope, $log, $firebase) {

    var ref = new Firebase("https://zencity.firebaseio.com/events");

    var sync = $firebase(ref);

    var getEvents = function() {
      console.log(sync.$asObject());
      return sync.$asObject();

    };

    var addEvent = function (singleEvent) {
      ref.push(singleEvent);
    };

    return {
      getEvents: getEvents,
      addEvent: addEvent
    }

  });
