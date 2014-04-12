'use strict';

angular.module('sinecuraApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'caco.ClientPaginate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/streams', {
        templateUrl: 'views/streams.html',
        controller: 'StreamsCtrl'
      })
      .when('/stream/:who', {
            templateUrl: 'views/stream.html',
            controller: 'StreamsCtrl'
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
      })
      .when('/picture/:id/:lid/:name', {
        templateUrl: 'views/picture.html',
        controller: 'PictureCtrl'
      })
      .when('/picture', {
            templateUrl: 'views/picture.html',
            controller: 'PictureCtrl'
      })
      .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      })
      .when('/member/:name', {
        templateUrl: 'views/member.html',
        controller: 'MemberCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'ForumCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope,$modal,$templateCache){

        $rootScope.serverURL = "http://www.technologytalking.com/sinecura/php/";

        $( window ).resize(function() {
            var cw = $('.item').width();
            $('.item').css({'height':cw+'px'});
        });
/*
        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        });
*/
        $rootScope.user = {};

        $rootScope.items = ['item1', 'item2', 'item3'];


        $rootScope.user.id = null;
        $rootScope.user.name = null;
        $rootScope.user.token = null;
        $rootScope.user.logged = false;

        $rootScope.openLogin = function(){
            var modalInstance = $modal.open({
                templateUrl: 'login.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $rootScope.items;
                    }
                }
            });

            modalInstance.result.then(function (loginItem) {
                $rootScope.loginUser = loginItem;
            }, function () {

            });
        };




    }).filter('getById', function() {
    return function(input, id) {
        var i=0, len=input.length;
        for (; i<len; i++) {
            if (+input[i].id == +id) {
                return input[i];
            }
        }
        return null;
    }
}).filter('reverse', function() {
        function toArray(list) {
            var k, out = [];
            if( list ) {
                if( angular.isArray(list) ) {
                    out = list;
                }
                else if( typeof(list) === 'object' ) {
                    for (k in list) {
                        if (list.hasOwnProperty(k)) { out.push(list[k]); }
                    }
                }
            }
            return out;
        }
        return function(items) {
            return toArray(items).slice().reverse();
        };
    }).filter('customSort',function(){
    function sort (a, b) {
        if (a < b) { return 1; }
        if (a > b) { return -1; }

        return 0;
    }

    return function(arrInput, prop) {
        var arr = arrInput.sort(function(a, b) {
            return sort(+a[prop], +b[prop]);
        });
        return arr;
    }
}).directive('myAdSense', function() {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        template: '<div ng-transclude></div>',
        link: function ($scope, element, attrs) {}
    }
});


var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

    $scope.ok = function () {
        $modalInstance.close($scope.login);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.login = function (){
    $http.post($rootScope.serverURL+"login.php",{cache: false}) //{"lat": $scope.location.latitude, "lng":$scope.location.longitude})
        .success(function(data, status, headers, config) {
            $scope.message = data.message;

        }).error(function(data, status, headers, config) {
            alert("Could not reach the Jupiler database. Do you have an internet connection?");
        });
    };
};