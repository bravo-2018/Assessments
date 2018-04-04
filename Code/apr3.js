// Exercise 1
// Consider this variable:
var nums = [1, 2, 3, 4, 5]
// Write a for loop that saves the result of each number multiplied by 5 to another array.

var nums = [1, 2, 3, 4, 5];
for(var i=0; i<nums.length; i++) {
	nums[i] = nums[i] * 5;
}
console.log(nums);

// Exercise 2
// Use a map on the nums array that saves the result of each number multiplied by 5 to another array.

var nums = [1, 2, 3, 4, 5];

// pass a function to map
const map1 = nums.map(x => x * 5);

console.log(map1);

// Exercise 3
// Consider this variable:
var numbers = [11, 22, 33, 44, 55, 66]
// Write a for loop that saves all numbers in the numbers array that are evenly divisible by 3 into another array.

var nums = [11, 22, 33, 44, 55, 66];
var threes = [];
var iLoveThree = function (nums, threes) {
    for (i in nums) {
        if (nums[i] % 3 === 0) {
            threes.push(nums[i]);
        }
    }
    return threes;
};

console.log(iLoveThree(nums, threes));

// Exercise 4
// Use map on the numbers array to save any numbers from the array that are evenly divisible by 3 into another array.
var nums = [11, 22, 33, 44, 55, 66];
var threes = [];
  var map2 = nums.map(function(i){
    if (i % 3 === 0){;
    return i;
  };
});


console.log(iLoveThree(nums, threes));

// Exercise 5
// Consider this variable:
var toons = [{name: "Tom", animal: "cat"},
    {name: "Jerry", animal: "mouse"},
    {name: "Bugs", animal: "rabbit"},
    {name: "Daffy", animal: "duck"},
    {name: "Felix", animal: "cat"},
    {name: "Oswald", animal: "rabbit"}]
// Write a for loop that saves all cat characters to another array.
var cats = []
for(var i=0; i < toons.length; i++){
  if(toons[i].animal === "cat"){
    cats.push(toons[i]);
  };
};


// Exercise 6
// Use map on the toons array to save all rabbit characters to another array.
var toons = [{name: "Tom", animal: "cat"},
    {name: "Jerry", animal: "mouse"},
    {name: "Bugs", animal: "rabbit"},
    {name: "Daffy", animal: "duck"},
    {name: "Felix", animal: "cat"},
    {name: "Oswald", animal: "rabbit"}]

    var bunny = toons.map((toon)=>{
      if (toon.animal == "rabbit")
      return toon
    });

      // var bunny = toons.map(function(i){
      //   if(toons[i].animal === "rabbit"){
      //   return i;
      //   };
      // });


// Exercise 7
// Write a for loop to save the names of each character to another array.
var toons = [{name: "Tom", animal: "cat"},
    {name: "Jerry", animal: "mouse"},
    {name: "Bugs", animal: "rabbit"},
    {name: "Daffy", animal: "duck"},
    {name: "Felix", animal: "cat"},
    {name: "Oswald", animal: "rabbit"}]
var anotherVar = []
for(i=0; i < toons.length; i++){
  anotherVar[i] = toons[i].name
};

// Exercise 8
// Use map on the toons array to save a description of each character to another array.

// Exercise 9
// Consider this variable:
var people = [{firstName: "Alan", lastName: "Grant"},
{firstName: "Ellie", lastName: "Sattler"},
{firstName: "Ian", lastName: "Malcolm"}]
// Write a for loop that creates a new object for every person that has a key value for firstName, lastName, and fullName and saves each new object into another array.
var fullName = []
for(i=0; i < people.length; i++){
  fullName[i] = people[i].firstName + ' ' + people[i].lastName
};


// Exercise 10
// Refactor the above code to use a map on the people array to achieve the same result.
var people = [{firstName: "Alan", lastName: "Grant"},
{firstName: "Ellie", lastName: "Sattler"},
{firstName: "Ian", lastName: "Malcolm"}]

var fullName1 = people.map((toon)=>{
  fullName1 = people.firstName + ' ' + people.lastName
  return fullName1
});

// Exercise 11
// Consider this function:
function addTitle(person){
  return "Dr. " + person.firstName + " " + person.lastName
}
// Write a for loop that iterates through each person in the people array and stores the result of addTitle on each element to another array.

// Exercise 12
// Use map on the run addTitle on each element in the people array and store the result of each call into another array.
