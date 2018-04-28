1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			stuffArray: [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
		}
	}

	render() {
		var content = "this is a content"

		var arrayStuff = this.state.stuffArray.map(function(el, i){
			return (
				<div>el + " is at index: " + i</div>
			)
		}
		return (
			<div>
				<h1>I am a component</h1>
				<p>(content)</p>
				{arrayStuff}
			</div>
		)
	}
}

export default App;

A react component needs to:
1. import react
2. must be a class
3. must export the class
4. must have a render function that returns one JSX element

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can reference the same stuffArray variable

for (let i = 0; i < stuffArray.length; i++) {
  console.log(stuffArray[i] + " is at index: " + i);
}



3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var priceList = [10, 7.50, 2.99, 5, 9.99, 12.99]

var steal = function(priceList) {
	priceList.sort(function(a, b) {return a-b})
	console.log(x);
}

// var priceList = [{product: "Oatmeal", price: "5"},
//   						   {product: "Flank Steak", price: "8.99"},
//       					 {product: "New York Strip Steak", price: "14.99"},
//       					 {product: "Tobasco", price: "2"},
//       					 {product: "Maple Syrup", price: "7.50"},
//       					 {product: "Cereal", price: "3"}]
//
//   // your logic here
// steal(priceList)
// //
// // for(var i = 0; i < priceList.length; i++)
// //
// var cheapList = priceList.map(x => x.product + " " + x.price) {
// 	x.sort(function(a, b) {return b-a})}
// // console.log(cheapList);
