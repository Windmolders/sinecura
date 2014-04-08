'use strict';

angular.module('sinecuraApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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
      .when('/picture/:id/:name', {
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
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope){

        $( window ).resize(function() {
            var cw = $('.item').width();
            $('.item').css({'height':cw+'px'});
        });




  });
