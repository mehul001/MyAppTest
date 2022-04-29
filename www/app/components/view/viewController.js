angular.module('app').controller('viewController', ['$scope', 'appGlobal', '$state', '$ionicPopup', function($scope, appGlobal, $state, $ionicPopup){

  $scope.data = {};
  
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

    if (toState.name === "view") {
      $scope.data = appGlobal.tempData;
    }
  });

  $scope.goBack = function() {
    $state.go("main", {}, { reload:true });
  }

  $scope.deleteData = function() {
    appGlobal.tempData = [];
    $ionicPopup.alert({ title: 'Information', template: 'Saved data has been deleted' });
    $scope.goBack();
  }

}]);