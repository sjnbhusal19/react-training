//conditional statements 

//const age = 25;

// if (age>18) {
// console.log("You can vote")
// }


//if (execuate if the condition is true)
//if-else
    //if -else if -else


// ternary operator (conditional operator) in JavaScript 
// condition ? expressionIfTrue : expressionIfFalse

// const age = 18;
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);  // "Yes"

// Condition ? value1 : value 2


// Switch statement 
// Switch (expression) {
// Case value 1:
// //code to execute
// Break;
// Case value2:
// //code ot execuate
// Break;
// Case 3:
// //code to run
// Break;
// Default:
// //code to run
// }


// Nulish check in conditions (??)
// Let name = username || “Guest”;
// This fails when username is “”, 0 
// So the solution is , let name = username?? “Guest”;
// “Guest “ is used only when value is null or undefined not for 0 , false , or “”.
// Real world example , let userAge=0;
// Let age= userAge ?? 18; //age =0 (correct)

// Optional chaining in conditions (?.)
// -prevent crash when assessing nested objects
// Console.log(user?.profile?.email);

// Question (get user to input a number using prompt (“enter a number :”) . check if the number is a multiple of 7 or not .

// Let num = prompt(“enter a number “);
// If (num%7===0){
// Console .log(num,“ is divisible by 7)
// Alert(num,“ is divisible by 7)
// } else {
// Console.log(num,“ is not divisible by 7”)
// Alert (num,“ number is not divisible by 7”)
// }

