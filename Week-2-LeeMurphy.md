### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  string, number, boolean, symbol, ..., ...


  //Googled Answer
  boolean, null, undefined, number, string, symbol, object


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




Then, past the code in your console and explain why you were right/wrong.

From my understanding the console.log is showing up as undefined because of hoisting. The program sees that the var text declaration exists but does not define it. This is why the program calls the var text from the local scope inside the function logIt. But since the console.log is before the declaration in the top to bottom read order it has not yet been defined "inside" thus logging undefined.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

  JSON is Javascript Object Notation. This is how many api's communicate with eachother


  //Googled Answer

JSON is a syntax for storing and exchanging data. JSON is text, written with JavaScript object notation.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

  A closure is a instance of a program function that is created when you make a function call.


  //Googled Answer

  A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer

  = is used to assign a value == is a loose comparison === is a strict comparison


  //Googled Answer

x = y assign to x the value of y
x == y compare and return true if and only if the two have the same value (but not necessarily the same data type,
try to convert them to the same type if possible.
x === y return true if and only if the two are identical and have the same data type.
