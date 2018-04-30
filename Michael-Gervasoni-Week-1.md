### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:
It's a bit wordy, I'm going to read it more in my spare time.
  //Your List


#### 2. What is a linter for? Do you think they are useful? Explain why/why not.
// your answer
Linters can help with simple syntax errors in your code.
They can be useful but they can also be detrimental, it will essentially predict what needs to be corrected based on given arguments, but, in some cases, the predictions will be wrong. As we've seen in our console, most of the errors the console logs aren't the actual errors but the error could be a simple comma, curly bracket, etc. that is before the error that is logged. I prefer debugging my code myself.


#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

  //Your Answer
  local scope contains variables, constants, functions, objects, etc. that are not accessible on the global scope. For example, the function:
  function example(){
    var localvar = "something"
  }
  has a var called "localvar" that is only accessible locally, to the function "example". If the programmer/user/console attempts to access localvar the result will be 'undefined'.
  Global variables, in contrast, are accessible in the "global" scope which means they can be accessed by the user, programmer, other functions, etc.


  //Googled Answer
Global variables are declared outside any function, and they can be accessed (used) on any function in the program. Local variables are declared inside a function, and can be used only inside that function. It is possible to have local variables with the same name in different functions.

#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

  It always helps to reinforce the basic concepts, but overall the first 5 or 6 lessons were quite easy. I think if I continue further I'll find a section that helps me understand a certain topic better.

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?

console.log will display the argument ( i.e., console.log(x) will display whatever is stored in the variable x) but it will not change anything or store any values
return will store a value and/or change a value so it can be used in later code:
ie, "return x" at the end of a code can output a code to a variable a function is assigned to or will assign a new value x to a global variable.


#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
I can't remember. I remember that languages like C aren't dynamically typed, maybe because they require a compiler and javascript doesn't require a compiler.


// Googled Answer
I was wrong. It means you don't have to define the variables (int, str, etc) when you declare them. Languages like C still aren't dynamically typed, but it's because you have to define variable types when you define a variable.. javascript understands something in ""'s is a string, a number is a number, something in [] is an array, etc.
From google:
Statically typed programming languages do type checking (the process of verifying and enforcing the constraints of types) at compile-time as opposed to run-time. Dynamically typed programming languages do type checking at run-time as opposed to Compile-time
