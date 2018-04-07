// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense. 

/* It is missing a variable boolean and function*/

var hiddenMessage = true;

var showMessage = function hiddenMessage() {
  if(true) {
    console.log("You'll never see this message!")
  } else {
    console.log("This message is visible")
  }
}



// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Reverse variable to count backwards
var countReversed = count.reverse();

// Starts at index 0, goes no further than index length in array, and repeats with all items in array
for(var index = 0; index <= countReversed.length; index++) {

  // Logs number on screen
  console.log(countReversed)

}
	
// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
var animals = ["pig", "chicken", "cow", "goat"]

console.log(animals[1])

animals[3] = "duck"

    

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door. 

var hungry = true

var hunger = function() {
  if (true) {
  console.log("Chow time!")
} else {
  console.log("Chow time later.")
  }
}



// 5. Time to combine all this! Create a function that takes in two numbers as arguments. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	// your code here
}

function message(num1, num2) {
	var number1 = num1
	var number2 = num2
	var sum = (number1 + number2)

 	if (sum < 20) {
  	console.log(sum)
	} if (sum > 20) {
  	console.log("Can't count that high!")
  	}
}
