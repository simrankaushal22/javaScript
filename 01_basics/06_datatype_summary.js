
//   we categories datatype  on the bases of permitive and non primitive ,the way we access and store data.

// primitive DataType are call by value.

//7 types : string, number,boolearn,null,undefined,symbol,bigInt

// JavaScript is a dynamically typed language

//reference( non prinitive) they are values  in which we can directly alocate reference in memory
//Array,objects,functions


// const id = Symbol ("123")
// const anotherId = Symbol ("123")
// console.log(id === anotherId);

// Array
const arr = ["hello","hii",33]
console.log(arr);

// objects
let obj ={
    name:"simran",
    class:12,
    address:"shimla"

}
console.log(obj);

//function

const myFunction = function()
{
    console.log("hello");
    
}
myFunction();

console.log(5 % 2);
