
//forEach() --it changes that array
//map() --it creats the new array

//filter() -- it creats the new array
let num=[1,2,3,4,5,6,7,8,9,10]
const evenNumber = num.filter((elm)=>{
  return  elm % 2 ==0
})

console.log(evenNumber)

//reduce: used to calculate 

// array.reduce((accmulator, currentValue,index, array) =>{
//     return accmulator+currentValue
// },initalValueOfAccmulator)


const sum = num.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 


//find() Returns the first element in the array that satisfies the condition. If none match, it returns undefined.
const numbers = [10, 25, 30, 45, 60];
const result = numbers.find(num => num > 30);
console.log(result); // ➜ 45 (first number greater than 30)


//console in js 
// Method	Purpose
// log()	Basic output
// info()	Informational output
// warn()	Warning message
// error()	Error message
// table()	Display tabular data
// dir()	Inspect object deeply
// count()	Count function calls
// countReset()	Reset count
// group() / groupEnd()	Organize output
// time() / timeEnd()	Benchmark performance
// assert()	Check conditions
// timeLog()	Log current timer value
// groupCollapsed()  Start collapsed group


//alert, prompt & confirm
//alert : to show the windown as toast 
//prompt: used to enter value like the field in the alert
//confirm: 

