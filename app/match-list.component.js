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

      ml.getMatches = function () {
        angularServices.getMatches()
          .success(function (matches) {
            ml.matches = matches;
            console.log('matches returned to controller.', ml.matches);
          })
          .error(function () {
            console.log('matches retrieval failed.')
          });
      };

      ml.getMatches();

      ml.saveMatch = function(match) {
        angularServices.saveMatch(match)
          .success(function () {

          })
          .error(function () {
            console.log('save Match failed');
          }

        );
      }


      $scope.saveForm = function () {

        //Das aktuelle Match aus dem Form kopieren zuum Persistieren
        var newMatch = angular.copy($scope.match);

        if (!(newMatch.team) || !(newMatch.type)) return;

        /* var data = $.param({
          type: newMatch.type,
          team: newMatch.team,
          goalsfor: newMatch.goalsfor,
          goalsagainst: newMatch.goalsagainst
        }); */

        var data = JSON.stringify(newMatch);

        //ml.saveMatch(data);

        ml.getMatches();

        ml.matches.push(newMatch);
        $scope.match = {};

      }

      $scope.incrementGoals = function (goals, target) {
        switch (target) {
          case 'goalsfor':
            $scope.match.goalsfor = goals += 1;
            break;
          case 'goalsagainst':
            $scope.match.goalsagainst = goals += 1;
            break;
        }
      }

      $scope.decrementGoals = function (goals, target) {
        if (goals == 0) return;
        switch (target) {
          case 'goalsfor':
            $scope.match.goalsfor = goals - 1;
            break;
          case 'goalsagainst':
            $scope.match.goalsagainst = goals - 1;
            break;
        }
      }

    }
  });
