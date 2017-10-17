'use strict';

// Register `matchList` component, along with its associated controller and template
angular.
  module('futApp').
  component('matchList', {
    templateUrl: 'match-list.component.html',
    controller: function MatchListController($scope, angularServices) {
      var ml = this;

      

      $scope.match = {
        goalsfor: 0,
        goalsagainst: 0
      };
      this.matches = angularServices.getMatches();

      $scope.saveForm = function() {
        
        //Das aktuelle Match aus dem Form kopieren zuum Persistieren
        var newMatch = angular.copy($scope.match);

        if (!(newMatch.team) || !(newMatch.team)) return;
        
        ml.matches.push(newMatch);
        $scope.match = {};
        
      }

      $scope.incrementGoals = function(goals, target) {
        switch (target) {
          case 'goalsfor': 
            $scope.match.goalsfor = goals+=1;
            break;
          case 'goalsagainst':
            $scope.match.goalsagainst = goals+=1;
            break;
        }
      }

      $scope.decrementGoals = function(goals, target) {
        if (goals == 0) return;
        switch (target) {
          case 'goalsfor': 
            $scope.match.goalsfor = goals-1;
            break;
          case 'goalsagainst':
            $scope.match.goalsagainst = goals-1;
            break;
        }
      }

    }
  });
