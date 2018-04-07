// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(true) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}

if(true) {
  console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}
VM140:2 This message is visible

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

for( ) {
}

// your code here
for (i=10; i>=0; i--) {
  //index is equal to ten, index is greater than and equal to zero, index decreases by 1
  console.log(i)
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

var animals = ["cat", "dog", "chicken", "rabbit"]
console.log(animals[1])
animals[3] = "duck"
console.log(animals[3])

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions
//down into their simpler parts. You might recognize this example:

tired = true
if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

function keepWorking(){
  console.log("keep working")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

JonKnows = false
if(JonKnows) {
  console.log("He knows")
} else {
  console.log("You know nothing Jon Snow")
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguments. Find the sum of those two numbers,
//if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
  //sum of two arguments(numbers)
  var sum = arg1 + arg2
  if(sum<20) {
    console.log(sum)
  } else {
    console.log("can't count that high!")
  }
}
