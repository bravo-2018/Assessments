### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- (Angular) React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a full stack (front end) framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

//Your Answer
"smart" components are minimal in their composition of syntax.

"dumb" components contain more code and are the children of smart components.

//Googled Answer
"Smart" components are less reusable outside a single application or set of applications because they are aware of application-level state. They are also known as container components and they keep track of state and care about how the app works. They often contain other callback functions that are used to update the state and get passed down to their child components as props.

"Dumb" components are the most reusable components available because they are not specific to any one use case or application. They are also called 'presentational' components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


//Your Answer
"yarn add ..." loads packages.

//Googled Answer
"yarn add" installs a package and any packages that it depends on.

#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

1 - missing :"extends Component"
2 - missing array brackets around recipes
3 - list or recipes should be under render, before return

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}]

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
<javascript>?

//Googled Answer
Three html input types are: password, submit, and reset.

#### 6. What happens when we call setState()?

//Your Answer
It sets the state of an object? I honestly forgot what this does.

//Googled Answer
setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses. Think of setState() as a request rather than an immediate command to update the component.


#### 7. What is the difference between component state and props? Your answer should include a short explanation of both.

//Your Answer
The difference between component state and props is that props are fixed in that they stay the same. They hold their property. States can be changed and are passed thru props. For example, I can make changes to a state, but not a prop.

//Googled Answer
Props or properties are passed into the component and should not change. Props will always render the same output given the same input. Props contains information set by the parent component and should not be changed.

State, like props, holds information about the component, but the kind of information and how it is handled is different. When a component needs to keep track of information between renderings the component itself can create, update, and use state. State is created in the component and is changeable. They contain "private" information for the component to initialize, change, and use on its own.


#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

My experience with building the tic-tac-toe game was okay. It was difficult for my partner and I to create our own codes from scratch so we ended up watching a youtube tutorial on how to build one. I'm not too sure if I learned too much or got much out of the video, but the concept of React made sense to me. Unfortunately, we were not able to build the code in scratch.

#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.
I forget what we talked about last week about the Rules of React.

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
