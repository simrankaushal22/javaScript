//singleton
 //object literals
const mySym=Symbol("key1");

let ram={
    name:"simran",
    class:"mca",
    rollNo:123,
    "location":"shimla",
    [mySym]:"value1" //using symbol as key
}
console.log( typeof ram);
console.log( ram.class); 
console.log(ram['rollNo']);
console.log(ram["location"]);



console.log(ram[mySym]); //accessing value using symbol key

//freezing object
// Object.freeze(ram); //freezes the object, preventing any changes to it 

ram.gretting= function(){
    console.log("hello");
}
console.log(ram.gretting());

ram.grettingTwo= function(){
    console.log(`hello ${this.name}`);
}
console.log(ram.grettingTwo()); 


const  person={
    name:"simran",
    age:23,
    city:"shimla",
    "class":"mca",
}
console.log(person.name);
console.log(person.class);
console.log(person["class"]);

person["age"]=25
console.log(person.age); //updating value of age


person.color =" blue"
console.log(person.color); //adding new key-value pair

delete person.class
console.log(person.class); //deleting key-value pair

const calculator ={
add:("a,b"),
sub:("a,b"),
mul:("a,b"),
div:("a,b"),

 } 

 console.log(calculator.add);
 

 let book={
title:"JavaScript Basics",
author:"John Doe", 
}
console.log("title" in book); //checking if key exists using 'in' operator
console.log("publisher" in book); //checking if key exists using 'in' operator

//const tinderUser = new  Object();//singleton object

const tinderUser={} //non signalton object
//console.log(tinderUser);
tinderUser.name="simran"
tinderUser.id="123abc"
//console.log(tinderUser);

const regularUser = {
    fullname:{
        firstname :"simran",
        lastname:"kaushal",
        address:{
            flatno:33,
        }
    }
}

console.log(regularUser.fullname.address);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

const obj3 = Object.assign({},obj1,obj2)// object.assign()is used to merge objects, but we normally use separade variables for clarity(...)denoted by three dots.


console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //returns an array of keys in the object
console.log(Object.values(tinderUser)); //returns an array of values in the object
console.log(Object.entries(tinderUser)); //returns an array of key-value pairs in the object


console.log(tinderUser.hasOwnProperty("name")); //checks if the object has a specific property
