angular.module('app')

  //These variables can't be changed
  .constant('appConfig', {
    devMode: true,
  })

  //These variables can be changed through the app
  .value ('appGlobal', {
    tempData: []
  })