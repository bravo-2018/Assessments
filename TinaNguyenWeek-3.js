1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

// FILE: src/Header.js
import React, { Component } from 'react';

class Comp extends Component {

  var component = "this is content"
  render() {
    return (
      <div>
        <h1>This is JSX</h1>
        <p>{component}</p>
      </div>
    );
  }
}
export default Comp;

A react component must have:
1. import React
2. must export the class
3. must have a render function that returns one JSX element


2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.

var nums = [1, 3, 5, 2, 8, 3, 5]
var steal = funtion(numsArray) {
  var sortedArray = nums.sort
}


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can reference the same stuffArray variable
}
for (let i=0; i <= stuffArray.length; i++) {
  console.log(stuffArray[i] + " is at index: " + i)
}

3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var steal = function(){

  // your logic here

}
