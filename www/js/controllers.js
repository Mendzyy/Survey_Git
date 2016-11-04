angular.module('starter.controllers', ['ngSanitize'])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPlatform) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    var config = {
      apiKey: "AIzaSyD0Dv0-BqaLlqyHrLip5JgeOd8waFnJKpc",
      authDomain: "survey-9843c.firebaseapp.com",
      databaseURL: "https://survey-9843c.firebaseio.com",
      storageBucket: "survey-9843c.appspot.com",
      messagingSenderId: "957749496742"
    };
    firebase.initializeApp(config);

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Create the reg modal that we will use later
    $ionicModal.fromTemplateUrl('templates/registration.html', {
      scope: $scope
    }).then(function (modal_2) {
      $scope.modal2 = modal_2;
    });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // Triggered in the login modal to close it
        $scope.modal.hide();
        $scope.loggedIn = true;
      }
      else {
        // Open the login modal
        $scope.modal.show();
        $scope.loggedIn = false;
      }
    });

    $scope.ShowRegister = function () {
      $scope.modal.hide();
      $scope.modal2.show();
      $scope.closeReg = function () {
        $scope.modal2.hide();
      };
    };
    $scope.ShowLog = function () {
      $scope.modal.show();
      $scope.modal2.hide();

    };
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function (username, password) {
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(username, password);
      promise.then(function ($response) {
      });
      promise.catch(function (error) {
        $scope.myErrorReg = error;
      });
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };


    $scope.doReg = function (username, password) {
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(username, password);
      promise.then(function ($response) {
      });
      promise.catch(function (error) {
        $scope.myErrorReg = error;
      });
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('HomeCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];
  })

  .controller('NewCtrl', function ($scope, $stateParams,$http,$sce) {

       $http.get("/data/Questions.xml").success(function (data) {
       var x2js = new X2JS();
       var jsonData = x2js.xml_str2json(data);


           // Descriptive Text

           $scope.pagebreak = $sce.trustAsHtml(jsonData['Survey']['Pagebreak']['main']['__cdata']);

           //Question 1

           $scope.json_q0 = $sce.trustAsHtml(jsonData['Survey']['Question'][0]['QuestionBody']['__cdata']);

           //Question 2

           $scope.json_q1 = $sce.trustAsHtml(jsonData['Survey']['Question'][1]['QuestionAnswer']['__cdata']);

           //Question 3

           $scope.json_q2 = $sce.trustAsHtml(jsonData['Survey']['Question'][2]['QuestionAnswer']['__cdata']);

           //Question 4

           $scope.json_q3 = $sce.trustAsHtml(jsonData['Survey']['Question'][3]['QuestionAnswer']['__cdata']);

           //Question 5

           $scope.json_q4 = $sce.trustAsHtml(jsonData['Survey']['Question'][4]['QuestionBody']['__cdata']);
           $scope.json_q4_op1 = $sce.trustAsHtml(jsonData['Survey']['Question'][4]['QuestionAnswer']['Option1']['__cdata']);
           $scope.json_q4_op2 = $sce.trustAsHtml(jsonData['Survey']['Question'][4]['QuestionAnswer']['Option2']['__cdata']);

           //Date Picker

           $scope.dateValue = new Date();

           //Country Question 6

           $scope.json_q5 = $sce.trustAsHtml(jsonData['Survey']['Question'][5]['QuestionBody']);
           $scope.json_q5_op = $sce.trustAsHtml(jsonData['Survey']['Question'][5]['QuestionAnswer']['Option']['__cdata']);
   });
  });
