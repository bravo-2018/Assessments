// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var typeNumber = function(argument) {
	if (argument % 3 === 0) {
		 console.log(argument + " is divisible by three")
	 } else {
		 console.log(argument + " is not divisible by three")
	 }
}

typeNumber(3)

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
const steven = {
  1: "new to coding",
  2: "from the East Coast",
  3: "now lives in San Diego"
};

// 3. Given the object below, fill in how to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log just the bell from the list of gear
console.log(bicycle.gear[2])

// Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {

    // your code goes here

function AlphabetSoup(str) {
	return str.split('').sort().join('');
}
console.log(AlphabetSoup("hooplah"))
VM201:1 ahhloop
undefined

// keep this function call here

AlphabetSoup(readline());


console.log(AlphabetSoup("readline"));
VM199:1 adeeilnr
undefined
=======
AlphabetSoup(hooplah);   

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

for (i = 0; i < nums.length; i++) {
console.log(nums[i] + " " + nouns[i]);
}
