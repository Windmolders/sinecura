'use strict';

angular.module('sinecuraApp')
  .controller('MemberCtrl', function ($scope,$rootScope,$http,$routeParams) {


        $scope.characters = [];
        $scope.images = [];

        var config = {
            url: $rootScope.serverURL+"chars.php",
            method: 'POST',
            data: {   wie: $routeParams.name },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        $http(config)
            .success(function(data,status,headers,config){


                if(data.length > 0){

                    $scope.characters = data;


                }

                $('.progress-indicator').css( 'display', 'none' );
            })
            .error(function(data,status,headers,config){
                alert("error loading images");
            });


        var config = {
            url: $rootScope.serverURL+"pictureseach.php",
            method: 'POST',
            data: {   wie: $routeParams.name  },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        $http(config)
            .success(function(data,status,headers,config){

                $scope.images = data;


                $('.progress-indicator').css( 'display', 'none' );
            })
            .error(function(data,status,headers,config){
                alert("error loading images");
            });



    });
