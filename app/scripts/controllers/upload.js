'use strict';

angular.module('sinecuraApp')
  .controller('UploadCtrl', function ($scope,$rootScope,$http) {

        $scope.uplink = null;
        $scope.uptitle = null;

        $scope.upload = function(thelink, thetitle){

            thelink = $("#uplink").val();
            thetitle = $("#uptitle").val();



            if(thelink != "" && thetitle != ""){

                $("#picture-alert").addClass("hidden");

                var config = {
                    url: $rootScope.serverURL+"upload.php",
                    method: 'POST',
                    data: { owner: $rootScope.user.name, title: thetitle, link:thelink  },
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }

                $http(config)
                    .success(function(data,status,headers,config){
                        $('.progress-indicator').css( 'display', 'none' );
                        alert("Picture uploaded");
                    })
                    .error(function(data,status,headers,config){
                        alert("error loading images");
                    });





            }
            else{
                $("#picture-alert").removeClass("hidden");
            }
        };



    });
