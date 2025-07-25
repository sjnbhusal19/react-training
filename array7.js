
// Array =linear collection of items in which we collect similar types of data
let marks = [15,20,70]


//methods of array

// .leangth 
// indexes // arr[2]
// push() : add to end

let arr = [1,2,3,4,5]

// arr.push(6,7)

// console.log(arr)


// pop() //delete items form the last in original array

// const deletedItems = arr.pop() in the original array

// console.log(arr)
// console.log(deletedItems)

// toString() //returen array in string in another array and original array is not changed

// concat() //add and return new array 

// unShift(): add to start in the original array

// shift() : delete form the start and return

//slice() : returns a piece of the array and give new value in new array
            //slice (startIdx, endIdx)

// Splice() : change original array(add,remove, replace)
 //splice(startIdx, delCount, newEl1...)

 // add element arr.splice(2,0,101);
 
 //delete element arr.splice(3,1)

 //replace element arr.splice(3,1,101)

  






//loops in array

let num = [2, 4, 6, 8, 10, 12, 14, 16];

for (let idx = 0; idx < num.length; idx++) {
    console.log(num[idx]);
}




