# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
A: A method is a built in way to do something. There are certain methods that only do certain things when you use them. Such as .map for mapping through an array, similar to a for loop.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

A: Ruby classes can inherit values from another class by using the < symbol. Such as class Animals < Pets. In order to use the inherited values, super must be used.


[Googled Answer]: Inheritance is a relation between two classes. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer: rspec is the way to test your code. To run the test, you have to use rspec in the terminal. Such as, bundle exec rspec

//Googled Answer: RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications. Even though it has a very rich and powerful DSL (domain-specific language), at its core it is a simple tool which you can start using rather quickly


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer:

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
A: This is string interpolation. It is used to input values into a string.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer: I feel ok about it. I don't feel super comfortable with it, but I know what it accomplishes. The cons are that you can see any potential mistakes. The cons are that it can take some time to write, sometimes longer than the actual code its testing.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

Instance variables are called with @. such as @animal. These are very useful because you can use them globally, as opposed to locally. (I was wrong before looking it up on google)

//Googled Answer: An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.
