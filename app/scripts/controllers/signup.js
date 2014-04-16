'use strict';

angular.module('sinecuraApp')
  .controller('SignupCtrl', function ($scope,$http,$rootScope) {

        $scope.message = "";

        $scope.reg={};

        $scope.reg.pass1 = null;
        $scope.reg.pass2 = null;


        $scope.checkPass = function () {

            if($scope.reg.pass1 != $scope.reg.pass2){
                $scope.error = "The passwords do not match.";
            }else{
                $scope.error = "";
            }

        };

        $scope.singUp = function (){
            $('.progress-indicator').css( 'display', 'block' );

            if($scope.reg.pass1 == $scope.reg.pass2 && $scope.reg.pass1 != null){


                var config = {
                    url: $rootScope.serverURL+"register.php",
                    method: 'POST',
                    data: {
                        email: $scope.reg.email,
                        name:$scope.reg.name,
                        password:$scope.reg.pass2
                    },
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }

                $http(config)
                    .success(function(data,status,headers,config){
                        if(data.status){
                            //succefull reg
                            $scope.message = data.message;

                            if(data.suc == true){
                                $rootScope.openLogin();
                            }
                        }
                        else{
                            $scope.message = data.message;
                            if(data.suc == true){
                                $rootScope.openLogin();
                            }
                        }
                        $('.progress-indicator').css( 'display', 'none' );
                    })
                    .error(function(data,status,headers,config){
                        $scope.message = data.message;
                        $scope.message2 = "error";
                        $('.progress-indicator').css( 'display', 'none' );
                    });






            }else{
                $scope.error = "The passwords do not match.";
                $('.progress-indicator').css( 'display', 'none' );
            }





        };
  });
