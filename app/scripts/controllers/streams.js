'use strict';

angular.module('sinecuraApp')
  .controller('StreamsCtrl', function ($scope,$routeParams,$sce) {
    $scope.who = $routeParams.who;

    $scope.streamers=[{name: "kivvi88", displayname: "Kiwi",online: "Offline"},{name:"zupalicious", displayname: "Zupa",online: "Offline"},{}]

    if($scope.who != null){

        $scope.chat = $sce.trustAsResourceUrl("http://twitch.tv/chat/embed?channel="+$scope.who+"&amp;popout_chat=true");

    }else{

        for(var j = 0 ; j < $scope.streamers.length; j++){
            $.getJSON("https://api.twitch.tv/kraken/streams/"+ $scope.streamers[j].name+".json?callback=?",function(c) {
                    if (c.stream == null) {

                        $scope.streamers[j].online = "Offline";
                    } else {
                        $scope.streamers[j].online = "Online";
                    }
                });
        }



    }
  });
