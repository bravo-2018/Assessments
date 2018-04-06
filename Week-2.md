### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  String, number, boolean, null, array,object

  //Googled Answer
  string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

//var text = 'outside';
var aa = "outside"
function logIt(){
  //  var text = 'inside'
    console.log(aa);
    console.log("T#EST")
    var aa = "inside";
};

logIt();

```

first Guess:
'outside'


Then, past the code in your console and explain why you were right/wrong.

My answer is wrong as output was "undefined"..   There is varialbe name conflict
with same name "text"


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
   I am not sure as we have not covered about JSON yet..

  //Googled Answer
  JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  block.. which can be recongnized by {}


  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.Feb 2, 2013

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  =  assigment operator
  == comparison
  === strong comparison

  //Googled Answer
