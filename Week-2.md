### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

  numbers
  strings
  booleans
  undefined
  null
  NAN

 I can't remember what primitive means ....

  //Googled Answer
  boolean
  null
  undefined
  number
  string
  symbol
  object

primitive means that they are incapable of being changed.
All of the above are primitive except object.
side note - An array is an object.


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
You should get undefined because var text = 'outside' is not being passed through the function as an argument and var text = 'inside' is after the console.log which means the 'text' inside console.log has not yet been defined.  

Then, past the code in your console and explain why you were right/wrong.

I got undefined because....


//To print "outside" you could do this....

var text = "outside"
function logIt(x) {
    console.log(x)
}
logIt(text)

//To print "inside" you could do this.....

function logIt() {
    var text = "inside"
    console.log(text)
}

logIt()



#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

  Honestly I can't remember what JSON is so I'll need to look back at my notes....


  //Googled Answer

 When the browser interacts with a server everything must be sent and received via text only.  So JSON is basically a way for your browser to convert and use javascript when it is sent or received.  

  JSON = JavaScript Object Notation

  from w3schools

  "When exchanging data between a browser and a server, the data can only be text.
JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.
This way we can work with the data as JavaScript objects, with no complicated parsing and translations."
and
  "Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.
JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects:
JSON.parse()
So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object."


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

  A closure is private information within an object that can only be accessed by knowing a certain path to the value.  I think you can recognize this when you see a return in an object?


  //Googled Answer

  from MDN
  " A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created."   

  and

  "Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods."

  "function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);"

So size12, size14, and size16 are closures because they use the same function but pass different values through."



#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  The = sign assigns a value to a holder such as var shoes = 7.  
  The == sign compares two values
  The === sign compares two exact values (I'm still not quite sure how == and === differ.)


  //Googled Answer

  from MDN website
  "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison."
