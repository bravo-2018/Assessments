# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

It is function within a class.    Within Ruby, function must be declared within a classs whereas it can done independent of class in JavaScript.

A method in Ruby is a set of expressions that returns a value. With methods, one can organize their code into subroutines that can be easily invoked from other areas of their program. Other languages sometimes refer to this as a function. A method may be defined as a part of a class or separately.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]

Parent and child relation can be defined by "is a" relation.  A child class will inherit all properties of parents.    


[Googled Answer]
nheritance is a relation between two classes. We know that all cats are mammals, and all mammals are animals. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own. If all mammals breathe, then all cats breathe. In Ruby, a class can only inherit from a single other class. Some other languages support multiple inheritance, a feature that allows classes to inherit features from multiple classes, but Ruby doesn't support this

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec provide behavior driven test cases for Ruby application.  it is a script based language.

//Googled Answer

It is BDT for ruby


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
Containment relationship .  

//Googled Answer
Has many
If a class has many of another, it will have an array of the second class in its initialize method. To add song instances to that array, use an instance method called “add_<element_name>”on the initial class (the one that has many of the other). For this example, we are looking at the relationship between directors and films. Typically, a director will have multiple films.

Belongs to
If one class belongs to another, it will have the name of the class that it belongs to listed under attr_accessor. Then set the writer method to equal an instance of the class it belongs to. Typically, a film will have just one director and therefore belongs to that director.

Has many of each other
This relationship is slightly more complicated to express in code, but draws on the previous two relationships. Both of the previous programatic language has to be built into both classes. For this example, we are looking at the relationship between films and actors. Typically, actors have many films that they are in, and films have many actors in them.

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"

it will print out below lines to console
I am printing a random number 1022

```

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I am confident that I can make a good use of rspec for BDT for ruby applications.  Also by developing proper test cases, I think I can achieve better functioning applications.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
Instance variable is class attiribute.   Normal and local variables are mostly used for block scope

//Googled Answer

An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.
