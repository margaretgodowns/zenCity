'use strict';

describe('Filter: filterPastDates', function () {

  // load the filter's module
  beforeEach(module('zenCityApp'));

  // initialize a new instance of the filter before each test
  var filterPastDates;
  beforeEach(inject(function ($filter) {
    filterPastDates = $filter('filterPastDates');
  }));

  it('should return the input prefixed with "filterPastDates filter:"', function () {
    var text = 'angularjs';
    expect(filterPastDates(text)).toBe('filterPastDates filter: ' + text);
  });

});
