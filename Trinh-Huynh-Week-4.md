# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
  A method in Ruby is a function that belongs inside an object or a class.  Ruby methods don't always require () appended to the end of the method name like it is always required in JavaScript.  It also doesn't require the word return, since the last line in the method will automatically be returned.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance. 
[Your Answer]
  A class inherits from another class when it extends that class.  The child class will inherit all attributes from the parent class, but has the ability to override these attributes and to have their own attributes that the parent class does not have.  In a way, this makes the child class a more specialized version of the parent class.

[Googled Answer]
https://learnrubythehardway.org/book/ex44.html

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
  rspec is a tool used for behavior driven development in Ruby.  The general process is to write the test for the behavior first, then writing the behavior itself to pass the test.
  
//Googled Answer
http://rspec.info/

#### 4. Name three possible non-inheritance relationships between ruby objects? 

//Your Answer
  mixins, composition, 

//Googled Answer
  http://mjk.space/how-to-avoid-inheritance-in-ruby/

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
It looks like an expression substitution in strings, where you can inject a number into a string.

Ah, found it in ruby's documentations:
http://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/syntax.html#string

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
  I feel comfortable doing testing, but the tests we've used so far seem a bit too simple.  I imagine that given a more complex problem, using tests would be vital to ensuring that all aspects of the problems are met, and these tests would also be a good guide for arriving at the solutions for these problems.  At this point, writing tests for simple objects and simple methods seem a bit tedious, redundant, and time consuming

//Googled Answer
  https://www.testingexcellence.com/pros-cons-test-driven-development/

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
  In Ruby, an instance variable belongs inside the object where it is declared.  It is an attribute of the object, and its name starts with  @
  
//Googled Answer
  http://www.rubyist.net/~slagell/ruby/instancevars.html

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)
Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.

  Why's Poignant Guide is, by far, my favorite book on learning a computer language.  It is nicely condensed and straightforward.  The explanations are humorous and spot on!  Some things I learned from Why include how to use hashes, unless coupled with if, and kernel methods.
