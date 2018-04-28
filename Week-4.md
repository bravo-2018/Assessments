# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method is a function in Ruby.  It defines (def) an action sometimes based on a condition and sometimes used as a "getter and setter" and saves it into a variable. This method, just like a function in javascript, can be called on in your class.

I'm not sure of the differences (method in Ruby, function in JavaScript) beside syntax and I think a function must either pass another function as an argument or return something.  I don't think this is true of a method Ruby.  You can use a method to set something but not necessarily do anything with it?


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]

Inheritance means that a parent class can pass information on to it's child class.  For example an Animal class could be the parent of a Dog class.  This dog class can take in all the functionality and methods as the parent class (by calling Super) and then add it's own methods.  You connect the two in Ruby by putting a < sign.  So Animal class < Dog class.  

[Googled Answer]
from launchschools.com  "Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass."

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
Provides us the "english" language for Behavior Driven Development.  
A gem that we can use to write tests

1. Determine the behavior to implement
2. Write a test that the code must pass in one file
3. Code the program in another file
4. Run the test
5. Keep debugging until your test passes (green)

//Googled Answer

the rspec website has a lot of videos that are helpful..

http://rspec.info/





#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

I'm not sure about this one.  Maybe this....

has many
has a
contains




//Googled Answer

Hmm.  Definitely confused about this question and will need to ask for help when we review this assessment.  I tried googling "non-inheritance relationships between Ruby objects and couldn't really find anything."

I also looked back at the notes on Ruby objects in our curriculum and couldn't really decipher what it means to have a non-inheritance relationship.



#### 5. What do we call the #{} convention used below? What is it accomplishing?

String Interpolation
```ruby
x = 1022
puts "I am printing a random number #{x}"

this will print "I am printing a random number 1022."
This syntax allows us to insert variables into strings.  It's the same as if we were concatenating in Javascript doing this.....
"I am printing a random number " + "x".  
```

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

I find it hard to write the tests first and then code.  I found myself coding first and then creating the test.  Obviously this way doesn't make sense because if you write the code first, you could just write the test to allow the code to pass.

I can see how testing could be extremely useful if you are working on a longer project with multiple programmers.  Each file contains a test for a  portion of the code.  This means that if something doesn't pass the test, it's potentially easier to find the problem since you know which portion of the code is not working.  Also, this keeps you on track with your task and prevents you from getting to deep into some other functionality that might not be as high on your priority list.




//Googled Answer

This is a nice website that gives brief ideas on some pros and cons of BDD

https://www.verypossible.com/blog/the-pros-and-cons-of-behavior-driven-development


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

An instance variable is a variable that is created one time with certain conditions.  It's dfferent from a normal, local variable because nothing is saved in the variable.  It's an accessor not a mutator - unless you add '?'


//Googled Answer

from rubyist.net  
"An instance variable has a name beginning with @, and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables. From outside the object, instance variables cannot be altered or even observed (i.e., ruby's instance variables are never public) except by whatever methods are explicitly provided by the programmer. As with globals, instance variables have the nil value until they are initialized."

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.

I tried two of the above links both tutorials, one interactive, one informational.   This was a nice review and most of the stuff we learned in class so it felt good to go over it.  One thing popped up that I hadn't seen before and still don't really understand it even with the explanation given......



"if __FILE__ == $0
__FILE__ is the magic variable that contains the name of the current file. $0 is the name of the file used to start the program. This check says “If this is the main file being used…” This allows a file to be used as a library, and not to execute code in that context, but if the file is being used as an executable, then execute that code."
