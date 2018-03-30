### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  //Your List


#### 2. What is a linter for? Do you think they are useful? Explain why/why not.

A linter is a program piece that checks your code for errors and makes suggestions about how to improve your syntax or other methods you were using. It is useful for helping to make your code appear cleaner but it can also be a crutch to keep you from learning to code things cleanly yourself, without assistance.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

  //Your Answer
Global scope is when the item can be accessed by any other item in the code. Local scope is when the item is contained within a specific function. It cannot be accessed anywhere outside the function unless you tell the function to specifically return a pathway to access it.

var item = "x"
function newFunc(){
  return item
}

The variable "item" can be accessed from within the function because it is a global variable.

function newFunc(){
  var item = "x"
}
item

This would return undefined since it is used within a function and cannot be accessed from outside that function


  //Googled Answer

  A variable's scope is the range of the script where it is visible. Variables have either global or local scope. A global variable exists only once in a script, and is visible in every function. Modifications to it in one function are permanent and visible to all functions. Unless declared otherwise, all variables in a script are global. Global variables are useful for values that are relatively constant, or that many functions in the script must access, such as a session id.

  A local variable, however, has a limited scope: it exists only within the block that it is declared in. Once that block ends, the variable is destroyed and its values lost. A local variable of the same name declared elsewhere is a different variable. A local variable can even exist multiple times simultaneously, if its block is entered again before it's exited - i.e. a recursive function call. Each call of the function will have a distinct local variable.


#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

  //Your Answer

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git ________________
- git _____________ -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer


// Googled Answer
