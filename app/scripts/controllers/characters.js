'use strict';

angular.module('sinecuraApp')
  .controller('CharactersCtrl', function ($scope,$rootScope,$http) {


        $scope.characters = [];
        $scope.allcharacters = [];

        $scope.guildchars = [];

        var config = {
            url: $rootScope.serverURL+"allchars.php",
            method: 'POST',
            data: {  },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        $http(config)
            .success(function(data,status,headers,config){


                    $scope.allcharacters = data;


                    $scope.devide();



                $('.progress-indicator').css( 'display', 'none' );
            })
            .error(function(data,status,headers,config){
                alert("error loading images");
            });


        var config = {
            url: $rootScope.serverURL+"guildchars.php",
            method: 'POST',
            data: {  },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        $http(config)
            .success(function(data,status,headers,config){


                $scope.guildchars = data;





                $('.progress-indicator').css( 'display', 'none' );
            })
            .error(function(data,status,headers,config){
                alert("error loading images");
            });


        $scope.devide = function(){

            for(var i = 0; i < $scope.allcharacters.length; i++  ){

                for (var j = 0; j < $scope.allcharacters[i].length; j++){

                   $scope.characters.push($scope.allcharacters[i][j]);

                }

            }

        };
  });
