// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var even = (x,y) => {
	if (Number.isInteger(x / y)) {
		return "The number " + x + " is divisble by " + y + "!";
	}else {
		return "The number " + x + " is not divisble by " + y + "!";
	}

}

var x = 9
var y = 3
console.log(even(x,y));

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var lee = {
	hair: "Brown",
	eyes: "Brown",
	weight: 225
}

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
	strSplit = str.split("");
	strSort = strSplit.sort();
	newStr = strSort.join("")
	return newStr;
}

var str = "hooplah"
console.log(AlphabetSoup(str));

// keep this function call here

AlphabetSoup(readline()); // TODO: You want me to write a higher order function. Would like to go over this one.

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

function comeTogether(){
var out = '';
for(var i=0;i<nums.length;i++){
    out += nums[i] + " " + nouns[i] + "\n";
}
return out;
}

comeTogether()

// TODO: not sure how to accomodate different lenghts. I beleive a if condition that determines if one of the arrays is longer and sets a default value to the pair.

// output of the first function should be: "1 ducks"
