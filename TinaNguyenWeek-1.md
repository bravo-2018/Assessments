### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

//Your List
- Call stack can run out of memory resulting in error message
- Recursion is when a function calls itself
- This article makes sense now that we've gone


#### 2. What is a linter for? Do you think they are useful? Explain why/why not.

// I had no idea what JavaScript linters was before I Googled it. Apparently it is a very useful tool that developers use to catch code mistakes and organize for easier readability.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

// Your Answer
Variables in a global scope are available for use and access throughout the whole code, where as items in local scope is limited only to the scope that it is in. In the example below, we are able to access the global scope "var one" and can even reuse it in another function if we wanted. "Var two" cannot be called or reused unless it is inside the function example().

Example)
var one = "object1"

function example() {
  var two = "object2"
}

// Googled Answer
"JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions"-- source: (https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
)

#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts heregi (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

// Yes, it was helpful. Wording is a bit different than what I'm used to hearing in class, but simple exercises were good.

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit -m "Message here"
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?
Console.log prints out the message, while return replaces that value.

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
I can't remember back to the intro of Javascript and couldn't find it on our curriculum. I'm still a little unsure of what it actually means.

// Googled Answer
"Statically typed programming languages do type checking (the process of verifying and enforcing the constraints of types) at compile-time as opposed to run-time.

Dynamically typed programming languages do type checking at run-time as opposed to Compile-time." source: (https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages)
