// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(false) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

//Counts down
for(var i = 10; i>=0; i--){
//outputs the loop
  console.log(i)
}


// your code here



// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
var array = [1,"bark",3,"a"]
console.log(array[1])
//QuackQuack is a duck in essence
array[3] = "quackquack"
console.log(array)


// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

if(!weekend) {
  nobeer()
} else {
  console.log("Get a beer")
}


// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	// your code here
 if(arg1 + arg2 < 20){
 console.log(arg1+arg2)
  } else {
  console.log("I'm a pathetic funcation as I can't count past 20")
  }
}
