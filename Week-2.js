// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var functionVar = function(num){
if(num%3 ===0){
	console.log(num + " is divisible by three")
} else console.log(num + " is not divisible by three" );

}
// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var Michael = {
		height: "5'10"
		wieght: "160 lbs"
		haircolor: "brown"
		eyecolor: "brown"
		age: 33
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

	//create empty array for string
	let strArray =[]
    // put each letter of the string into an array ("Hello" -> ["H","e","l","l","o"])
	for(let i = 0; i<str.length; i++){
		strArray[i] = str[i]
	}
	//sort the array in alphabetical order:
	strArray.sort()
	//make the Array a string again:
	str = strArray.join("")
	//return the string
	return str;
}

// or........
//create an array of letters
let strArray = str.split("")
//sort array of letters
strArray.sort()
//return Array into a string
returns strArray.join("")



// keep this function call here

AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
//create a blank combo array
var comboArray = []
//run loop that combines the elements of the two seperate arrays (with a space between) and puts them in combo Array
for(let i = 0; i<nums.length; i++){
	comboArray[i] = nums[i] + " " + nouns[i]
}
//-------------------------------------------------------------//
//For different lengths: ASSUMPTION: We ONLY want to get return items that have both a number and a noun
var nums = [1, 5, 88, 2, 5]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
var shortestArray = []
//find the length of shortest array:
shortestArray = [nums.length, nouns.length].sort()[0]
var comboArray = []
//run loop that combines the elements of the two seperate arrays (with a space between) and puts them in combo Array
for(let i = 0; i<shortestArray; i++){
	comboArray[i] = nums[i] + " " + nouns[i]
}
// Alyssa's way: with function
function concatArrays(arr1, arr2){

}

// find shortest:

//or without built in sort:
//create a swap function:
// function swap(el1, el2){
// 	let b = el1
// 	el1 = el2
// 	el2 = b
// 	return [el1,el2]
// }
//
// if(nums.length > nouns.length){
// 	swap(nums, nouns)
// }





// output of the first function should be: "1 ducks"
