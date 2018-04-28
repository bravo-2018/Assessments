### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)  FALSE  this is about Angular
- React is a modern, efficient answer to complex UI applications  TRUE
- React is a full stack framework for modern web applications FALSE
- React is a flexible library that plays the role of V in an MVC framework TRUE


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 "Smart" (logic) or impure components are components of an app that contain logic and a state.  "Dumb" (display)  or pure components are components that only display certain things and do not contain a state.  

 //Googled Answer
From https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
"Dumb Components
Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on."

"Smart Components
Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props"


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

 I'm not sure what yarn add does.  I know that we use yarn instead of npm for react and that we use yarn start to start our react apps.  I think yarn is a package manager for  pre coded packages so we can use these in our apps?

 There are three files or folders that will be changed
 package.json
 yarn.lock
 node modules folder - never gets added to git

 yarn - goes through all the node modules and adds packages that you need.

 don't do a global yarn install with react apps that you want others to run on their computer.  


 //Googled Answer
 From: https://yarnpkg.com/lang/en/docs/cli/add/
 "In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install."



#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
1.  Missing the extends component
2.  Missing array brackets around recipe objects
3.  Map function needs to be under render, not under return

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:[
            {name: 'Meatballs'},
            {name: 'Mac & Cheese}'
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
 I'm blanking on this one so I'm googling it....


 //Googled Answer
input type = "submit"
input type = "password"
input type = "reset"



 #### 6. What happens when we call setState()?

 //Your Answer
 When we call setState() we are going inside the state of our component and changing it to an updated state (instead of going in manually with something like this.state.recipes.name for example).


 //Googled Answer

 from React website
 "setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses."


 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 Component state can be changed and represents a snapshot of the component's state at a given time.  Props are given to components by a parent usually to display something and can not be changed.  


 //Googled Answer

 "PROPS

Let’s start with props. This simply is shorthand for properties. Props are how components talk to each other. If you’re at all familiar with React then you should know that props flow downwards from the parent component.

There is also the case that you can have default props so that props are set even if a parent component doesn’t pass props down.

This is why people refer to React as having uni-directional data flow. This takes a bit of getting your head around and I’ll probably blog on this later, but for now just remember: data flows from parent to child. Props are immutable (fancy word for it not changing)

What happens when a component receives data from someone other than the parent? What if the user inputs data directly to the component?

STATE

So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast. State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see."


#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

At first I was a little concerned because I was in a group of 3 and I quickly found out that I knew less about javascript and react than both of my team members.  This immediately creates a power dynamic that has to be delicately navigated. I decided to just try and learn as much as possible from the other two so I kept asking questions.  I also asked to drive a lot and had them help me psuedo code.  I do feel that I learned a lot from the project but unfortunately I did not feel like I had very much ownership over the final product because most of the logic and code were created by my teammates.

React currently seems unnecessarily complicated :-) at least with this project.  I'm guessing with more complex projects React starts to make more sense especially as you have components that need to be reused.  

#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.
Honestly I can't remember specifically what we talked about or if we covered this, but I'll make sure and ask when we review this next Monday.

1.  Never update State directly, always use setState()
2.  Never alter the DOM directly, always operate on a value in state (for example inner html - if you use this you lose control over what's in state)
3.  Only call setState once per method or render cycle
4.  State is for values that change, Props is for values that don't, constants should be set outside the component

Instead of using this.state multiple times, destructure the state object to save values
"export default" can be written when you create the component class, or after, whichever you choose, stay consistent!

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
Done :-)
