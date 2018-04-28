1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <div>
          <h1>I am a component</h1>
          <p>{this is javascript}</p>
      </div>
    );
  }
}

everything inside the return is JSX, to use javascript have to use {}
export default App;

1. import React
2. must be a class
3. must export the class
4. must have a render fuction that returns one JSX element.

other notes:
the render is used to create functions and sort them in variables...
return is used to show the results of those functions or renderings.


2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})


// your for loop here, you can reference the same stuffArray variable
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

    for(let i=0; i<stuffArray.length; i++) {
        console.log(stuffArray[i] + " is at index: " + i)
}


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var prices = [40.10, 30.17, 12.15, 5.07, 25, 10.07];
var steal = function(x) {
    x.sort(function(a, b){return a-b});
    console.log("$" + x[0])
}
