1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

Step 1.  create a react component (Week3.js file)

import React, { Component } from 'react';

export default class Week3 extends Component {
  render() {
    return (
      <div>
        <p>
           WEEK 3 Assessment
        </p>
      </div>
    );
  }
}

Step 2.  Modify app.js file to include and use Week3 component..  Changes made to app.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week3 from './Week3'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Week3/>
      </div>
    );
  }
}

export default App;



2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can reference the same stuffArray variable
Simple conversion for above array

for (let i = 0; i < stuffArray.length; i++)
  {
    console.log("FOR LOOP: " + stuffArray[i] + "is at index: " + i)
  }

React conversion..

created LoopButton.js ..  and linked to app.js
below is LoopButton.js file

import React, { Component } from 'react';

export default class LoopButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>
            Week3 Part 2
        </button>
      </div>
    );
  }
}

Modified App.js to use LoopButton.. once it is clicked, both MAP and forloop outputs to console


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week3 from './Week3'
import LoopButton from './LoopButton'

class App extends Component {


  handleClick(stuffArray) {
   stuffArray.map(function(el, i){
        console.log(el + " is at index: " + i)
    })

    for (let i = 0; i < stuffArray.length; i++)
    {
      console.log("FOR LOOP: " + stuffArray[i] + "is at index: " + i)
    }
  }

  render() {
    const stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Paranoid Android"]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Week 3 Assessment</h1>
        </header>
        <Week3/>
        <LoopButton onClick={this.handleClick.bind(this,stuffArray)}/>

      </div>
    );
  }
}

export default App;


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var airPrice = [
  ["American",150],
  ["Delta",88],
  ["SouthWest",99],
  ["Sprit",129],
  ["Alaskan",129]
]

var lowestAir = airPrice[0];

for (let i = 1; i < airPrice.length; i++)
{
  if (airPrice[i][1] < lowestAir[1])
  {
    lowestAir = airPrice[i]
  }
}

console.log("Lowest Air is " + lowestAir[0] + " : $" + lowestAir[1])

var steal = function(){

  // your logic here

}
