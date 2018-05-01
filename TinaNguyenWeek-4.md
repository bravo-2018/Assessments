# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method in Ruby is equivalent to a function in Javascript; it is also a function. It is sometimes used as a 'set and get'. Other than syntax I am not quite sure what differences there are.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]
Inheritance in Ruby is when a parent class passes on it's information to a child class (sometimes multiple). For example, a parent class can be fruit. That parent class can then pass on it's information to a child of class of apple. Apple will then have fruit's traits.

[Googled Answer]
Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass.n


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
Rspec is Ruby code written specifically to test. The test is written first (what to test), then actual code is written after; reverse of what we are used to.


//Googled Answer
RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications. Even though it has a very rich and powerful DSL (domain-specific language), at its core it is a simple tool which you can start using rather quickly

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
The only thing I can think of are variables in a local scope; not an instance.

//Googled Answer
I was able to find anything specific for this question online or on our curriculum. Definitely need to go over this in class.

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

It is going to print "I am printing a random number 1022". I think we call it a hash? It is used to call a variable inside the string without it having to be an instance.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
To be honest, I wasn't able to do much testing. I was stuck on the previous day's challenge and was more concerned to understanding and finishing that. However, I did look around at others who were working on the testing and it looked like a hell of a lot of code. A lot of people mentioned that it was quite a bit to write for some testing. I'd say the pros to it would be that testing any code is beneficial; check for errors, able to pin point error, and overall more efficient code. Cons would be that it is quite lengthy and laborious.


//Googled Answer
Pros: best industry standards, high speed of development, vibrant RoR community. Cons: slow runtime speed and performance, lack of flexibility, high cost of wrong decisions.

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance in a variable that is set with an @ in front. The difference is that it has a gloal scope; it can be called anywhere and is not limited.

//Googled Answer
An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.

It was a nice little review
