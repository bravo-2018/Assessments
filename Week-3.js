1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

for(let i=0; i<stuffArray.length; i++){
  console.log(stuffArray[i] + " is at index: " + i);
}

// your for loop here, you can reference the same stuffArray variable


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var arr = [9,100,3,6,5, 22, 45, 98, 32, 68, 92, 1, 3, 5, 9, 2, 78, 64]

var steal = function(arr){
// Create my own bubble sort for fun:
// this loops over the inner loop, (could potentially be shortened).
//idea: run loop until the low numbers have "bubbled up" to the top
for(let j =0; j<arr.length; j++){
// for each number in the array...
for(let i = 0; i< arr.length - 1; i++){
//...swap first and second element if second is smaller than first
  if(arr[i+1]<arr[i]){
    let c = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = c
  }

    }
  } return arr
}

var arr = [9,100,3,6,5, 22, 45, 98, 32, 68, 92, 1, 3, 5, 9, 2, 78, 64]
var compareFunc = function(a, b){return a-b}
// can use sort
var sorted = arr.sort(compareFunc)
