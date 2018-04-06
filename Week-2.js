// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three"

function divisibleby3(var num)
{
   if (var%3 == 0)
   {
     console.log(var + " is divisble by 3")
   }
   else
   { console.log(var + " is not divisible by 3")}
}

divisibleby3(5)
divisibleby3(6)
// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var mySelf = {
    firstName: "David",
    lastName: "Yi",
    race: "Male",
    getFullName: function() {
      return (this.firstName + " " + this.lastName)
    }
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
var justBell = []

for (var k=0; k < bicycle.gear.length; k++){
  if (bicycle.gear[k].toLowerCase().includes("bell"))
  {
    justBell = bicycle.gear[k]
  }
}

console.log(justBell)

// Log the correct PSI for the tires
var correctPSI = []
for (var j=0; j < bicycle.wheels.specs.length; j++)
{
   if (bicycle.wheels.specs[j].toLowerCase().includes("psi"))
   {
     correctPSI = bicycle.wheels.specs[j].split(" ")
   }
}

console.log(correctPSI[0])

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
  var outStr

  for (var m = str.length; m >0; m--)
  {
     outStr += str[m]
  }

	return outStr;
}

AlphabetSoup("hooplah")

// keep this function call here

AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
function concatTwoArrays(numsArray,nounsArray)
{
  if (numsArray.length != nounsArray.length){
    if (numsArray.length > nounsArray.length)
    {
       //console.log("Number array is bigger padding nouns array with EMPTY string")
       for (var m = 0 ; m < (numsArray.length - nounsArray.length) + 1 ; m++)
       {
          nounsArray.push(" ")
       }
       console.log("New nounsArray : " + nounsArray)

    }
    else if (nounsArray.length > numsArray.length)
    {
       console.log("Noun array is bigger, padding num array with 0")
       for (var m = 0 ; m < (nounsArray.length - numsArray.length) + 1; m++)
       {
          numsArray.push(0)
       }
       console.log("New numsArray : " + numsArray)
    }
  }

  var returnArray = []
  for (var k = 0; k < numsArray.length; k++)
  {
     returnArray[k] = numsArray[k] + " " + nounsArray[k]
  }
  return returnArray
}

// Test concatTwoArrays when numArray and nounsArray is same size
var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
console.log(concatTwoArrays(nums,nouns))

// Test concatTwoArrays when numArray size is bigger than nounsArray size
var nums1 = [1, 5, 88, 2, 5, 42, 57, 101, 9413,394]
console.log(concatTwoArrays(nums1,nouns))

// Test concatTwoArrays when nounsArray size is bigger than numsArray size
var nouns1 = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a","TEST", "TEST1"]
console.log(concatTwoArrays(nums,nouns1))
