// function name(){
//     console.log("This is a function");
//     console.log("Functions are reusable blocks of code that perform a specific task.");
//     console.log("They can take inputs and return outputs.");
    

// }
// name(); //calling the function

// function sub(num1,num2){
// console.log(num1-num2);


// }
// sub(62,35);


// let a = 5;
// function test() {
//   let a = 10;
//   console.log(a);
// }
// test();
// console.log(a);

// function greet(name) {
//     return "Hello, " + name;
// }
// console.log(greet("Alisha"));

// let count = 0;

// const inc = () => ++count;

// [inc(), inc(), inc()];

// console.log(count);


//rest // parameter syntax allows us to pass an indefinite number of arguments to a function
// and treat them as an array.
// It is denoted by three dots (...) before the parameter name.


function calculatePrice(...num1){

return num1 
    
}
//console.log( calculatePrice(200,300,400,500));

let globalVar = 'global';

function outerFunc() {
  let outerVar = 'outer';

  function innerFunc() {
    let innerVar = 'inner';
    console.log(globalVar, outerVar, innerVar);
  }

  innerFunc();
}
outerFunc();
