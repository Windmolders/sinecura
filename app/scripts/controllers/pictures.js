'use strict';

angular.module('sinecuraApp')
  .controller('PicturesCtrl', function ($scope ,$http , $rootScope) {


        $scope.images = [ {}

        ];

        var config = {
            url: $rootScope.serverURL+"pictures.php",
            method: 'POST',
            data: {            },
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
