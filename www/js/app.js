// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

      var config = {
          apiKey: "AIzaSyBcwqMKs0Rdcg0KVJfWavy0Q4D-LhEtIc8",
          authDomain: "surv-b583e.firebaseapp.com",
          databaseURL: "https://surv-b583e.firebaseio.com",
          storageBucket: "surv-b583e.appspot.com",
          messagingSenderId: "253921945063"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              $rootScope.modal.hide();
              $rootScope.modal2.hide();
          }
          else {
              $scope.modal.show();
          }
      });
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.create', {
    url: '/create',
    views: {
      'menuContent': {
        templateUrl: 'templates/create.html',
        controller: 'NewCtrl'
      }
    }
  })

      .state('app.page2', {
          url: '/page2',
      views: {
        'menuContent': {
            templateUrl: 'templates/page2.html',
            controller: 'NewCtrl'
        }
      }
    })
      .state('app.page3', {
          url: '/page3',
      views: {
        'menuContent': {
            templateUrl: 'templates/page3.html',
            controller: 'NewCtrl'
        }
      }
      })
      .state('app.page4', {
          url: '/page4',
          views: {
              'menuContent': {
                  templateUrl: 'templates/page4.html',
                  controller: 'NewCtrl'
              }
          }
      })
      .state('app.page5', {
          url: '/page5',
          views: {
              'menuContent': {
                  templateUrl: 'templates/page5.html',
                  controller: 'NewCtrl'
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/create');
});
