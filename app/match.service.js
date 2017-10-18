var app = angular.module('futApp', []);


app.service('angularServices', function ($http) {
    var apiKey = '';
    var apiUrl = 'http://localhost:3000';


    var service = {
        matches: [],
        getMatches: getMatches
    };
    return service;

    function getMatch(id) {
        return $http.get("")
            .success(function(data) {
                
            }
        )
    }

    function getMatches() {
        return $http.get(apiUrl + "/matches")
            .success(function (data) {
                service.matches = data;
            });
    }

    function saveMatch() {
        return $http.post("")
            .success(function (data) {

            });
    }

});