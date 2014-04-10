'use strict';

angular.module('sinecuraApp')
  .controller('StreamsCtrl', function ($scope,$routeParams,$sce) {
    $scope.who = $routeParams.who;

    $scope.streamers=[{name: "kivvi88", displayname: "Kiwi",online: "Offline",logo:"images/no-image.png"},{name:"zupalicious", displayname: "Zupa",online: "Offline",logo:"images/no-image.png"}
   ]



    $scope.getStreamOnline = function (wie){

        $.getJSON("https://api.twitch.tv/kraken/streams/"+ $scope.streamers[wie].name+".json?callback=?",function(c) {
            if (c.stream == null) {
                $scope.streamers[wie].online = "Offline";


            } else {

                $scope.streamers[wie].online = "Online";


            }
            $scope.$apply();
            $scope.getStreamData(angular.copy(wie));

        });

    };

        $scope.getStreamData = function (wie2){


            $.getJSON("https://api.twitch.tv/kraken/channels/"+ $scope.streamers[wie2].name+".json?callback=?",function(d) {
                if (d.logo != null) {

                    $scope.streamers[wie2].logo = d.logo;
                    $scope.streamers[wie2].title = d.status;
                    $scope.streamers[wie2].game = d.game;
                    $scope.$apply();
/*
                    angular.forEach($scope.streamers[wie2],function(key,value){
                        alert(key+" : " + value);
                    });
*/
                }

            });

        };


        if($scope.who != null){

            $scope.chat = $sce.trustAsResourceUrl("http://twitch.tv/chat/embed?channel="+$scope.who+"&amp;popout_chat=true");

        }else{

            for(var j = 0 ; j < $scope.streamers.length; j++){
                $scope.getStreamOnline(angular.copy(j));
            }
        };

  });
