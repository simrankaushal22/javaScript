"use strict"; //treat all js code as newer version

 /* alert(3+2)  we are using nodejs not browser */ 
//typeof is use for  find the  datatypes type

//datatypes

//number => 2 tp power of 53
//bigint=> use if u have big num
//string=> "" ,''
//boolean=> true/false
//null => standalone value
//undefined
//symbol=> unique


//primitive types
//string

let name ="simran kauushal";
console.log( typeof name);

//number

let age = 23;
let pi = 3.14;
console.log( typeof age);

//bigInt 

let bigNumber = 1223445566778999999009898766524323342;
console.log( bigNumber);

//boolean
let isStudent = true;
let student =false;
console.log(isStudent);

//undefined

let notDefined;
console.log(typeof notDefined); // type unefined

//null

let empty = null;;
console.log(typeof empty); //type object

//symbol

let uniqueId = Symbol("id");
console.log(typeof uniqueId); //type symbol

//non-primitive type
//object

let person ={

    firstName: "simran",
    lastName : "kaushal"
};
console.log(person);

let dog ={
    bark:"bhau bhau",
    notBark: 123
}
console.log(dog);

let userName={
    firstName:"raj",
    password:"123hyiian",
    number:789066532
};
console.log(userName);

// ARRAY (technically an object)

let colors = ["red" , "green","yellow"]
console.log(colors);
console.log(typeof colors); // object
console.log(Array.isArray(colors)
);

//function
function greet(){
    return "hello";
}
console.log(greet);














