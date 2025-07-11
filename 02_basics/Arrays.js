
// const myArr= [1, 2, 3, 4, 5,];
// // console.log(myArr); // [1, 2, 3, 4, 5]

// const heros=["shaktiman", "batman", "superman"];
// console.log(heros[2]);

// const myArr2 = new Array(5,2,3,4); // creates an array of length 5 with undefined values
// console.log(myArr2);

// //array methods

// const myArr3 = [1, 2, 3, 4, 5];

// myArr3.push(6,7) // adds 6,7 to the end of the array
// console.log(myArr3); // [1, 2, 3, 4, 5, 7] - adds 7 to the end of the array

// myArr3.pop(); // removes the last element from the array
// console.log(myArr3); // [1, 2, 3, 4,

// console.log( myArr3.includes(7)); // checks if 7 is present in the array, returns true or false
// console.log( myArr3.indexOf(3)); // returns the index of 3 in


// const newArr = myArr3.join()
// console.log(newArr); // converts the array to a string, returns "1,2,3,4,5"
// console.log(typeof newArr); // converts the array to a string, returns "1,2,3,4,5"
// console.log(myArr3); // [1, 2, 3, 4, 5] - original array remains unchanged


//slice and splice

const myArr4 = [1, 2, 3, 4, 5];
console.log("a",myArr4);

const myn1= myArr4.slice(1, 3); // returns a new array with elements from index 1 to 2 (not including index 3)
console.log(myn1); // [2, 3]
console.log("b",myArr4); // [1, 2, 3, 4, 5] - original array remains unchanged

const myn2= myArr4.splice(1, 3); // removes 3 elements from index 1 and returns them
console.log("c",myArr4); // [1, 5] - original array
console.log(myn2); // [2, 3]

//splice do changes the original array, while slice does not
//splice can also be used to add elements to the array




