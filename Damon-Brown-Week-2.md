### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  boolean - primitive
  null - primitive
  undefined - primitive
  number  - primitive
  string - primitive


  //Googled Answer
boolean
null
undefined
number
string
symbol - primitive
object

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: text = inside


Then, past the code in your console and explain why you were right/wrong.
 undefined because we never passed through an argument.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  javascript object

  //Googled Answer
javascript object notation:
When exchanging data between a browser and a server, the data can only be text.

JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

We can also convert any JSON received from the server into JavaScript objects.

This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer local vars - if it's inside a function


  //Googled Answer
  A closure is the combination of a function and the lexical environment within which that function was declared.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= set, == equal, ===absolute equal

  //Googled Answer
  JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison
