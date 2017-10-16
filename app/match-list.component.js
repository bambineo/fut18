'use strict';

// Register `matchList` component, along with its associated controller and template
angular.
  module('futApp').
  component('matchList', {
    templateUrl: 'match-list.component.html',
    controller: function MatchListController($scope) {
      var ml = this;
      $scope.match = {
        goalsfor: 0,
        goalsagainst: 0
      };
      this.matches = [];

      $scope.saveForm = function() {
        
        var newMatch = angular.copy($scope.match);
        
        ml.matches.push(newMatch);
        $scope.match = {};
        
      }

    }
  });
