### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

<!-- - React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) (This is referring to Angular) -->
- React is a modern, efficient answer to complex UI applications
<!-- - React is a full stack framework for modern web applications -->
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 "Smart" components are data passed through props that have not been modified, also known as pure. "Dumb" components are like smart except that have been changed.


 //Googled Answer

 "Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
 In contrast, this function is impure because it changes its own input"
 ** https://reactjs.org/docs/components-and-props.html (very useful read!)

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 The command "yarn add" installs the yarn package which is an extension to Javascript. I'm not sure what file will always be automatically updated...

package.json

 //Googled Answer
Yarn is a package manager that uses NPM registry at its backend. Yarn creates a yarn.lock file, which automatically updates when dependencies are being installed/updated.

#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

  1. Missing "extends from Component"
  2. Recipes is missing []
  3. Listing of recipes should be under render, before return.

    import React, { Component } from 'react';

    class Recipes extends from Component {
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}    
        }
      }

      render() {
        let recipes = this.state.recipes.map(function(recipe){
          return(
            <li key={recipe.name}>{recipe.name}</li>
          )
        })
        return (

          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
Button, text form, ...

File, reset, radio, submit

 //Googled Answer
Input field, submit button, reset button

 #### 6. What happens when we call setState()?

 //Your Answer
We are passing through data to modify the state of the prop.

 //Googled Answer
"setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses." https://reactjs.org/docs/react-component.html#setstate

 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
Props and state are both arguments being passed through. Props cannot be changed, opposed to state which can.

Prop passes data and state stores data.
State is an object. Props is also an object that can pass through an arguument.

 //Googled Answer
 State is similar to props, but it is private and fully controlled by the component.


#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

To be honest, I was (and still am) quite lost with React. I don't think I have grasped the logic of Javascript just yet so taking on React was rough. I know that React is an extention of Javascript, but I felt like it was a bit more complicated since there was a little more to the syntax. I paired with two very strong students who had their Javascript down. They were very helpful in terms of explaining, but both had their own logic and it was a little confusing trying to understand both.


#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
