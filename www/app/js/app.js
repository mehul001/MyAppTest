// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngCordova', 'ion-datetime-picker', 'angularUtils.directives.dirPagination'])

angular.module('app')

.run(["$ionicPlatform", function ($ionicPlatform) {

  $ionicPlatform.ready(function() {
  })         
}])

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    .state('main', {
      url: '/main',
      templateUrl: 'app/components/main/main.html',
      controller: 'mainController',
      cache: false,
      data: {}
    })

    .state('view', {
      url: '/view',
      templateUrl: 'app/components/view/view.html',
      controller: 'viewController',
      cache: false,
      data: {}
    })
  
  $urlRouterProvider.otherwise(function ($injector, $location) {
      var $state = $injector.get("$state");

      $state.go("main", {}, {reload:true});
  });
})

.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|local|geo|map):/);
}])

.config(["$ionicConfigProvider", function ($ionicConfigProvider) {
  //$ionicConfigProvider.views.swipeBackEnabled(false);
  //$ionicConfigProvider.scrolling.jsScrolling(true);
  $ionicConfigProvider.tabs.position('bottom');
}])

