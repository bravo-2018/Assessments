# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
A method in Ruby is similar to functions in JavaScript. It is defined as "def" in Ruby.

//Googled Answer
Ruby methods are very similar to functions in any other programming language. Ruby methods are used to bundle one or more repeatable statements into a single unit.
Method names should begin with a lowercase letter. Before we can use a method, we must first define it with the reserved word 'def'. After the 'def' we give our method a name. At the end of our method definition, we use the reserved word 'end' to denote its completion. Methods should be defined before calling them, otherwise Ruby will raise an exception for undefined method invoking.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]
When a class inherits from another class in Ruby, it means that the child inherits properties from the parent. We use "super" for the children to inherit properties from the parents.

[Googled Answer]
Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass. Object inheritance is where an object inherits the properties and methods of a parent object. This means the child object will automatically have those methods, without having to implement them.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is a test program that we can run on Ruby files to see if the code works. We use rspec on Ruby to ensure the code doesn't break and allows us to fix it later on. You should write a test on a spec file before writing your actual Ruby code.

//Googled Answer
RSpec is very useful on the Unit Test level, testing the finer details and the business logic of your app. That means testing the internals like models and controllers of your app.
The general process consists of building an app from the opposite perspective and learn a completely new API to write code for your code. RSpec requires your test files to have a specific suffix like "_spec" to understand which files to run. So you will need to put a file like yourfirsttest_spec.rb in your spec directory. Run rspec + file name in terminal after starting rspec with "irb".


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
In some cases, the super-class can hold a non-inheritance relationship between ruby objects.

//Googled Answer
I was unable to find this answer on Google.

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
//Your Answer
I think the #{} is a filler function? It accomplishes the variable inside to be replaced with another variable/object it is instructed to place.

//Googled Answer
It's referred to as string interpolation. In Ruby, string interpolation refers to the ability of double-quoted strings to execute Ruby code and replace portions of that strings (denoted by #{ ... }) with the evaluation of that Ruby code.
It is the most common way to inject data (usually the value of a variable, but it can be the evaluation of any Ruby code) into the middle of a string.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I feel "okay" about testing at the moment. After the first day of doing tests, the structure and syntax makes a little bit more sense than doing it the first time around. The biggest issue I have is the syntax still as sometimes I guess what would work, but it doesn't. I can usually see and figure out my errors on the terminal. The pros I see in implementing it on my own code is that it will help me know in the future what I was trying to code by reading the tests. The con I see in it is that it takes additional time and is a bit tedious.

//Googled Answer
The Pros and Cons of Behavior-Driven (BDD)
BDD is a software development method that focuses on creating tests using concrete, real-life examples. These examples use English-like sentences to express the behavior and the expected outcomes.

Pros: Keeps the focus on the end user and their needs as it's easy for engineers to get bogged down in implementation details and architecture choices. By writing a high-level list of specifications, you'll provide a description of what your application actually does in simple terms that every member of your team can understand. BDD also helps you see the behavior you want from the software, and it also aids in brainstorming for identifying future capabilities and the creation of a backlog.

Cons: The primary "disadvantages" of BDD are two-fold. Communications between the user and the developer are essential so if the user is not available, it will be difficult to work past ambiguities and questions generated by the user stories. The second disadvantage is the need to dedicate a team of developers to work with the client. The short response time required for the process means high levels of availability.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable in Ruby is a global status retriever. It is different from a normal or local variable because in whichever class the instance variable is called, the status is retrieved.

//Googled Answer
An instance variable has a name beginning with @, and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables. From outside the object, instance variables cannot be altered or even observed. Instance variables live in, and are visible everywhere in the object’s scope.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.
