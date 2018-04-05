// // 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.
//
var x = 20
var y = 50
if(x > y) {
  console.log("You'll never see this message!")
} else  {
  (x < y)
  console.log("This message is visible")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

for(var i = 10; i > 0 ; i--) { //create for loop that sets index at 10, ends index at 0, and decreases by 1.
  console.log(i) //prints i
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

var family = ["Damon", "Courtney", "Zoe", "Margot"] //create array
console.log(family[1]) //prints the second element
family[3] = "Duck"//changes the 4 element to duck
console.log(family) //prints to test the change

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.
//set variables to test and comment a variable out for testing purposes
// var days = 20 //test for true value
var days = 50 // test for false value
if(days < 30){
  console.log("Winter is Coming")
} else {
  console.log("at least westworld is on soon.")
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	if (arg1 + arg2 < 20) {
    var sum = arg1 + arg2
    console.log(sum)
  } else {
    console.log("I can't count that high")
  }
}
practiceFunc(5, 2)
