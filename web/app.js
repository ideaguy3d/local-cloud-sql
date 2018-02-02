'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute']).config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/'});
    }
]).controller('CoreCtrl', ["$scope", "$http",
    function ($scope, $http) {
        $scope.ccMessage = "Hello, from the CoreCtrl";
        $scope.login = function () {
            var action = encodeURIComponent("loginSignup");

            $http //-- The Request(currently hardcoded values):
                .get("actions.php?action=" + action +
                    "&email=julius@lab916.com" +
                    "&loginActive=0")
                // the response:
                .then(function (res) {
                    console.log("jha - response = ");
                    console.log(res.data);
                    $scope.ccUser = res.data;
                })
        };
    }
]);