1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React from 'react';

class simpleComponent extends React.Component {
  render(){
    return React.createElement("h1", null, "I am a component")
  }
}

export default simpleComponent;


2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

for (var i = 0; i < stuffArray.length; i++) {
  console.log(stuffArray[i] + " is at index: " + i)
}


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var numArray = [100, 99, 5000, 5, 999, 111, 123456789]

var steal = function(array){
  array.sort(function(a, b){return a-b});
  return array[0]
}

steal(numArray)

var stealTwo = function(array){
  return Math.min(...array)
}

stealTwo(numArray)
