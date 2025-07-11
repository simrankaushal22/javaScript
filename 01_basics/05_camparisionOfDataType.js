//comparison of datatypes

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);  rules say we can not campair two datatype ,we can not find predict outcomes
// console.log("02">1);


/* the reason is that an equality check == and comparisons > <> =
<= work differently.
comparisons convert null to a number , treating it as 0.
thats why (3 )null >=0 is true and (1) null>0 is false
*/

//we should avoid this type of conversion becouse it create confusion

console.log(null>=0);
console.log(null==0);
console.log(null>0);

console.log(undefined=0);
console.log(undefined==0);
console.log(undefined>=0);

//===  it check the value more 

console.log("2"===2);



