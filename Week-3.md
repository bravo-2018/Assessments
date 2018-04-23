### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

FALSE-- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) -- (This is a description of Angular, not React)
TRUE-- React is a modern, efficient answer to complex UI applications
FALSE-- React is a full stack framework for modern web applications -- (React is a front-end framework)
TRUE-- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer
  Smart (logic) component controls the data flow between the user and the web. It contains states that will be often updated and changed. Dumb (display) component's role is mainly to display content on the page, and it doesn't get changed often.
 
 //Googled Answer
 My favorite explanation thus far:  https://bloomca-me.github.io/2017/10/08/difference-between-smart-and-dumb-components.html
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
 Yarn is adding another node module to your react project, so package.json and yarn.lock will be updated
 
 //Googled Answer
 From https://yarnpkg.com/lang/en/docs/cli/add/ :
In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

Most packages will be installed from the npm registry and referred to by simply their package name. For example, yarn add react will install the react package from the npm registry.
 
#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
// 1) Let block needs to be above the return function, since return function only returns XML.
// 2) Class Recipes needs to extend Component
// 3) Missing array brackets around recipes objects.

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes: 
            [{name: 'Meatballs'},
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
 text, password, submit
 
 //Googled Answer
 https://www.w3schools.com/html/html_form_input_types.asp
 
 #### 6. What happens when we call setState()?
 
 //Your Answer
 setState() changes a state of a component
 
 //Googled Answer
 setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses
 
 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer
 Props are what get passed.  State is what gets changed.
 
 //Googled Answer
 From https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react:
 
   For parent-child communication, simply pass props.

   Use state to store the data your current page needs in your controller-view.

   Use props to pass data & event handlers down to your child components.

   These lists should help guide you when working with data in your components.

   Props

   are immutable
   which lets React do fast reference checks
   are used to pass data down from your view-controller
   your top level component
   have better performance
   use this to pass data to child components
   State

   should be managed in your view-controller
   your top level component
   is mutable
   has worse performance
   should not be accessed from child components
   pass it down with props instead
   
#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
 I feel that being able to work in a group of three really helped.  If I were working by myself, it would have been much more difficult for me to complete the project.  Having two other people to balance out my strengths and weaknesses really helped push us along.  React was a bit intimidating and mysterious for me, mainly because I didn't really know what it does and how it worked.  My group and I worked together to figure out React as we tried to get things to work on our app.  I learned a lot being able to see my partners' approaches and thinking processes, from discussing my own thoughts with them, and from building onto each other's ideas.

#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.
 RULES OF REACT:
 1) Never update State directly, always use setState()
 2) Never alter the DOM directly, always operate on a value in state
 3) Only call setSTate once per method or render cycle
 4) State is for values that change, Props is for values that don't, constants should be set outside the component
 
 FOR CLEANER REACT:
 1) Instead of using this.state multiple times, destructure the state object to save values
 2) "Export default" can be written when you create the component class, or after, whichever you choose, stay consistent.

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
 Loved it!!!
