### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Boolean, Number, String, Undefined, Null, *Array*, *Function*,  (primitives)
  Object, *Class*,


  //Googled Answer
  Boolean. Null   Undefined.  Number. String.  *Symbol*. <--primitives
  Object.

  (I forgot symbol and included function and array as a primitive and class as a non-primitive data-type)

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
'outside'

Then, past the code in your console and explain why you were right/wrong.
Undefined. I was wrong.
It doesn't display "inside" because the variable is declared after the console.log (it would display "inside" if the two lines inside the function were swapped)
"outside" doesn't seem to display because the text var is redefined in the function. If var text = 'inside' is removed, "outside" will log.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  Javascript Object Notation
  It's the syntax/ notation for javascript objects


  //Googled Answer
  JSON: JavaScript Object Notation.

JSON is a syntax for storing and exchanging data.

JSON is text, written with JavaScript object notation.

if you have data in a javascript object, you can convert the object into JSON, and send it to a server:


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  Stumped me

  //Googled Answer
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state. In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.

The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = assigns a data type to a varaible (ie. var a = 5 makes a variable a with the number 5 stored in it)
  == checks if two things are equal in value
  === checks if two things are equal in value and data type.. that they are exactly equal.

  //Googled Answer
