// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

*Not sure if this is what you wanted...

if(a == "true") {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}

var a = "true"

*Maybe this is what you wanted...

if(true) {
    return true
    console.log("You'll never see this message!")
} else {
    return false
    console.log("This message is visible");
}


// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.


for(i = 10; i > 0; i--) {
    console.log("The number is " + i +"!")
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

var array = [1,2,3,4]
console.log(array[1]);
array[3] = "duck"
console.log(array);

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

if(!locked) {
    opendoor()
} else {
    console.log("Unlock the friggin door!");
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

*This took me a little bit!*

function number(x,y) {
    var z = x + y
    return {
        x: x,
        y: y,
        whatNumber: function() {
            if (z < 21) {
            return "The sum of " + x + " & " + y + " is less than 20!";
            }else {
            return "I can't count that high!";
            }
        },
    }

}

var x = 5
var y = 5

var whatNumber = number(x,y)
console.log(whatNumber.whatNumber());
