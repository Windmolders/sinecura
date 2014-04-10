'use strict';

angular.module('sinecuraApp')
  .controller('AccountCtrl', function ($scope,$rootScope) {
    $scope.user = $rootScope.user;

        $scope.user.logged = true;

        $scope.add = {};
        $scope.new = {};


        $scope.images = [
            {id:0,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:1,owner:"Zupa", title:"Dominion", link:"images/dominion.jpg"},
            {id:2,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:3,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:4,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:5,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:6,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"}
        ];

        $scope.characters = [{owner: 0, name: "Zupalicious", race:"Imperial", class:"Dragon Knight", region: "Aldmeri Dominion",level:31, pvp: "Dawnbreaker", titles:["Guild member" ,"Officer" ,"Tank", "Blacksmith"]}
        ,{owner: 0, name: "ZUpa", race:"Nord", class:"Templar", region: "Aldmeri Dominion",level:31, pvp: "Dawnbreaker", titles:["Guild member" ,"Officer" ,"Tank", "Blacksmith"]}];

        $scope.newTitles = [];

        $scope.pushTitles = function(){
            $scope.newTitles.push($scope.newTitle);
        };

        $scope.addprof = function(ind){
            if($scope.add.proff== null){
                $scope.add.proff = "Zupa his Bitch";

            }

            if($.inArray($scope.add.proff, $scope.characters[ind].titles) != -1){
            alert("You can NOT be 2 times the same dude!")
            }else{


            $scope.characters[ind].titles.push($scope.add.proff);
            }
            $scope.add.proff = null;

        };

        $scope.del =function(ind,tit){

            $scope.characters[ind].titles.splice(tit,1);

        };


        $scope.addNewCharacter = function(){


            var newChar = {
                owner: $rootScope.user.id,
                name: $scope.new.name,
                race: $scope.new.race,
                region: $scope.new.region,
                class: $scope.new.class,
                level:$scope.new.level,
                pvp: $scope.new.pvp,
                titles:
                    [
                        "Guild Applicant"
                    ]
            };

            $scope.characters.push(newChar);
            $scope.$apply();

        }


        $scope.safeApply = function(fn) {
            var phase = this.$root.$$phase;
            if(phase == '$apply' || phase == '$digest') {
                if(fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
  });
