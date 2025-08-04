// Destructuring (arrays/objects)

// Array Destructuring:
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

// Object Destructuring:
const user = { name: "Sujan", age: 23 };
const { name, age } = user;
console.log(name, age); // Sujan 23



// Spread and rest operators (...)
//spread
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]

const user1 = { name: "Sujan" };
const user2 = { ...user1, age: 23 };
console.log(user2); // { name: "Sujan", age: 23 }


//rest 
//in function to collect arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6

//Array Destructuring
const fruits = ["apple", "banana", "mango", "orange"];
const [first, ...rest] = fruits;

console.log(first); // apple
console.log(rest);  // [ 'banana', 'mango', 'orange' ]

//In Object Destructuring

const user = { name: "Sujan", age: 23, role: "dev" };
const { name, ...rest } = user;

console.log(name); // Sujan
console.log(rest); // { age: 23, role: "dev" }



// Shorthand property names
const name = "Sujan";
const age = 23;

const person = { name, age };

console.log(person); // { name: "Sujan", age: 23 }


// Optional chaining ?.
console.log(user.profile?.name); // ✅ undefined (no error)

// Nullish coalescing ??

// Sometimes you want to set a default value only when the variable is truly missing (null or undefined) 
// — not when it's 0, '' (empty string), or false.

let result = value1 ?? value2;


// Modules (import, export)


// Enhanced object literals




// //naming convensation in js
// camelCase	    getUserData	      Variables, functions, methods
// PascalCase   	UserProfile	      Classes, React components
// snake_case	    user_profile	  ❌ Not common in JS (used in Python, APIs)
// kebab-case	     user-profile	  URLs, CSS class names
// UPPER_SNAKE_CASE	 MAX_LIMIT	      Constants