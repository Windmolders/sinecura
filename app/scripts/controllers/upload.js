'use strict';

angular.module('sinecuraApp')
  .controller('UploadCtrl', function ($scope,$rootScope) {


        $scope.user = $rootScope.user;

        $scope.user.logged = true;

    $scope.doAlert = function(){
        alert("test");
    };

    $scope.upload = function(){
        if($scope.url != null && $scope.title != null){
            $("#picture-alert").addClass("hidden");

            //ajax;



        }
        else{
            $("#picture-alert").removeClass("hidden");
        }
    };


  });
