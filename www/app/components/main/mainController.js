angular.module('app').controller('mainController', ['$scope', 'appGlobal', '$state', '$ionicPopup', function($scope, appGlobal, $state, $ionicPopup){

  $scope.data = {};
  $scope.data.name = "";
  $scope.data.address = "";
  $scope.data.item = "";

  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

    if (toState.name === "main") {
      $scope.clearData();
    }
  });

  $scope.clearData = function() {
    $scope.data = {}; // Clearing local variable/input fields
  }

  $scope.submitData = function() {
    if (!$scope.data.name) {
      $ionicPopup.alert({ title: 'Error', template: 'Please enter a name' });
      return;
    }

    if (!$scope.data.address) {
      $ionicPopup.alert({ title: 'Error', template: 'Please enter an address' });
      return;
    }

    if (!$scope.data.item) {
      $ionicPopup.alert({ title: 'Error', template: 'Please enter an item' });
      return;
    }

    appGlobal.tempData.push($scope.data); // Saving away to system global vairable
    
    $state.go("view", {}, { reload:true }); // Go to next screen
  }
}]);