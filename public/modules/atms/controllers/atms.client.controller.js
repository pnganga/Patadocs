'use strict';

angular.module('staffs').controller('AtmsController', ['$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {

        $scope.find = function() {
            $http.get('/atms').success(function(res) {
                $scope.ids = res;
                 $scope.alert = 'alert alert-danger';
            }).error(function(res) {
                $scope.error = res.message;
            });
        }
       
    }
]);
