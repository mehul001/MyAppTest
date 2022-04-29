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

