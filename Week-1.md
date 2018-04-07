### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  //Your List
  - bindings with let and const are local to the block that they are declared in so if declared in a loop, it only works in there
  - function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope
  - console.log outputs all of the values it is given
  - function that references bindings from local scopes around it is called a closure
  - function that calls itself is called recursive, inefficient alternative to looping
  - Writing .length after a string expression will give us the length of that string


#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

// your answer
I'm not sure what a linter is for...but after googling it...
Linting is can automatically find dumb mistakes so you can fix them without thinking. It makes your code break less and less confusing.
I think it's useful because it seems like a spell check for your codes to ensure it works properly and cleans it out.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

  //Your Answer
  Global scope can be accessed anywhere in the code. Local scope can be accessed within the function it's nested in.

  //Googled Answer
  Variables defined outside a function are […] called global variables.
  Variables defined within a function are local variables.

  var global = 10  <==global

  function fun() {
    var local = 5  <==local
  }


#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

  //Your Answer
I find freecodecamp easy to use and understand.

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit -m "completed week-1.md"
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?
- console.log is only used for debugging/informative purposes
- return is used for returning values from a function

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
I think that a "Dynamically Typed" language means that Javascript is a language that is continuously changing. The way we write Javascript may be different in a few years from today. I think that this is what it meant, but I am unsure as I have a hard time remembering the presentation.

// Googled Answer
In a dynamically typed language, every variable name is (unless it is null) bound only to an object.
Names are bound to objects at execution time by means of assignment statements, and it is possible to bind a name to objects of different types during the execution of the program. The idea of dynamic types is that makes code flexible, i.e. if you’ve got a function which returns a number, you don’t actually have to return a number, you can return anything you like.
