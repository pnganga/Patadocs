'use strict';

angular.module('students').controller('StudentidsController', ['$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        if ($scope.authentication.user) {
            $scope.find = function() {
                $http.get('/studentids').success(function(res) {
                    $scope.ids = res;
                    $scope.alert = 'alert alert-danger';
                }).error(function(res) {
                    $scope.error = res.message;
                });
            }
            $scope.getAlert = function() {
                $scope.studentId.mobileNumber = Authentication.user.username;
                $http.post('/studentidalert', $scope.studentId).success(function(response) {

                    // If successful we assign the response to the success message
                    $scope.message = response.message;
                    $scope.studentId.admissionNumber = "";
                    $scope.studentId.schoolName = "";
                }).error(function(response) {
                    $scope.error = response.message;
                });
            }
        } else {
            $location.path('/signin');
        }

    }
]);