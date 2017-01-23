<html>
<head>
<meta charset="utf-8">
<title>
</title>
<link href="https://fonts.googleapis.com/css?family=Pinyon+Script" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Parisienne" rel="stylesheet">
<style>
</style>
</head>
<body id="preview">
<h1><a id="Survey_Git_0"></a>Survey_Git</h1>

<h3><a id="Introduction_1"></a>Introduction</h3>

<p>Survey_Git is an academic project. It is a simple Survey application. It contains following things.</p>

<ul>
<li>Survey App
<ul>
<li>It uses Ionic Framework</li>
<li>Contains fix number of Questions.</li>
<li>Questions are not simply hard coded in HTML file.</li>
<li>Questions come from XML file.</li>
<li>Different type of questions. (Matrix, Radio Button, Text Editor, Dropdown)</li>
<li>Responsive</li>
</ul>

</li>
<li>Data Storing:

<ul>
<li>The answer will be stored in the cloud.</li>
<li>Firebase is being used as Cloud.</li>
<li>At the end of the Survey, one can see his or her Answers retrieved from Firebase</li>
</ul>

<hr />
<h4><a id="___Powered_By____17"></a><strong><em>Powered By:&ndash;</em></strong></h4>

<a href="https://firebase.google.com"><img src="https://media.licdn.com/media/AAEAAQAAAAAAAANfAAAAJDhiY2VjZmQ5LTk1OWMtNDU0MS04YjNmLTZjZGNmNTliNTY3OA.png" alt="" /></a>
 <a href="http://ionicframework.com"><img src="http://www.thesiliconvalleyinstitute.com/img/home/partners/logo7.png" alt="" /></a> <a href="https://www.javascript.com/">
 <img src="https://simpledevcode.files.wordpress.com/2014/06/logo_javascript-e1416863188233.png?w=50&amp;h=50&amp;crop=1" alt="" />
 </a> <a href="https://www.w3.org/TR/html5/"><img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/005/064/307/0290792.png" alt="" />
 </a>
 </li>
</ul>

<h3><a id="Tech_19"></a>Tech</h3>

<p>Survey_Git uses following Technologies to make it work better and steady:</p>

<ul>
<li><a href="http://ionicframework.com">Ionic Framework</a> - It has a really easy structure to work on and use in Web or Mobile App.</li>
<li><a href="http://nodejs.org">node.js</a> - Would be used to install Ionic.</li>
<li><a href="https://github.com/abdmob/x2js">X2JS</a> - X2JS stands for XML to JSON. It is already included in Project. But the link has been shared for your information.</li>
<li><a href="https://bower.io/">bower</a> - If and only if you think you can modify at very upper level on your own.</li>
<li><a href="https://developer.android.com/studio/index.html">Android Studio</a> - For the Emulator. For testing your App.</li>
</ul>

<h3><a id="Installation_29"></a>Installation</h3>

<p>Survey_Git requires <a href="https://nodejs.org/">Node.js</a>
to continue installation of Ionic.<br />
<em>Once you are done with the installation of Node.js, Follow the below steps</em>
</p>
<pre><code>- Open Your command Prompt and type the following commands.
</code></pre>

<h4><a id="1_Install_Ionic_36"></a>1. Install Ionic</h4>
<p><a href="http://ionicframework.com/getting-started/">More Information on Ionic</a></p>
<pre><code class="language-sh">    $ npm install -g cordova ionic
</code></pre>
<h4><a id="2_Create_Account_on_Firebase_43"></a>2. Create Account on Firebase</h4>
<p><a href="https://firebase.google.com/docs/">More Information on Firebase</a></p>
<h4><a id="3_Follow_below_steps_to_make_Firebase_work_46"></a>3. Follow below steps to make Firebase work.</h4>
<ul>
<li>
<p>Login into Firebase and open your <a href="https://console.firebase.google.com/">Console</a></p>
</li>
<li>
<p>Select your Project</p>
</li>
<li>
<p>Choose the last option if you want to continue in Web App.<br /> <a href="#"><img src="https://inducesmile.com/wp-content/uploads/2016/06/firebasetwo.jpg" alt="" /></a></p>
</li>
<li>
<p>You will be popped up with the following screen. <em><strong>It is sample Code. You will have your own code snippet</strong></em>.</p>
</li>
</ul>
<pre><code class="language-JavaScript">&lt;script src=<span class="hljs-string">"https://www.gstatic.com/firebasejs/3.6.1/firebase.js"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="actionscript">
  <span class="hljs-comment">// Initialize Firebase</span>
  <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> Replace with your project's customized code snippet</span>
  <span class="hljs-keyword">var</span> config = {
    apiKey: <span class="hljs-string">"&lt;API_KEY&gt;"</span>,
    authDomain: <span class="hljs-string">"&lt;PROJECT_ID&gt;.firebaseapp.com"</span>,
    databaseURL: <span class="hljs-string">"https://&lt;DATABASE_NAME&gt;.firebaseio.com"</span>,
    storageBucket: <span class="hljs-string">"&lt;BUCKET&gt;.appspot.com"</span>,
    messagingSenderId: <span class="hljs-string">"&lt;SENDER_ID&gt;"</span>,
  };
  firebase.initializeApp(config);
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</span></code></pre>
<p>Paste your code snippet in the <strong>app.js</strong> file.</p>
<p><em><strong>Hurray! There You Go! Start taking Surveys</strong></em></p>
<p style="text-align: center; font-weight: bold; font-size: 17px;"><em><i>About Developer</i></em></p>
<hr/>
<div class="Chirag-photo">
<table style="border:none">
<tbody>
<tr>
<td>
<img class="img-responsive" style="text-align: center; float: left;" title="Chirag Mendapara" src="Pic.JPG" alt="Chirag Mendapara" width="156" height="186" />
</td>
<td style="padding-left:20px">
<font style="font-family: 'Pinyon Script', cursive;font-size:30px">Chirag Mendapara</font>
<br/><br/>
<font> Hello Everyone, My name is Chirag Mendapara. I come from India.<br/> I live currently in Germany. <br/>
I am currently studying Applied Computer Science in SRH Hochschule Heidelberg. <br/>This is my Academic Project developed under the supervision of Mr. Christoph Hahn.<br/>
You can rate this project and comment on it as well.<br/> Appreciation will be warmly welcomed! <br/>Say Hello to <a style="text-decoration:none" href="mailto:chiragmendapara.cm@gmail.com?Subject=Hello Chirag"> Me </a>
</font>
</td>
</tr>
</tbody></table>
</div>
<hr/>
<center><p style="text-align:center">You can also find me on:-</p></center>
<a href="https://github.com/Mendzyy"><img style="height: 25px !important; width: 25px; vertical-align: middle; border: 0;" title="Github" src="https://raw.githubusercontent.com/steppinlo/steppinlo.github.io/master/imgs/github.png" alt="Github" /></a>
<a href="https://www.linkedin.com/in/chirag-mendapara-25a33a118/"><img style="height: 25px !important; width: 25px; vertical-align: middle; border: 0;" title="Linkedin" src="http://xtechsk.ca/wp-content/uploads/2014/07/linkedin.png" alt="Linkedin" /></a>
<a href="https://www.facebook.com/Mendzyy"><img style="width: 25px; vertical-align: middle; height: 25px !important; border: 0;" title="Facebook" src="http://www.androidapksfree.com/wp-content/uploads/wordpress-popular-posts/1095-featured-25x25.png" alt="Facebook" /></a>
<a href="https://www.instagram.com/chiragmendapara/"><img style="width: 25px; height: 25px !important; vertical-align: middle; border: 0;" title="Instagram" src="http://www.androidapksfree.com/wp-content/uploads/wordpress-popular-posts/3662-featured-25x25.png" alt="Instagram" /></a>
<div style="text-align: center; padding: 20px 0 0 0; font-size: 12px;">&copy; 2016 All Rights Reserved | Chirag Mendapara</div>
</body>
</html>
