'use strict';

angular.module('sinecuraApp')
  .controller('AccountCtrl', function ($scope,$rootScope,$http) {

        $scope.add = {};
        $scope.new = {};
        $scope.userdata = {};
        $scope.images = [
            {}
        ];

        $scope.characters = [];

        var config = {
            url: $rootScope.serverURL+"userdata.php",
            method: 'POST',
            data: {   wie: $rootScope.user.name  },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        $http(config)
            .success(function(data,status,headers,config){
                $scope.userdata = data[0];

                $('.progress-indicator').css( 'display', 'none' );
            })
            .error(function(data,status,headers,config){
                alert("error loading images");
            });


        var config = {
            url: $rootScope.serverURL+"pictureseach.php",
            method: 'POST',
            data: {   wie: $rootScope.user.name  },
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



        var config = {
            url: $rootScope.serverURL+"chars.php",
            method: 'POST',
            data: {   wie: $rootScope.user.name  },
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

        $scope.delchar =function(ind){

            $scope.characters.splice(ind,1);
            $scope.savedata();
        };


        $scope.addNewCharacter = function(){

            $scope.canAdd = true;
            for(var i = 0; i <  $scope.characters.length ; i++){
                if($scope.characters[i].name == $scope.new.name){
                    $scope.canAdd = false;
                }
            }

            if($scope.canAdd == true){

            var newChar = {
                owner: $rootScope.user.name,
                name: $scope.new.name,
                race: $scope.new.race,
                region: $scope.new.region,
                class: $scope.new.class,
                level:$scope.new.level,
                pvp: $scope.new.pvp,
                titles:
                    [
                        "Guild Member"
                    ]
            };




            $scope.characters.push(newChar);

                $scope.savedata();





            }else{
                alert("Char already exists");
            }




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

        $scope.savedata = function(){
            var config = {
                url: $rootScope.serverURL+"savechars.php",
                method: 'POST',
                data: {owner: $rootScope.user.name , data: $scope.characters} ,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }

            $http(config)
                .success(function(data,status,headers,config){

                    $('.progress-indicator').css( 'display', 'none' );
                })
                .error(function(data,status,headers,config){
                    alert("error saving");
                    $('.progress-indicator').css( 'display', 'none' );
                });
        };



  });
