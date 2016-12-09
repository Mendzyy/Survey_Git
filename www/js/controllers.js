angular.module('starter.controllers', ['ngSanitize'])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


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

  })

    .controller('NewCtrl', function ($scope, $state, $stateParams, $http, $sce, $ionicPopup) {
        var fname = null;
        var lname = null;
        var age = null;
        var gender = null;
        var country = null;
        var date = null;
        var p2_m1 = null;
        var p2_m2 = null;
        var p2_m3 = null;
        var p2_m4 = null;
        var p2_m5 = null;
        var p2_m6 = null;
        var p2_m7 = null;
        var p2_m8 = null;
        var p3_m1 = null;
        var p3_m2 = null;
        var p3_m3 = null;
        var p3_m4 = null;
        var p3_m5 = null;
        var p3_m6 = null;
        var p3_m7 = null;
        var p3_m8 = null;
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


            //Matrix Table Radio Button Structure


            // Matrix Table Radio Button Structure 1 //Page2
            $scope.json_mat0_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][0]['r1']['__cdata']);
            $scope.json_mat0_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][0]['r2']['__cdata']);
            $scope.json_mat0_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][0]['r3']['__cdata']);
            $scope.json_mat0_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][0]['r4']['__cdata']);
            $scope.json_mat0_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][0]['r5']['__cdata']);

            // Matrix Table Radio Button Structure 2
            $scope.json_mat1_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][1]['r1']['__cdata']);
            $scope.json_mat1_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][1]['r2']['__cdata']);
            $scope.json_mat1_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][1]['r3']['__cdata']);
            $scope.json_mat1_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][1]['r4']['__cdata']);
            $scope.json_mat1_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][1]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 3
            $scope.json_mat2_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][2]['r1']['__cdata']);
            $scope.json_mat2_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][2]['r2']['__cdata']);
            $scope.json_mat2_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][2]['r3']['__cdata']);
            $scope.json_mat2_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][2]['r4']['__cdata']);
            $scope.json_mat2_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][2]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 4
            $scope.json_mat3_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][3]['r1']['__cdata']);
            $scope.json_mat3_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][3]['r2']['__cdata']);
            $scope.json_mat3_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][3]['r3']['__cdata']);
            $scope.json_mat3_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][3]['r4']['__cdata']);
            $scope.json_mat3_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][3]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 5
            $scope.json_mat4_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][4]['r1']['__cdata']);
            $scope.json_mat4_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][4]['r2']['__cdata']);
            $scope.json_mat4_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][4]['r3']['__cdata']);
            $scope.json_mat4_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][4]['r4']['__cdata']);
            $scope.json_mat4_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][4]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 6
            $scope.json_mat5_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][5]['r1']['__cdata']);
            $scope.json_mat5_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][5]['r2']['__cdata']);
            $scope.json_mat5_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][5]['r3']['__cdata']);
            $scope.json_mat5_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][5]['r4']['__cdata']);
            $scope.json_mat5_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][5]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 7
            $scope.json_mat6_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][6]['r1']['__cdata']);
            $scope.json_mat6_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][6]['r2']['__cdata']);
            $scope.json_mat6_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][6]['r3']['__cdata']);
            $scope.json_mat6_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][6]['r4']['__cdata']);
            $scope.json_mat6_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][6]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 8
            $scope.json_mat7_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][7]['r1']['__cdata']);
            $scope.json_mat7_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][7]['r2']['__cdata']);
            $scope.json_mat7_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][7]['r3']['__cdata']);
            $scope.json_mat7_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][7]['r4']['__cdata']);
            $scope.json_mat7_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][0]['Structure'][7]['r5']['__cdata']);


            ///////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////// Matrix Table Radio Button Structure 1 //Page3
            //////////////////////////////////////////////////////////////////////////////////
            $scope.json_2_mat0_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][0]['r1']['__cdata']);
            $scope.json_2_mat0_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][0]['r2']['__cdata']);
            $scope.json_2_mat0_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][0]['r3']['__cdata']);
            $scope.json_2_mat0_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][0]['r4']['__cdata']);
            $scope.json_2_mat0_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][0]['r5']['__cdata']);

            // Matrix Table Radio Button Structure 2
            $scope.json_2_mat1_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][1]['r1']['__cdata']);
            $scope.json_2_mat1_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][1]['r2']['__cdata']);
            $scope.json_2_mat1_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][1]['r3']['__cdata']);
            $scope.json_2_mat1_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][1]['r4']['__cdata']);
            $scope.json_2_mat1_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][1]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 3
            $scope.json_2_mat2_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][2]['r1']['__cdata']);
            $scope.json_2_mat2_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][2]['r2']['__cdata']);
            $scope.json_2_mat2_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][2]['r3']['__cdata']);
            $scope.json_2_mat2_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][2]['r4']['__cdata']);
            $scope.json_2_mat2_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][2]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 4
            $scope.json_2_mat3_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][3]['r1']['__cdata']);
            $scope.json_2_mat3_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][3]['r2']['__cdata']);
            $scope.json_2_mat3_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][3]['r3']['__cdata']);
            $scope.json_2_mat3_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][3]['r4']['__cdata']);
            $scope.json_2_mat3_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][3]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 5
            $scope.json_2_mat4_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][4]['r1']['__cdata']);
            $scope.json_2_mat4_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][4]['r2']['__cdata']);
            $scope.json_2_mat4_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][4]['r3']['__cdata']);
            $scope.json_2_mat4_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][4]['r4']['__cdata']);
            $scope.json_2_mat4_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][4]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 6
            $scope.json_2_mat5_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][5]['r1']['__cdata']);
            $scope.json_2_mat5_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][5]['r2']['__cdata']);
            $scope.json_2_mat5_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][5]['r3']['__cdata']);
            $scope.json_2_mat5_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][5]['r4']['__cdata']);
            $scope.json_2_mat5_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][5]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 7
            $scope.json_2_mat6_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][6]['r1']['__cdata']);
            $scope.json_2_mat6_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][6]['r2']['__cdata']);
            $scope.json_2_mat6_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][6]['r3']['__cdata']);
            $scope.json_2_mat6_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][6]['r4']['__cdata']);
            $scope.json_2_mat6_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][6]['r5']['__cdata']);

            //Matrix Table Radio Button Structure 8
            $scope.json_2_mat7_r1 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][7]['r1']['__cdata']);
            $scope.json_2_mat7_r2 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][7]['r2']['__cdata']);
            $scope.json_2_mat7_r3 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][7]['r3']['__cdata']);
            $scope.json_2_mat7_r4 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][7]['r4']['__cdata']);
            $scope.json_2_mat7_r5 = $sce.trustAsHtml(jsonData['Survey']['RadiosForMatrix'][1]['Structure'][7]['r5']['__cdata']);

            //Matrix Table //Questions Page 2

           $scope.json_q7_s1 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement1']['__cdata']);
           $scope.json_q7_s2 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement2']['__cdata']);
           $scope.json_q7_s3 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement3']['__cdata']);
           $scope.json_q7_s4 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement4']['__cdata']);
           $scope.json_q7_s5 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement5']['__cdata']);
           $scope.json_q7_s6 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement6']['__cdata']);
           $scope.json_q7_s7 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement7']['__cdata']);
           $scope.json_q7_s8 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionBody']['Statement8']['__cdata']);


            //Matrix Table //Questions Page 3

            $scope.json_q8_s1 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement1']['__cdata']);
            $scope.json_q8_s2 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement2']['__cdata']);
            $scope.json_q8_s3 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement3']['__cdata']);
            $scope.json_q8_s4 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement4']['__cdata']);
            $scope.json_q8_s5 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement5']['__cdata']);
            $scope.json_q8_s6 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement6']['__cdata']);
            $scope.json_q8_s7 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement7']['__cdata']);
            $scope.json_q8_s8 = $sce.trustAsHtml(jsonData['Survey']['Question'][7]['QuestionBody']['Statement8']['__cdata']);


           //matrix Table // Answers

           $scope.json_q7_op1 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionAnswer']['Scale1']['__cdata']);
           $scope.json_q7_op2 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionAnswer']['Scale2']['__cdata']);
           $scope.json_q7_op3 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionAnswer']['Scale3']['__cdata']);
           $scope.json_q7_op4 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionAnswer']['Scale4']['__cdata']);
           $scope.json_q7_op5 = $sce.trustAsHtml(jsonData['Survey']['Question'][6]['QuestionAnswer']['Scale5']['__cdata']);


            // Page 4 Question 1 Radio


            $scope.json_q9 = $sce.trustAsHtml(jsonData['Survey']['Question'][8]['QuestionBody']['__cdata']);
            $scope.json_q9_op1 = $sce.trustAsHtml(jsonData['Survey']['Question'][8]['QuestionAnswer']['Option1']['__cdata']);
            $scope.json_q9_op2 = $sce.trustAsHtml(jsonData['Survey']['Question'][8]['QuestionAnswer']['Option2']['__cdata']);
            $scope.json_q9_op3 = $sce.trustAsHtml(jsonData['Survey']['Question'][8]['QuestionAnswer']['Option3']['__cdata']);
            $scope.json_q9_op4 = $sce.trustAsHtml(jsonData['Survey']['Question'][8]['QuestionAnswer']['Option4']['__cdata']);
            $scope.json_q9_op5 = $sce.trustAsHtml(jsonData['Survey']['Question'][8]['QuestionAnswer']['Option5']['__cdata']);



           // Next and Bak Button Setup  of page 1




           $scope.Next1 = function () {
               if
               (document.getElementById('fname').value == null || document.getElementById('fname').value == "") {
                   var confirmPopup5 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Enter Your First Name'
                   });
                   exit;
               }
               if (document.getElementById('surname').value == null || document.getElementById('surname').value == "") {
                   var confirmPopup4 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Enter Your Last Name'
                   });
                   exit;
               }
               if (document.getElementById('age').value == null || document.getElementById('age').value == "") {
                   var confirmPopup3 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Enter Your Age'
                   });
                   exit;
               }
               if (document.getElementById('age').value < 1 || document.getElementById('age').value > 100) {
                   var confirmPopup3_1 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'The age must be a number between 1 and 100'
                   });
                   exit;
               }
               if (document.getElementById('q4-o1').checked == false && document.getElementById('q4-o2').checked == false) {
                   var confirmPopup2 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select Your Gender'
                   });
                   exit;
               }
               if (document.getElementById('date_date').value == null || document.getElementById('date_date').value == "") {
                   var confirmPopup2_date = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select Your Date'
                   });
                   exit;
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
                   for (var num = 1; num < 2; num++) {
                       if (document.getElementById('q4-o' + num).checked == true) {
                           if (num == 1) {
                               $scope.gender = "Male";
                           }
                           else if (num == 2) {
                               $scope.gender = "Female";

                           }
                       }

                   }
                   country = document.getElementById('hdCntry').value;
                   date = document.getElementById('date_date').value;
                   $state.go('app.page2');
               }
           };


            $scope.Back1 = function () {
               $state.go('app.create')
           };

           // Next and Bak Button Setup  of page 2

           $scope.Next2 = function () {

               // Page 2 Question 1
               if (document.getElementById('mat_1_1').checked == false && document.getElementById('mat_1_2').checked == false
                   && document.getElementById('mat_1_3').checked == false && document.getElementById('mat_1_4').checked == false && document.getElementById('mat_1_5').checked == false) {
                   var confirmPopup_mat_1 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in First row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_1_' + num).checked == true) {
                           p2_m1 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m1);
                       }

                   }
               }

               // Page 2 Question 2
               if (document.getElementById('mat_2_1').checked == false && document.getElementById('mat_2_2').checked == false
                   && document.getElementById('mat_2_3').checked == false && document.getElementById('mat_2_4').checked == false && document.getElementById('mat_2_5').checked == false) {
                   var confirmPopup_mat_2 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Second row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_2_' + num).checked == true) {
                           p2_m2 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m2);
                       }

                   }
               }

               // Page 2 Question 3
               if (document.getElementById('mat_3_1').checked == false && document.getElementById('mat_3_2').checked == false
                   && document.getElementById('mat_3_3').checked == false && document.getElementById('mat_3_4').checked == false && document.getElementById('mat_3_5').checked == false) {
                   var confirmPopup_mat_3 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Third row'
                   });
                   exit;
               }
               else {

                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_3_' + num).checked == true) {
                           p2_m3 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m3);
                       }

                   }
               }

               // Page 2 Question 4

               if (document.getElementById('mat_4_1').checked == false && document.getElementById('mat_4_2').checked == false
                   && document.getElementById('mat_4_3').checked == false && document.getElementById('mat_4_4').checked == false && document.getElementById('mat_4_5').checked == false) {
                   var confirmPopup_mat_4 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Fourth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_4_' + num).checked == true) {
                           p2_m4 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m4);
                       }

                   }
               }

               // Page 2 Question 5

               if (document.getElementById('mat_5_1').checked == false && document.getElementById('mat_5_2').checked == false
                   && document.getElementById('mat_5_3').checked == false && document.getElementById('mat_5_4').checked == false && document.getElementById('mat_5_5').checked == false) {
                   var confirmPopup_mat_5 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Fifth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_5_' + num).checked == true) {
                           p2_m5 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m5);
                       }

                   }
               }

               // Page 2 Question 6

               if (document.getElementById('mat_6_1').checked == false && document.getElementById('mat_6_2').checked == false
                   && document.getElementById('mat_6_3').checked == false && document.getElementById('mat_6_4').checked == false && document.getElementById('mat_6_5').checked == false) {
                   var confirmPopup_mat_6 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Sixth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_6_' + num).checked == true) {
                           p2_m6 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m6);
                       }

                   }
               }

               // Page 2 Question 7

               if (document.getElementById('mat_7_1').checked == false && document.getElementById('mat_7_2').checked == false
                   && document.getElementById('mat_7_3').checked == false && document.getElementById('mat_7_4').checked == false && document.getElementById('mat_7_5').checked == false) {
                   var confirmPopup_mat_7 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Seventh row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_7_' + num).checked == true) {
                           p2_m7 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m7);
                       }

                   }
               }

               // Page 2 Question 8

               if (document.getElementById('mat_8_1').checked == false && document.getElementById('mat_8_2').checked == false
                   && document.getElementById('mat_8_3').checked == false && document.getElementById('mat_8_4').checked == false && document.getElementById('mat_8_5').checked == false) {
                   var confirmPopup_mat_8 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Eighth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat_8_' + num).checked == true) {
                           p2_m8 = document.getElementById('json_q7_op' + num).children[0].textContent;
                           console.log(p2_m8);
                       }

                   }
                   $state.go('app.page3');
               }


           };
           $scope.Back2 = function () {
               $state.go('app.page2')
           };


            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////// Next and Bak Button Setup  of page 3//////////////////////////////////////////
            ///////////////////////////////// Next and Bak Button Setup  of page 3/////////////////////////////////////////
            ///////////////////////////////// Next and Bak Button Setup  of page 3/////////////////////////////////////////
            ///////////////////////////////// Next and Bak Button Setup  of page 3/////////////////////////////////////////
            ///////////////////////////////// Next and Bak Button Setup  of page 3/////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////


           $scope.Next3 = function () {

               // Page 3 Question 1
               if (document.getElementById('mat2_1_1').checked == false && document.getElementById('mat2_1_2').checked == false
                   && document.getElementById('mat2_1_3').checked == false && document.getElementById('mat2_1_4').checked == false && document.getElementById('mat2_1_5').checked == false) {
                   var confirmPopup_mat2_1 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in First row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_1_' + num).checked == true) {
                           p3_m1 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
               }

               // Page 2 Question 2
               if (document.getElementById('mat2_2_1').checked == false && document.getElementById('mat2_2_2').checked == false
                   && document.getElementById('mat2_2_3').checked == false && document.getElementById('mat2_2_4').checked == false && document.getElementById('mat2_2_5').checked == false) {
                   var confirmPopup_mat2_2 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Second row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_2_' + num).checked == true) {
                           p3_m2 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
               }

               // Page 2 Question 3
               if (document.getElementById('mat2_3_1').checked == false && document.getElementById('mat2_3_2').checked == false
                   && document.getElementById('mat2_3_3').checked == false && document.getElementById('mat2_3_4').checked == false && document.getElementById('mat2_3_5').checked == false) {
                   var confirmPopup_mat2_3 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Third row'
                   });
                   exit;
               }
               else {

                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_3_' + num).checked == true) {
                           p3_m3 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
               }

               // Page 2 Question 4

               if (document.getElementById('mat2_4_1').checked == false && document.getElementById('mat2_4_2').checked == false
                   && document.getElementById('mat2_4_3').checked == false && document.getElementById('mat2_4_4').checked == false && document.getElementById('mat2_4_5').checked == false) {
                   var confirmPopup_mat2_4 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Fourth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_4_' + num).checked == true) {
                           p3_m4 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
               }

               // Page 2 Question 5

               if (document.getElementById('mat2_5_1').checked == false && document.getElementById('mat2_5_2').checked == false
                   && document.getElementById('mat2_5_3').checked == false && document.getElementById('mat2_5_4').checked == false && document.getElementById('mat2_5_5').checked == false) {
                   var confirmPopup_mat2_5 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Fifth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_5_' + num).checked == true) {
                           p3_m5 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
               }

               // Page 2 Question 6

               if (document.getElementById('mat2_6_1').checked == false && document.getElementById('mat2_6_2').checked == false
                   && document.getElementById('mat2_6_3').checked == false && document.getElementById('mat2_6_4').checked == false && document.getElementById('mat2_6_5').checked == false) {
                   var confirmPopup_mat2_6 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Sixth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_6_' + num).checked == true) {
                           p3_m6 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
               }

               // Page 2 Question 7

               if (document.getElementById('mat2_7_1').checked == false && document.getElementById('mat2_7_2').checked == false
                   && document.getElementById('mat2_7_3').checked == false && document.getElementById('mat2_7_4').checked == false && document.getElementById('mat2_7_5').checked == false) {
                   var confirmPopup_mat2_7 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Seventh row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_7_' + num).checked == true) {
                           p3_m7 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
               }

               // Page 2 Question 8

               if (document.getElementById('mat2_8_1').checked == false && document.getElementById('mat2_8_2').checked == false
                   && document.getElementById('mat2_8_3').checked == false && document.getElementById('mat2_8_4').checked == false && document.getElementById('mat2_8_5').checked == false) {
                   var confirmPopup_mat2_8 = $ionicPopup.alert({
                       title: '<p>Error</p>',
                       template: 'Please Select option in Eighth row'
                   });
                   exit;
               }
               else {
                   for (var num = 1; num < 6; num++) {
                       if (document.getElementById('mat2_8_' + num).checked == true) {
                           p3_m8 = document.getElementById('json_q7_op' + num).children[0].textContent;

                       }

                   }
                   $state.go('app.page4');
               }

           };

           $scope.Back3 = function () {
               $state.go('app.page3')
           };
           // Next and Bak Button Setup  of page 4

           $scope.Next4 = function () {


           };
           $scope.Back4 = function () {
               $state.go('app.page4')
           };
            var id = ('x' + Math.floor(Math.random() * 100 + 1) + 'Surv' + Math.floor(Math.random() * 50 + 1) + Math.floor(Math.random() * 1000 + 1));
           //Submit button on last page (page 5)
           $scope.Submit = function () {
               $scope.Next1();
               $scope.Next2();
               $scope.Next3();
               console.log('It comes in submit function');
               console.log('Datas are');
               console.log(fname);
               console.log(lname);
               console.log(age);
               console.log($scope.gender);
               console.log(p2_m2);
               console.log(p2_m5);
               console.log(p3_m2);
               console.log(p3_m6);

               var database = firebase.database();
               alert('noch einmal and id is =' + id);
               database.ref('responses/' + id).set(
                   {
                       First_Name: fname,
                       Last_Name: lname,
                       Age: age,
                       Gender: $scope.gender,
                       Country: country,
                       Date: date,
                       p2m1: p2_m1,
                       p2m2: p2_m2,
                       p2m3: p2_m3,
                       p2m4: p2_m4,
                       p2m5: p2_m5,
                       p2m6: p2_m6,
                       p2m7: p2_m7,
                       p2m8: p2_m8,
                       p3m1: p3_m1,
                       p3m2: p3_m2,
                       p3m3: p3_m3,
                       p3m4: p3_m4,
                       p3m5: p3_m5,
                       p3m6: p3_m6,
                       p3m7: p3_m7,
                       p3m8: p3_m8
                   }
               );
               $state.go('app.page5');
           };


            $scope.ShowData = function () {
                var div = document.getElementById('showdata');
                var data = firebase.database();
                var fname_r = null;
                var lname_r = null;
                var gender_r = null;
                var date_r = null;
                var p2m1_r = null;
                var p2m2_r = null;
                var p2m3_r = null;
                var p3m1_r = null;
                var p3m2_r = null;
                var p3m3_r = null;
                var p2m4_r = null;
                data.ref('responses/x16Surv25543').once('value').then(function (snapshot) {
                    fname_r = snapshot.val().First_Name;
                    lname_r = snapshot.val().Last_Name;
                    age_r = snapshot.val().Age;
                    gender_r = snapshot.val().Gender;
                    var cntry_r = snapshot.val().Country;
                    date_r = snapshot.val().Date;
                    p2m1_r = snapshot.val().p2m1;
                    p2m2_r = snapshot.val().p2m2;
                    p2m3_r = snapshot.val().p2m3;
                    p2m4_r = snapshot.val().p2m4;
                    var p2m5_r = snapshot.val().p2m5;
                    var p2m6_r = snapshot.val().p2m6;
                    var p2m7_r = snapshot.val().p2m7;
                    var p2m8_r = snapshot.val().p2m8;
                    p3m1_r = snapshot.val().p3m1;
                    p3m2_r = snapshot.val().p3m2;
                    p3m3_r = snapshot.val().p3m3;
                    var p3m4_r = snapshot.val().p3m4;
                    var p3m5_r = snapshot.val().p3m5;
                    var p3m6_r = snapshot.val().p3m6;
                    var p3m7_r = snapshot.val().p3m7;
                    var p3m8_r = snapshot.val().p3m8;
                });
                console.log(fname_r);
                console.log(lname_r);
                div.innerHTML = 'First Name: - ' + fname_r + '<br />' + 'Last Name: - ' + lname_r + '<br />';
            }
       });
    });
