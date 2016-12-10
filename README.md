
<!DOCTYPE html><html><head><meta charset="utf-8"><title>Untitled Document.md</title><style></style></head><body id="preview">
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
<li>Different typ of questions. (Matrix, Radio Button, Text Editor, Dropdown)</li>
<li>Responsive</li>
</ul>
</li>
<li>Data Storing:
<ul>
<li>Answer will be stored in cloud.</li>
<li>Firebase is being used as Cloud.</li>
<li>At the end of the Survey, one can see his or her Answers retrived from Firebase</li>
</ul>
<hr>
<h4><a id="___Powered_By____17"></a><strong><em>Powered By:–</em></strong></h4>
<a href="http://ionicframework.com"><img src="https://media.licdn.com/media/AAEAAQAAAAAAAANfAAAAJDhiY2VjZmQ5LTk1OWMtNDU0MS04YjNmLTZjZGNmNTliNTY3OA.png" alt=""></a>          <a href="https://firebase.google.com"><img src="http://www.thesiliconvalleyinstitute.com/img/home/partners/logo7.png" alt=""></a></li>
</ul>
<h3><a id="Tech_19"></a>Tech</h3>
<p>Survey_Git uses following Technologies to make it work better and steady:</p>
<ul>
<li>[Ionic Framework] - It has really easy structure to work on and use in Web or Mobile App.</li>
<li><a href="http://nodejs.org">node.js</a> - Would be used to install Ionic.</li>
<li>[X2JS] - X2JS stands for XML to JSON. This JavaScript File will be used in this App.</li>
<li>[bower] - If and only if you think you can modify it on your own.</li>
<li>[Android Studio] - For the Emulator. For testing your App.</li>
</ul>
<h3><a id="Installation_29"></a>Installation</h3>
<p>Survey_Git requires <a href="https://nodejs.org/">Node.js</a> to continue installation of Ionic.<br>
<em>Once you are done with the installtion of Node.js, Follow the below steps</em></p>
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
<p>Choose the last option if you want to continue in Web App.<br>
<a href="#"><img src="https://inducesmile.com/wp-content/uploads/2016/06/firebasetwo.jpg" alt=""></a></p>
</li>
<li>
<p>You will be popped up with the following screen. It is sample Code. <em><strong>You will have your own code snippet</strong></em>.</p>
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
<ul>
<li>Add the following JavaScript in your Index.html file.</li>
</ul>
<pre><code class="language-sh">&lt;script src=<span class="hljs-string">"https://www.gstatic.com/firebasejs/3.6.1/firebase-app.js"</span>&gt;&lt;/script&gt;
&lt;script src=<span class="hljs-string">"https://www.gstatic.com/firebasejs/3.6.1/firebase-auth.js"</span>&gt;&lt;/script&gt;
&lt;script src=<span class="hljs-string">"https://www.gstatic.com/firebasejs/3.6.1/firebase-database.js"</span>&gt;&lt;/script&gt;
</code></pre>
<ul>
<li></li>
</ul>

</body>
</html>