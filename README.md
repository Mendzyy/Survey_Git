# Survey_Git
### Introduction

Survey_Git is an academic project. It is a simple Survey application. It contains following things.

- Survey App
  - It uses Ionic Framework
  - Contains fix number of Questions.
  - Questions are not simply hard coded in HTML file.
  - Questions come from XML file.
  - Different typ of questions. (Matrix, Radio Button, Text Editor, Dropdown)
  - Responsive
- Data Storing:
    - Answer will be stored in cloud.
    - Firebase is being used as Cloud.
    - At the end of the Survey, one can see his or her Answers retrived from Firebase
    - ---------------------------------------------------
    #### ___Powered By:--___
  [![](https://media.licdn.com/media/AAEAAQAAAAAAAANfAAAAJDhiY2VjZmQ5LTk1OWMtNDU0MS04YjNmLTZjZGNmNTliNTY3OA.png)](http://ionicframework.com)          [![](http://www.thesiliconvalleyinstitute.com/img/home/partners/logo7.png)](#)
### Tech

Survey_Git uses following Technologies to make it work better and steady:

* [Ionic Framework] - It has really easy structure to work on and use in Web or Mobile App.
* [node.js] - Would be used to install Ionic.
* [X2JS] - X2JS stands for XML to JSON. This JavaScript File will be used in this App.
* [bower] - If and only if you think you can modify it on your own.
* [Android Studio] - For the Emulator. For testing your App.

### Installation

Survey_Git requires [Node.js](https://nodejs.org/) to continue installation of Ionic.
 *Once you are done with the installtion of Node.js, Follow the below steps*

    - Open Your command Prompt and type the following commands.

  #### 1. Install Ionic
  [More Information on Ionic]

````sh
    $ npm install -g cordova ionic
`````

  #### 2. Create Account on Firebase
  [More Information on Firebase]

  #### 3. Follow below steps to make Firebase work.
- Login into Firebase and open your [Console]
- Select your Project
- Choose the last option if you want to continue in Web App.
 [![](https://inducesmile.com/wp-content/uploads/2016/06/firebasetwo.jpg)](#)

- You will be popped up with the following screen. It is sample Code. *__You will have your own code snippet__*.

````JavaScript
<script src="https://www.gstatic.com/firebasejs/3.6.1/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
</script>
````
- Add the following JavaScript in your Index.html file.
````sh
<script src="https://www.gstatic.com/firebasejs/3.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.6.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.6.1/firebase-database.js"></script>
````


   [node.js]: <http://nodejs.org>
   [AngularJS]: <http://angularjs.org>
   [More Information on Ionic]: <http://ionicframework.com/getting-started/>
   [More Information on firebase]: <https://firebase.google.com/docs/>
   [Console]: <https://console.firebase.google.com/>
 