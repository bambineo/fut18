var app = angular.module('futApp', []);
app.service('angularServices', function ($http) {
    apiKey = '';
    apiUrl = '';


    this.getMatches = function() {
        $http.get('matches.json')
            .then(function(response) {
                return response.data;
            });
    }

});