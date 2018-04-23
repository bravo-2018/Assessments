### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  // I like the detailed explanations and examples.  It was easy to follow.  I feel comfortable with using functions in JS.


#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

// From http://www.codereadability.com/what-are-javascript-linters/
Code linting is a way to increase code quality.  Linters like JSLint or JSHint can detect potential bugs, as well as code that is difficult to maintain.  Since linters are automated tools running them doesn't require manual work once they've been set up.  Definitely useful.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer. 

  //Your Answer
  Local scoped variable is limited to a function or a block.  Global scoped variable is accessible to the entire program.
  
  //Googled Answer
  JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.

#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises. 

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource. 

  //I really enjoy freecodecamp and find it useful.  I like how there are many small interactive lessons that I can choose from to target what I want to learn.

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit -m "where this is a message what you updated in a file."
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other? 
  Values that get returned can be used by other functions.  Values that are console.logged are only printed onto the screen for the developer to see.

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
  This means we don't need to specify the type of a variable or the type of the return value by a function.  While this makes JS flexible to write, it also requires careful attention to the the types that get passed in order to prevent semantic errors

// Googled Answer
  Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
