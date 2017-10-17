var app = angular.module('futApp', []);


app.service('angularServices', function ($http) {
    apiKey = '';
    apiUrl = '';


    var service = {
        matches: [],
        getMatches: getMatches
    };
    return service;

    function getMatches() {
        return $http.get("matches.json")
            .success(function (data) {
                service.matches = data;
            });
    }

});