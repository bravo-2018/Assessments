### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 //Your Answer
  Smart components are ones that change the state of variables. They contain the code to tell the "dumb" components what state of the information to display. Dumb components don't have a say in what state they use. They take what the smart component gives them and plugs it into their code. We make the distinction because if you have too many smart components, it can potentially get confusing to continuously change the state of things in multiple components. When you are troubleshooting an error, it makes it more difficult to figure out which part of the logic is broken.

 //Googled Answer
 The distinction key deciding factor between smart and dumb components is whether they need to access external state.

 Smart components are less reusable outside a single application or set of applications because they are aware of application-level state.

 For instance, Smart components may bind to Flux actions or stores in order to directly integrate with business logic and react to changes. Whenever possible, you should favor creating dumb components and reduce the surface area of components which bind to application logic.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
  Yarn add puts that specific package into the yarn collection of files. The package.json file will be updated to reflect the new package as a dependency for the React program you are creating.


 //Googled Answer
 Installs a package and any packages that it depends on.

 Adding dependencies
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component{
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
  submit, dropdown, radio button


 //Googled Answer


 #### 6. What happens when we call setState()?

 //Your Answer
  It goes into the state of the class and updates the variables to have the new value you give them in the setState function

 //Googled Answer
 color
 date
 datetime-local
 email
 month
 number
 range
 search
 tel
 time
 url
 week

 and those are just the HTML5 ones


 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
  State is something which will be changed. Props is something which will not be changed. Props is how you can pass the current state of something to another component. It is only a specific value snapshot as taken from that state variable. State is the place where you can store various values of a variable that the smart component can update as needed based on its logic.


 //Googled Answer
 There are two types of data that control a component: props and state. Props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.



#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

  I think having User Stories really helped me structure my thinking for the things I had to build. It kept me focused on one specific task and not jump ahead. Sometimes I find myself thinking slightly ahead because I know I will have to scale something up or make it available to more than one Component or variable to use. I think that is okay to an extent but having that user story to come back to so I didn't go down those tempting rabbit holes too far was very helpful for me. I'm terrible at pseudo coding things out but user stories are kind of doing it at a more macro level. I think it would be a good thing for me to start training myself to do now. Then as I get more comfortable with it, I can start applying it to smaller and more specific bits of code.

  The object deconstruction and bind concepts specifically stood out to me. I learned a lot more about their functionality and why they are so powerful in certain situations while creating the game.

  Pair programming was more difficult on a larger project than during the smaller coding challenges because the way I react to getting stuck was very different than my partner's reaction. He wanted to just dive into the code and move things all over the place to see if he could find something that worked. My approach was more internal to read through and try to make sense of what our current code was doing and where the logic was breaking down. I found myself needing to walk away when he'd go into full experimentation mode so I wouldn't just keep undoing everything he was trying. Plus he sometimes would completely screw up the {} blocks by all the copying and pasting! My OCD did not appreciate that.


#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

I can't remember an exact set of rules but I know to try to limit the number of Smart components you use and that everything is a component. It's good to limit the number of smart components so your logic doesn't get confused and it's easier to debug. Everything is a component so that you can break sites down into very reusable pieces and hopefully in the long run limit the amount of code you have to write as you expand and build out your application.

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
