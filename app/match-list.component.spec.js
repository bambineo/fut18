'use strict';

describe('matchList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('futApp'));

  // Test the controller
  describe('MatchListController', function() {

    it('should create a `match` model with 2 matches', inject(function($componentController) {
      var ctrl = $componentController('matchList');

      expect(ctrl.matches.length).toBe(2);
    }));


  });

});
