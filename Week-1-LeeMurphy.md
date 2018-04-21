### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  //Your List

  There are basically two types of scope, Global & Local. The deeper the scope reaches within a function is when it is given a new name of scope, called lexical or block. There can be endless degrees of locality or scope. Binding is created when you create a new scope by declaring a new function. The block is able to see its own local scope and the global scope that it is surrounded by. The let & const variable declaration keeps that variable viewable only to the scope that it lives in. The var variable declaration is able to be seen throughout the program. When using the arrow function notation, if the body is a single expression, rather than a block in braces, that expression will be returned from the function. The place where a computer stores a programs function calls is called the call stack. The call stack uses the computers memory in order to complete this operation. You can write multiple argument parameters and only call 1 argument and the others parameters will be ignored. If you have multiple arguments and only 1 parameter the arguments will be undefined. This can cause problems so you must be careful to have exact parameters=arguments or make sure to address them by setting default values. Each call is accessing a specific instance of that call and is a closure. It is good practice to write functions that can be used multiple times. There are pure functions that do not rely on any out side code and will return the same value if passed the same arguments. Non pure functions rely on code outside of itself to determine its output value. These outside code is called side effects.



*Not exactly understanding how the closure below is working*

  function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10


#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

// your answer

I think linters are valuable because they can help you keep your code clean and detect potential bugs.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

  //Your Answer

  Local scope is the level where the code is written. The local scope can access code up in its global scope but not access code down in its own internal lexical/block scope. Global scope is accessible from all local scopes below it.


  //Googled Answer


#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

I like the online coursework from the multiple resources available like freecodecamp. I believe the repetition and laid out approach give it a different dynamic of learning while combined with the fast paced bootcamp is very beneficial and valuable.

  //Your Answer

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
    git status
- git commit -m "commit"
    git status
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?
The return returns a value to be used in a program and console.log() prints a value to the console to be read.

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer

Dynamically typed programming languages does not need to be compiled like statically typed programming languages.


// Googled Answer

dynamically-typed languages perform type checking at runtime, while statically typed languages perform type checking at compile time
