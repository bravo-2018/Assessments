### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  //Your List
Eloquent Javascript helped me understand the arrow function.  I like how shortens code and makes te code easier to read.  Another thing I liked was the embedded console that allowed me to run code on the page.


#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

// your answer
Linter is a plug-in that reviews your code and gives tips on writing better code.  I got an error when downloading and I haven't gotten a chance to use it since.  I've been using the Mac Minis in class.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer. 

  //Your Answer
  Global code can be accessed throught the entire progra whereas, local program can only be accessed within it's scope.

var global = 'everywhere'

myFunc (){
  var local = 'here'
}

  
  //Googled Answer
JavaScript there are two types of scopeLocal scope
Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.


#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises. 

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource. 

  //Your Answer
  I prepped for bootcamp with Free Code Camp. :)  I settled with Free Code Camp after trying a few different prep courses.  I like how they progress and give encouraging mesages when complete.  I've listened to Quincy Larson on some podcasts and I like his vibe.  I also follow his article suggestions on Medium.

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git ___________commit - m "message"_____
- git _push____________ -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other? 
The difference between return and console.log is return will return an value and console.log will display in the console only.  I would use return to actually build my program and use console.log to test.
#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
we don't have to declare the types

// Googled Answer
All variables are dynamic (both in type and existance), and even the code is dynamic. You can create new variables at runtime, and the type of variables is determined at runtime. You can create new functions at any time, or replace existing functions. When used in a browser, code is added when more script files are loaded, and you can load more files any time you like.

Nowadays JavaScript is compiled in many implementations, and static code and static types are generated in the background. However, the behaviour is still dynamic, the compiler only generates static types when it finds that the dynamic aspects are not used for a specific object.


