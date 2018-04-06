// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

//I switched the messages because if something is true then you will see the message in the first console.log and never see the second console.log message
if(true) {
  console.log("This message is visible.")
} else {
  console.log("You'll never see this message!")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.


// your code here

// This first line states where the loop starts, when the loop stops and what to do after each loop. (in that order) so i = 10 means to start at index 10, i >= 0 means to keep running the loop until index = 0, i-- is just like i = i-1 or to keep moving backwards 1 index after every loop.

for(i=10; i>=0; i-- ) {
    // the following line "prints" the result of the loop (only for the programmer to see) - 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
	console.log(i)
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

    var animals = ["dog", "cat", "bird", "mouse"]
    console.log(animals[1]) //the second thing in the list is at index 1 since we start at index 0 (in this case dog)
    animals[3] = "duck" //since the fouth thing in the array is mouse and we want to change this to duck
    console.log(animals)


// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

if(dirty) {
    takeShower()
} else {
    cosole.log("So fresh and so clean!")
}


// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	// your code here
    if (arg1 + arg2 < 20) {
    return arg1 + arg2
} else {
    return "Can't count that high!"
}
}
 //or you could do...

function practiceFunc(arg1, arg2) {
	// your code here
    var sum = arg1 + arg2
    if (sum < 20) {
    return sum
} else {
    return("Can't count that high!")
}
}
