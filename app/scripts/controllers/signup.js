'use strict';

angular.module('sinecuraApp')
  .controller('SignupCtrl', function ($scope,$http,$rootScope) {

        $scope.message = "";

        $scope.reg={};

        $scope.reg.pass1 = null;
        $scope.reg.pass2 = null;

        $scope.singUp = function (){

            alert($scope.reg.pass1 + " == " +$scope.reg.pass2);

            if($scope.reg.pass1 == $scope.reg.pass2 && $scope.reg.pass1 != null){

            $http.post($rootScope.serverURL+"register.php",{email: $scope.reg.email, name:$scope.reg.name, password:$scope.reg.pass2})
                .success(function(data, status, headers, config) {
                    $scope.message = data.message;

                }).error(function(data, status, headers, config) {
                    alert("Could not reach the database. Contact Zupa.");
                });
            }else{
                $scope.error = "The passwords do not match.";
            }


        };
  });
