### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

<!-- - React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) - false -->
- React is a modern, efficient answer to complex UI applications
<!-- - React is a full stack framework for modern web applications - false it's a front-end framework -->
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 Smart is dynamic and is a state that we can change.  dumb is a property that remains static.


 //Googled Answer


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 yarn is installing and it needs homebrew which is automatically updated.


 //Googled Answer
node modules, package.json and yarn.lock
** node modules never get added to git. yarn adds the node modules
#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

<!-- //extend component
//add array brackets
//move the map function under render but not the return -->

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
      ]
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
submit

 //Googled Answer
password
submit
reset

 #### 6. What happens when we call setState()?

 //Your Answer
it sets the current state

 //Googled Answer
setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
Prop is the component that will not change that state refers to.  State is the current state of your component after the changes to property.  I think of it as the United States government is the property and it's always there however, ever US President gives a "State of the Union"  describing what the government is trying to accomplish during their term.

 //Googled Answer
 There are two types of data that control a component: props and state. Props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.



#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
I found building tic-tac-toe to be very difficult.  I wasn't fully prepared and I should have done more research on React outside of class -- knowing this I will devout more time to study.  I thought I had a good relationship with my partner but he didn't fully understand our code, which means, I didn't include and/or walk him through the code.  I need to slow down before moving on to the next task.

#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

I don't recall going over the rules of React in class

Answer:
never update State directly, always use setState()
never alter the DOM directly, always operate on a value in state
only call setState once per method or render cycle
state is for values that change, Props is for values that don't, constants should be set outside the component

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
