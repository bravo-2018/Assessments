// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(false) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}

// OR

if(true) {
  console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}


// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.
// Start at an (index) value of 10, and as long as index is greater than or equal to 0, decrement index by 1
for(i=10; i>=0; i--) {
  // display the index value in console
  console.log(i)
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
// Create an array of zeroes
myArray = new Array(4).fill(0)
// Console.log second thing (index 1) on list
console.log(myArray[1])
// Change the forth item to be the string "duck"
myArray[4] = "duck"

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.


// door constructor
function door(doorname, status){
  return {
    doorname: doorname,
    status: status,
    getData: function(){         // begin function
     return this.doorname+" is "+this.status
    }
  };
}

// 2 examples where door1 is closed and door2 is open
var door1 = door("door1", "closed")
var door2 = door("door2", "open")


// open door function
function opendoor(doorArg){
if(doorArg.status != "open"){
  doorArg.status = "open"
  console.log(doorArg.doorname + " is now open.")
} else  {console.log(doorArg.doorname + " was already open.")}
return doorArg.status
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
  var sum = arg1 + arg2
  if(sum < 20 ){
    console.log(sum)
  } else if(sum>=20){
    console.log("can't count that high!")
  } else console.log("did you input two numbers?")
}
