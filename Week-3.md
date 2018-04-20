### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

False: - React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
True: - React is a modern, efficient answer to complex UI applications
True: - React is a full stack framework for modern web applications
False: - React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 A: Smart components deal with how the program works. While, dumb components deal with how it looks.


 //Googled Answer
 Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.
The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.

Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.
Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.

They are class-based components and have their own state defined in their constructor() functions.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 A: I had to google this one, because I wasn't sure.


 //Googled Answer
 A: "Yarn add " adds/installs packages. The package will automaytically be updated when we install a package with yarn.


#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

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
            let recipes = this.state.recipes.map(function(recipe)
        return (
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 A: button, type, image, submit


 //Googled Answer
 A:
button
checkbox
color
date
datetime-local	 
email
file
hidden
image
month
number
password
radio
range
reset
search
submit
text
time
url
week


 #### 6. What happens when we call setState()?

 //Your Answer
 A: I did not not know this and I had to google it.


 //Googled Answer
 setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

/#### 7. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 A: props are what you run through a component.


 //Googled Answer
 A:
props vs state

If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component.

props
Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.

state
The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

A Component manages its own state internally. Besides setting an initial state, it has no business fiddling with the state of its children. You might conceptualize state as private to that component.

#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
A: The tic tac toe challenge was very difficult for me. I think it might have been a little too difficult because the majority of my time was spent googling or waiting for an instructor to become available to tell me how to do a certain part. I don't think I was able to write any code for it completely by myself. I learned that I need to study a bit more because I didn't really understand any of it. Pair programming it was fine, but my partner was in a similar situation as myself. We were not sure how to do any of the parts and just had to wait for an instructor to tell us how to do it. The hardest part was figuring out how and where to start. I think its fine for something to be very difficult, but sometimes if its too difficult, I'm not able to learn from it because its just too far above what I know.


#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables

Done
