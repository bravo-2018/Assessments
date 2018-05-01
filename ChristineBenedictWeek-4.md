# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
  A method is a function run on an object or class. It is similar to functions in JS in the fact that you can use similar dot notation to call it.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]
  It means that a child class will inherit all of the attributes and methods from its parent class but will add on some of its own that are unique to its specific subclass. It is still able to access all the code and even the initialization of the parent class.

[Googled Answer]


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
  rspec is a method for testing Ruby code that allows you to create an additional file with the suffix spec that runs tests on the file designated in order to ensure that the output of the file is what you expect it to be. It has its own specific syntax to allow you to do this. The general  process is to write a failing test in the rspec file first and then create the code that allows you to pass the test that you wrote.

//Googled Answer


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
has_many, has_one, belongs_to are all non-inheritance relationships

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?
```ruby
x = 1022
puts "I am printing a random number #{x}"
```

It is called string interpolation. It is allowing you to read bits of Ruby code inside a string.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
Testing right now seems kind of backwards. Well, using testing as it is supposed to be used anyway. I think it is because I'm still new enough to coding that I don't know how I am going to solve each piece of the puzzle yet. I know the testing is supposed to lead you towards how to solve each problem by showing you what you're expecting to take in and put out from each section of code. But it's difficult dealing with the naming conventions and also now exactly knowing which specific variable etc. you need to check for the output. I also feel like I can write a better test if I know what piece is going to change, the before and after states and which function is going to make the adjustment.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
And instance variable is able to be used anywhere inside a class. It's different from a local variable because a local variable will be scoped within a function even a one that is actually a method inside a class.

//Googled Answer

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.

I like the idea from poigniant Ruby to try reading Ruby code out loud because a lot of time how it sounds is very close to reality of what it is doing. You can use underscores in place of commas if you need to make long numbers more readable. Learned a little bit about the double colon method to use instance methods.
