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
        $scope.newClientReport = {
            mwsAuthKey: "",
            clientName: "",
            tableName: ""
        };

        $scope.testGetOne = function() {
            var getBooks = encodeURIComponent("true");
            $http.get('/?get-books='+getBooks).then(function(res) {
                console.log("jha - res.data");
                console.log(res.data);
                $scope.testGetOneData = res.data;
            });
        };

        $scope.login = function () {
            var action = encodeURIComponent("postNewUser");

            $http //-- The Request(currently hardcoded values):
                .get("actions.php?action=" + action +
                    "&email=julius@lab916.com" +
                    "&loginActive=0")
                // the response:
                .then(function (res) {
                    console.log("jha - response = ");
                    console.log(res.data);
                    $scope.ccUser = res.data;
                });
        };

        $scope.createTable = function() {
            var client = $scope.newClientReport.clientName;
            var table = $scope.newClientReport.tableName;

            var eClientName = encodeURIComponent(client);
            var eTableName = encodeURIComponent(table);
            $http.get("/?action=create-table&client-name="+eClientName+
            "&table-name="+eTableName).then(function(res) {
                console.log("The response data = ");
                console.log(res.data);
                console.log("The response object =");
                console.log(res);
            });
        }
    }
]);
