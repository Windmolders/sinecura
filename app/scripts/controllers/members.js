'use strict';

angular.module('sinecuraApp')
  .controller('MembersCtrl', function ($scope,$rootScope,$http) {

        $scope.members = [ {}

        ];

        var config = {
            url: $rootScope.serverURL+"members.php",
            method: 'POST',
            data: {            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        $http(config)
            .success(function(data,status,headers,config){

                $scope.members = data;


                $('.progress-indicator').css( 'display', 'none' );
            })
            .error(function(data,status,headers,config){
                alert("error loading images");
            });


  });
