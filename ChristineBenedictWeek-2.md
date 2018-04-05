### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

        string, number, null, boolean are primitives
        object, array is technically considered an object still

  //Googled Answer

        Six data types that are primitives:
            Boolean
            Null
            Undefined
            Number
            String
            Symbol (new in ECMAScript 6)
        and Object


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

      I was wrong because the function does not return anything so it simply prints "undefined" in the console. I was thinking in terms of scope and not just looking for the return of the function. If you were to call text after this line of code, it would show 'outside' not 'inside' because of global vs. local scope.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

      JSON is "J-something S-something" Object Notation. I feel like the JS could stand for JavaScript but that seems too easy. It relates to javascript objects due to it using the same style of syntax to store and access information. It looks very similar except everything is stored as strings. Apparently the console doesn't care too much about that since it was able to access the information in the same way when we tried accessing a specific piece of information using normal js dot notation in the example we used in class.

      Dangit, I was right about the JS part....

  //Googled Answer

      In computing, JavaScript Object Notation or JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format used for asynchronous browser–server communication, including as a replacement for XML in some AJAX-style systems.

      JSON is a language-independent data format. It was derived from JavaScript, but as of 2017 many programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

      I don't remember the exact definition. I know its used in conjunction with functions their code blocks.

  //Googled Answer
  
      A closure is the combination of a function and the lexical environment within which that function was declared.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer

      = is used to define a value, == is used to check for equality, and === is used to strictly check equality (must match EXACTLY and no longer allows the language to almost autocorrect to what it thinks you mean (i.e. "8" vs 8 would not be === equal but would be == equal))

  //Googled Answer

      The basic assignment operator is equal (=), which assigns the value of its right operand to its left operand.

      JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison.
