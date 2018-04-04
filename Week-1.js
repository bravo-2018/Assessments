// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(true) {
  console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

var step;
for (step = 10; step > 0; step--) { //step starts out at 10, > makes the variable run until it reaches 0, -- helps the program run until 0
  // Runs 9 times, with values of step 10 through 1.
  console.log(step); //shows the variables of step which go 10 to 1 on each line.
}

// your code here

}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
var animal = ['Moose', 'Bird', 'Anteater', 'Duck'];
animal[1]

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

function openDoor(a) {
  if (a > 70) {  //In this example, 70 ideally represents 70 degrees F. Meaning, if it is warm, the door can stay open.
    return "Door is open.";
  } else {
    return "Door remains closed.";
  }
}

console.log(openDoor(75));

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	// your code here
  if (arg1 + arg2 >= 20) {
    console.log(arg1 + arg2)
  } else {
    return "Can't count that high!"
  }
}
console.log(20+30)
