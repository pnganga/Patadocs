'use strict';

angular.module('dls').controller('DlsController', ['$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        if ($scope.authentication.user) {
            $scope.find = function() {
                $http.get('/dls').success(function(res) {
                    $scope.ids = res;
                    $scope.alert = 'alert alert-danger';
                }).error(function(res) {
                    $scope.error = res.message;
                });
            }

            $scope.getAlert = function() {
                $scope.dl.mobileNumber = Authentication.user.username;
                $http.post('/dlalert', $scope.dl).success(function(response) {

                    // If successful we assign the response to the success message
                    $scope.message = response.message;
                    $scope.dl.fullNames = "";
                }).error(function(response) {
                    $scope.error = response.message;
                });
            }

        } else {
            $location.path('/signin');
        }


    }
]);