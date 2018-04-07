// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(5 > 10) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

for(let i = 10; i >= 0; i-- ) { // i starts at 10. If i is greater than or equal to 0,       count down until i reaches 0.
	console.log(i); // log the value of i.
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
var animals = ["dog", "cat", "bird", "horse"]
console.log(animals[1]);
animals[3] = "duck"


// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:
if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.
var rent = 10000
var income = 10

if(income >= rent){
    console.log("Pay the rent!");
} else {
    console.log("Rob a bank");
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
console.log(arg1 + arg2);  // Finds the sum of Arg1 and Arg2
    if(arg1 + arg2 < 20){  // If the sum is less than 20, log the sum.
        console.log(arg1 + arg2);
    }
    if(arg1 + arg2 > 20){  // If the sum is more than 20, log the sentence.
        console.log("Can't count that high!");
    }
}
