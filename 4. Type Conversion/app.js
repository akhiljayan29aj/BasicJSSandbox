let val;

// Number to String
val = String(555);
val = String(4+4); // this will give the lenght=1 as 4+4 is 8 and it will give use the length of the computed value.
console.log(val);
console.log(typeof val);
console.log(val.length);

// Bool to String
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to String
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

// Array to String
val = String([1,2,3,4]); // this will include the commas as well so the length will be 7.
console.log(val);
console.log(typeof val);
console.log(val.length);

// toString() Method
val = (5).toString();
val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

// String to number
val = Number('5');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)); // this will fix the decimal of a number to 2 decimals

val = Number(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(false);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number('hello');
console.log(val);      // this will give us NaN which is Not a Number. This happens when a value tries to parse as a number but cannot.
console.log(typeof val);
console.log(val.toFixed());

val = Number([1,2,3,4]);
console.log(val);    // this will also give back NaN
console.log(typeof val);
console.log(val.toFixed());

val = parseInt('100.31'); //This will parse the string to a int.
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = parseFloat('100.32'); //This will parse the string into float.
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//Type coercion: In this the JS converts the type itself
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);  // this will give ous a string as the val 2 is coerced into a string by JS and concatenated to give 56 which is in the form of a string.
console.log(typeof sum);


