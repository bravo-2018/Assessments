### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  string, boolean, number, array,

  //Googled Answer
  There are seven data types: boolean, null, undefined, number, string, symbol, and object
  All but, objects are primitives, values that are incapable of being changed.

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:
outside

Then, pass the code in your console and explain why you were right/wrong.
The answer was undefined because nothing was called when console logged. If you call "text" then you would get outside because global vs local scope.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JavaScript something...?

  //Googled Answer
  JSON is JavaScript Object Notation. It is a syntax for storing and exchanging data. It's a text and we can convert any JavaScript object into JSON, and send JSON to the server. It relates to JavaScript objects because it makes it possible to store JavaScript objects as text.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  I think it's the variable in between two curly brackets.

  //Googled Answer
  Closures allow us to write better code. It's an inner function that has access to the outer function's variables.
  You create a closure by adding a function inside another function.
  Closures have access to the outer function’s variable even after the outer function returns:
  The inner function still has access to the outer function’s variables even after the outer function has returned.


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is used to set variables
  == means both values are equivalent to each other, but not exactly the same
  === means the objects are exactly the same


  //Googled Answer
  By using = you assign a value to something.
  By using == you check if something is equal to something else. This is not strict
  By using === you check if something is equal to something else. This is also strict.
  The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal.
