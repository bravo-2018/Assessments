### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  //Your List

  1.  This was a great way to review a lot of the concepts that we covered in the last two weeks like scope, arrow functions and closure.
  2.  However, I realized that it's much harder for me to understand javascript when I'm reading about it.  I much prefer to learn it in a lecture and practicing with a partner so I can ask questions.  
  3.  I was thrown off by a few words that I had not heard perviously like..."bindings" and "stack flow."
  4.  I love the way you can click on the code, run it in the browser and even manipulate it if you want.



#### 2. What is a linter for? Do you think they are useful? Explain why/why not.

// your answer

Honestly, I wasn't sure about this term so I had to look it up and found out that it refers to a process or program that checks your source code for errors based on the rules of that language.  Since I'm a beginner, it seems that a linter would be helpful and most articles I read on linting seemed in favor of it.  A couple of articles explained that in can be overwhelming and extremely anal.  I can imagine this might also impede the learning process if everything is being checked for you.  Similar to forgetting how to spell because we have spell checker now.  :-)


#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

  //Your answer
Functional and block scope (local scope of a loop or if statement) are both kinds of local.

 You can not see variables below you when they are nested.  But nested variables can see everything "up" a scope.  
 Global scope means that whatever is declared can be accessed anywhere in the program.
 Whereas local scope refers to something that is declared inside a function or loop for example and can not be accessed outside of that function or loop.  And each time that function or loop is called, a new instance of a that variable is created.   

  //Googled Answer

  from w3schools...

  for local variables....

  "// code here can not use carName

function myFunction() {
    var carName = "Volvo";

    // code here can use carName

}

for global variables...

"var carName = " Volvo";

// code here can use carName

function myFunction() {

    // code here can use carName

}"



#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

I actually did some of these exercises when I was preparing for the bootcamp - about 25 of them - so I started at number 26 which was a good place to get some review on concatenating strings defined in variables.  I do like that the explanations are super short and you immediately get to practice.  This is a good refresher of the things we have learned in these past two weeks.  




#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git ___commit -m "where this is a message what you updated in a file."_______
- git ______push_______ -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?
Console.log "prints" strings, numbers, booleans, etc to the console but only for the programmer to see and usually when a programmer needs to see something that's happening in the background.  For example, when we created the hi low game on day 2, we first created a number generator and then created prompts for the user to guess the number.  When we run the program, the random number is not shown to the programmer unless we use console.log.

Return on the other hand, does "print" things for the user to see.  A return is often used in functions since a function must take in an argument and return something.  Return also stops a function or a loop.  This is good to know because we when console.log inside a function or loop it doesn't stop the function and without a return, we can get stuck inside an infinite loop.   

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
A dynamically typed language basically means that we can assign values to variables and then reassign different values to that same variable later in the program.  
Since reassigning variables is not "illegal" we are not halted in our creation and we must make sure that we don't unintentionally change the value of a variable.  


// Googled Answer
from sitepoint.com

"/* Python code */
my_variable = 10
while my_variable > 0:
        i = foo(my_variable)
        if i < 100:
                my_variable++
        else
                my_varaible = (my_variable + i) / 10 // spelling error intentional

As you can see in the above code, my_varaible is a spelling mistake that the programmer could have very well made. The problem here is that, since Python is dynamically typed, it will not return an error, but instead will create a new variable called my_varaible. So, now we have two variables: my_variable and my_varaible. This obviously is a serious problem; some would suggest that forced variable declaration is an important requirement in any programming language."
