angular.module('starter.controllers', ['ngSanitize'])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPlatform) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
      var config = {
          apiKey: "AIzaSyBcwqMKs0Rdcg0KVJfWavy0Q4D-LhEtIc8",
          authDomain: "surv-b583e.firebaseapp.com",
          databaseURL: "https://surv-b583e.firebaseio.com",
          storageBucket: "surv-b583e.appspot.com",
          messagingSenderId: "253921945063"
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

    .controller('NewCtrl', function ($scope, $state, $stateParams, $http, $sce, $ionicPopup) {

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
           $scope.json_q5 = $sce.trustAsHtml(jsonData['Survey']['Question'][5]['QuestionBody']['__cdata']);
           $scope.dateValue = new Date();

           //Country Question 6
           $scope.countries = ['India', 'Germany', 'Australia', 'Spain'];
           $scope.json_q6 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['__cdata']);


           // Next and Bak Button Setup  of page 1


           var fname = null;
           var lname = null;
           var age = null;
           var gender = null;
           var country = null;

           $scope.Next1 = function () {
               if
               (document.getElementById('fname').value == null || document.getElementById('fname').value == "") {
                   var confirmPopup5 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Enter Your First Name'
                   });
               }
               if (document.getElementById('surname').value == null || document.getElementById('surname').value == "") {
                   var confirmPopup4 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Enter Your Last Name'
                   });

               }
               if (document.getElementById('age').value == null || document.getElementById('age').value == "") {
                   var confirmPopup3 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Enter Your Age'
                   });
               }
               if (document.getElementById('q4-o1').cheked == false && document.getElementById('q4-o2').checked == false) {
                   var confirmPopup2 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select Your Gender'
                   });
               }
               if (document.getElementById('hdCntry').value == null || document.getElementById('hdCntry').value == "") {


                   var confirmPopup = $ionicPopup.alert({
                       title: 'Consume Ice Cream',
                       template: 'Please Select Your Country'
                   });
               }
               else {
                   fname = document.getElementById('fname').value;
                   lname = document.getElementById('surname').value;
                   age = document.getElementById('age').value;
                   var gender_op1 = document.getElementById('q4-o1');
                   var gender_op2 = document.getElementById('q4-o2');
                   if (gender_op1.checked == true) {
                       gender = 'Male';
                   }
                   else if (gender_op2.checked == true) {
                       gender = 'Female';
                   }
                   country = document.getElementById('hdCntry').value;
                   $state.go('app.page2');
               }
           };
           $scope.Back1 = function () {
               $state.go('app.create')
           };

           // Next and Bak Button Setup  of page 2

           $scope.Next2 = function () {
               $state.go('app.page3');

           };
           $scope.Back2 = function () {
               $state.go('app.page2')
           };

           // Next and Bak Button Setup  of page 3

           $scope.Next3 = function () {
               $state.go('app.page4');

           };
           $scope.Back3 = function () {
               $state.go('app.page3')
           };
           // Next and Bak Button Setup  of page 4

           $scope.Next4 = function () {
               $state.go('app.page5');

           };
           $scope.Back4 = function () {
               $state.go('app.page4')
           };

           //Submit button on last page (page 5)
           $scope.Submit = function () {

               var id = ('x' + Math.floor(Math.random() * 100 + 1) + 'Surv' + Math.floor(Math.random() * 50 + 1) + Math.floor(Math.random() * 1000 + 1));
               var database = firebase.database();
               database.ref('responses/' + id).set(
                   {
                       First_Name: fname,
                       Last_Name: lname,
                       Age: age,
                       Gender: gender,
                       Country: country
                   }
               );
           };
       });
    });
