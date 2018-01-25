'use strict';

angular.module('nationals').controller('NationalsController', ['$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        if ($scope.authentication.user) {
            $scope.find = function() {
                
                $http.get('/nationalids').success(function(res) {
                    $scope.ids = res;
                    $scope.alert = 'alert alert-danger';
                }).error(function(res) {
                    $scope.error = res.message;
                });
            }

            $scope.getAlert = function() {
                $scope.national.mobileNumber = Authentication.user.username;
                $http.post('/nationalalert', $scope.national).success(function(response) {

                    // If successful we assign the response to the success message
                    $scope.message = response.message;
                    $scope.national.idNumber = "";
                }).error(function(response) {
                    $scope.error = response.message;
                });
            }

        } else {
            $location.path('/signin');
        }


    }
]);