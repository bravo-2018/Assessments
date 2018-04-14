### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
String, numbers, boolean, null, object  

  //Googled Answer
+ Undefined. All of the above are primitive except object.

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
I predict that it will console log "inside".

Then, past the code in your console and explain why you were right/wrong.
My prediction was wrong. It consoles "undefined" because nothing is actually getting passed through logIt(). The var text = 'inside' is not getting called and neither is var text = 'ouside'.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  I don't really remember going over this in class... But after reading Google, I think it's a way of writing JavaScript; an extention of some sort

  //Googled Answer
  "JSON, or JavaScript Object Notation, is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML. Squarespace uses JSON to store and organize site content created with the CMS."
#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  I also don't remember much of this at all. I believe it is a function that as a wider scope; can access outside of it's own function with limitations.  

  //Googled Answer
A closure is the combination of a function and the lexical environment within which that function was declared.
 The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.
#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is used to assign values
  == comparison if two are equal
  === comparison if two are equal but absolute (exactly equal)

  //Googled Answer
  Abstract Equality Comparison (==)
  Strict Equality Comparison (===): used 
