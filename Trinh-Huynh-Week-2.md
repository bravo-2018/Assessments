### Week 2 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer
  Primitive Types:
  - Null
  - Undefined
  - Boolean
  - Number
  - String
  - Symbol
  
  Non-Primitive Types:
  - Array
  - Object
  
  //Googled Answer
  Note:  Symbol is new in ECMAScript 6

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
- It logs "undefined"
- Hoisting issue!
    The above code is read by the machine as:
        var text = 'outside';
        function logIt() {      // machine takes a peek at variables that exist inside the function's scope.
            var text;           // but it doesn't store the value of these variables until the line where it's given a value.
            console.log(text);  // so if we use that variable before it's assigned a value, its value would be undefined.
            text - 'inside';    
        }

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON: JavaScript Object Notation.
  JSON is a syntax for storing and exchanging data.
  JSON is text, written with JavaScript object notation
  
  //Googled Answer
  When exchanging data between a browser and a server, the data can only be text.
  JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
  We can also convert any JSON received from the server into JavaScript objects.
  This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  Scoping???
  
  //Googled Answer
  A closure is the combination of a function and the lexical environment within which that function was declared.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is an assignment operator
  == is equality operator, used to compare the values between two variables or primitive types
  === is an identity operator, used to compare values AND type
  
  //Googled Answer
  JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., === ) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. == ) converts the operands to the same type before making the comparison.
