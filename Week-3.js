1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...1

  1. Import React
  2. Must be a class
  3. must export the class
  4.  must have a render function that returns one JSX element


import React, { Component } from 'react';

  class Comp extend Component {
    super(props)
    this state = {var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

    }
    }
      render(){
      var content = "this is content"

    var arrayStuff  this.state.stuffArray.map(function(el,i))
      return (
      <div>  el + "is at index: " +i</div>
      )
    }
      return ***Everything in the return is JSX
        <div>
          <h1>this is JSX</h1>
         <p>{content}</p>   ****{} means javacript.
         {arrayStuff}
        </div>
      )
    }
}

  export default Comp

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can reference the same stuffArray variable
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
for (let i=0; i < stuffArray.length; i++) {
      console.log(stuffArray[i]+ " is at index: " + i)
    }



3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var nums = {1,3,4,2,6,7}
 var steal = function(num){
  num.sort(function (a, b) {
    return a - b
})
console.log(num)
}
