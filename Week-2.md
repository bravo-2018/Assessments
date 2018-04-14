### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

 A: Data Types: String, number, boolean, object, null, undefined. I think I'm missing a couple...


Googled Answer:
Boolean: Primitive
Null: Primitive
Undefined: Primitive
Number: Primitive
String: Primitive
Symbol.
Object.


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: The console will show "inside", because the log is local to the function.


Then, past the code in your console and explain why you were right/wrong.
My first guess was wrong. Not sure why. Looks like the log just logs the first instance of "text", which is outside the function.


#### 3. What is JSON? How does it relate to javascript objects?

  A: JSON stands for "JavaScript Object Notation" and it relates to JS objects by using a "." to access the object.


Googled Answer: The JSON syntax is a subset of the JavaScript syntax.

JSON Syntax Rules
JSON syntax is derived from JavaScript object notation syntax:

Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays


#### 4. Describe a closure, what is it good for and how do you recognize one?

A: I wasn't sure what a closure was. I had to google it. But once I googled it, I remembered what it is referring to.


Googled Answer: JavaScript variables can belong to the local or global scope.

Global variables can be made local (private) with closures. A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.


#### 5. What's the difference between =, ==, and === in JavaScript?

A: = is used to assign something. Such as var x = x
== is used to compare two things. Such as a == a
=== is used to comapare exactly the same thing. Such as 2 === 2


Googled Answer:
By using = you assign a value to something.
By using == you check if something is equal to something else. This is not strict.
By using === you check if something is equal to something else. This is also strict.
