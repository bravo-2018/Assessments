# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
In ruby, a method is essentially a function. It is defined by:
def myMethod
 #some method stuff
end

Methods can contain arguments or not.
They are quite similar to functions in javascript.
There are differences in syntax ( end vs {}, etc.)
Also, a Ruby method automatically returns the last line of the method.
Some of the more interesting things I've learned about Ruby methods include using a * to allow a method to have a varying number of arguments/parameters:
def myMethod(* anyNumberOfArguments)
  * anyNumberOfArguments.join(',')
end
(the whitespace after * should be removed)


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.
[Your Answer]
A class that inherits from another class, sometimes called a subclass or child class, means that the subclass takes all the functionality and parameters of the parent class, and can modify the functionality and parameters, as well as add more functionality and parameters.




[Googled Answer]


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is a method of testing in ruby. Writing test in Rspec starts with initalizing rspec and adding the corresponding test directories and files. Test writing has its own syntax with keywords. To run a test we type "rake" in the command prompt / terminal.
//Googled Answer


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
sibling relationships, has_many relationships, and includes_many? relationships
//Googled Answer
not includes_many but
belongs_to_many

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
String interpolation. It allows the value of x to be printed into the string..
#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I don't like testing. I find myself constantly testing my code during writing the code, which is probably more along the lines of debugging the code. I think strong tests are useful, especially in larger projects, and can add an element of protection from mistakes/oversights that can be detrimental much later in the code. They are also useful when refactoring.
I think a good test should be specific to the problem, but broad in the input/arguments (i.e. don't search for a specific word to show that you're on a page, but maybe search for specific features or functionality.)
//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?
An instance variable (labeled with an @ symbol, i.e. @variable), is a variable that corresponds to a instance of a class. Instance variables exists within an entire class (i.e are accessible by any function within the class), whereas local variables are not.
//Your Answer

//Googled Answer

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.
