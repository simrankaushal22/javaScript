const name = "Simran";
const age=20;
// console.log(name + age ); //old version

console.log((`hello my name is ${name}and my age is ${age}`)); //new version that is known as string interpolation

const gameName ="Cricket";
console.log(gameName[0],gameName[4]);  // accessing the character of string by index
console.log(gameName.length); //length of string
console.log(gameName.toUpperCase()); //convert to upper case
console.log(gameName.toLowerCase()); //convert to lower case
console.log(gameName.indexOf("C")); //index of character
console.log(gameName.slice(0,3)); //slice the string from index 0 to 3
console.log(gameName.replace("Cricket","Football")); //replace the string
console.log(gameName.split("c")); //split the string by character "c" and convert it to an array
console.log(gameName.trim()); //remove the white space from the string
console.log(gameName.startsWith("C")); //check if the string starts with "C"
console.log(gameName.endsWith("t")); //check if the string ends with "t"            
console.log(gameName.includes("Cr")); //check if the string includes "Cr"
console.log(gameName.charAt(2)); //get the character at index 2     
console.log(gameName.concat(" is my favorite game")); //concatenate the string
console.log(gameName.repeat(2)); //repeat the string 2 times
console.log(gameName.padStart(10,"*")); //pad the string at the start with "*"
console.log(gameName.padEnd(10,"*")); //pad the string at the end with "*"






