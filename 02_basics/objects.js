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
