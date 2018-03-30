// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(true) {
  // if pass if condition is true. so statement below will get executed always
console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.
var iterCounter = 1
for(var counter=10; counter >=0; counter-- ) {

// your code here
  console.log("Iteration: " + iterCounter++ + "   Value : " + counter)

}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
var fourArray = ["One","Two","Three","Four"]
console.log("fourArray : " + fourArray)
console.log("2nd item in array is " + fourArray[1])
fourArray[3]="Duck"
console.log("New fourArray : " + fourArray)

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

var tired1 = prompt("Are you Tired: True or False")

if (tired1.toLowerCase() != "true")
{
	keepWorking()
} else {
	console.log("I need coffee!")
}

function keepWorking() {
  console.log("AWESOME: Keep Working")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a doorv
var date1 = new Date()
console.log(date1)
//console.log(date1.getDay())
//date1.setDate(2)
console.log(date1)
// Sunday - Saturday : 0 - 6
if (date1.getDay() == 5) // check for Friday
{
  console.log("TGIF!!!!!!!!!!!!!!!!!")
}
else {
  console.log("Sorry..  get back to work")
}
// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	var sum1 = arg1 + arg2
  if (sum1 < 20)
  {
    console.log("Sum of arg1 and arg2 is less than 20")
  }
  else {
    console.log("Ugh...  Too big to calucate")
  }
}
