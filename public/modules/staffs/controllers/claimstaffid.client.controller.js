'use strict';

angular.module('staffs').controller('ClaimstaffidController', ['$scope', '$http', '$location', 'Authentication', '$stateParams', '$window',
    function($scope, $http, $location, Authentication, $stateParams, $window) {
        $scope.authentication = Authentication;
        if ($window.sessionStorage['user']) {
            $scope.authentication.user = JSON.parse($window.sessionStorage['user']);
        };
        if ($scope.authentication.user) {
            $scope.claim = function() {
                if ($scope.authentication.user.accountBalance < 200) {
                    $http.get('/staffid/' + $stateParams.id).success(function(res) {
                        $scope.id = res;
                    }).error(function(res) {
                        $scope.error = res.message;
                    });
                }

            }

        } else {
            $location.path('/signin');
        }

    }
]);