'use strict';

angular.module('sinecuraApp')
  .controller('PictureCtrl', function ($scope,$routeParams,$filter ,$rootScope,$http) {

        $scope.images = [

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

                $scope.changePic();

                $('.progress-indicator').css( 'display', 'none' );
            })
            .error(function(data,status,headers,config){
                alert("error loading images");
            });

    $scope.image={};


    $scope.changePic = function(){


        for(var i = 0; i< $scope.images.length; i++){



            if($scope.images[i].id == $routeParams.id){
            $scope.image = $scope.images[i];
            }

        };



        $scope.image.idenx = $scope.images.indexOf($scope.image);
    };

    $scope.changePicIndex = function(indexke){
        $scope.image = $scope.images[indexke];
        $scope.image.idenx = indexke;
    };

    $scope.next = function(indexke){
           indexke++;
        if(indexke == $scope.images.length){
            indexke=0;
        }
        $scope.changePicIndex(indexke);
    };

    $scope.previous = function(indexke){
        indexke--;
        if(indexke < 0){
            indexke = $scope.images.length - 1;

        }
        $scope.changePicIndex(indexke);
    };


});
