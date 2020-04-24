const num1 = 100;
const num2= 50;
let val;

//Simple math with numbers

val = num1 + num2;
console.log(val);

val = num1 - num2;
console.log(val);

val = num1 * num2;
console.log(val);

val = num1 / num2;
console.log(val);

val = num1 % num2;
console.log(val);




// Math Object

val = Math.PI; // Here Math is an object which has methods(like a function) and properties(like an attribute). PI wil give us value of pi.
console.log(val);

val = Math.E; // E will give us euler's number.
console.log(val);

val = Math.round(2.7); // this will round up to the nearest integer.
console.log(val);

val = Math.ceil(2.2); // this will round up always.
console.log(val);

val = Math.floor(2.8); // this will always round down.
console.log(val);

val = Math.sqrt(64);
console.log(val);

val = Math.abs(-3);
console.log(val);

val = Math.pow(8, 2);
console.log(val);

val = Math.min(2,33,4,5,66,-3);
console.log(val);

val = Math.max(2,33,4,5,66,-3);
console.log(val);

val = Math.random(); //This will generate a random number b/w 0 and 1.
console.log(val);

val = Math.floor(Math.random() * (20+1)); //This will help us to increase the range of the random numbers. this expression will give us random numbers between 0 and 20. and we will wrap this in floor to get integers.
console.log(val);