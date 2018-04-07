Week 1 Assessment
These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

A: I thought the chapter was a little difficult to understand. They used different words and terminology that I have not heard before, so it was hard to make connections to what was being said to what I know.

2. What is a linter for? Do you think they are useful? Explain why/why not.

A: A linter is used for checking your code for errors or bugs. Yes, I think it is very useful because it would find errors or bugs that you might have missed otherwise.

3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

A: Global scope variables are available all throughout your code. Local scope variables are only available within the function the variables are nested in.
Example:

var animal = "duck" (global)

function animals (){
    var animal = "dog" (local)
}
console.log(animal) = duck (Because the log is outside of the function).

Googled Answer: Variables declared within a JavaScript function, become LOCAL to the function.
Local variables have local scope: They can only be accessed within the function.

A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.

4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.
Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

A: The exercises were not too difficult, but any practive is good practice, so I'm glad I did them. But I found the extra exercises that were pushed to github a lot more helpful.

5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:
git add .
git commit
git push -u origin master

6. List some differences between return and console.log in Javascript. When would you use one vs the other?

A: console.log is only visible to the user and is displayed in the console. Return is used to run a function. Such as: return myFunction(). In other words, return executes the function, while console.log just displays the results.

7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

A: This means that JS will attempt to run the program, even if there are some minor "errors". It will sometimes assume what the coder is trying to do. This can lead to some problems if JS runs the code and the results are not expected.

Googled Answer: A dynamically-typed language (like JavaScript or Python) can compile even if it contains type errors that would otherwise prevent the script from running properly
