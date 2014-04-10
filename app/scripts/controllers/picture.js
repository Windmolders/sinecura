'use strict';

angular.module('sinecuraApp')
  .controller('PictureCtrl', function ($scope,$routeParams,$filter) {

        $scope.images = [
            {id:0,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:1,owner:"Zupa", title:"Dominion", link:"images/dominion.jpg"},
            {id:2,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:3,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:4,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:5,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"},
            {id:6,owner:"Zupa", title:"PVP", link:"http://elderscrollsonline.info/images/site/pvp/pvp-objectives.jpg"}
        ];

    $scope.image={};


    $scope.changePic = function(){
        $scope.image.id = $routeParams.id;
        $scope.image = $filter('getById')($scope.images, $scope.image.id);
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
    $scope.changePic();

});
