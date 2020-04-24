// Primitive Data Types

// -Strings
const name = 'Akhil Jayan';
console.log(typeof name);

// -Numbers [includes everything int float ]
const age = 20;
console.log(typeof age);

// -Boolean
const hasKids = true;
console.log(typeof hasKids);

// -null
const car = null;
console.log(typeof car);    // this will give us object which is a bug in JS.

// -undefined
let test;
console.log(typeof test);

// -Symbols
const sym = Symbol();
console.log(typeof sym);




// Reference Data Types - Objects

// -Arrays
const hobbies = ['movies','music'];
console.log(typeof hobbies);

// -Object Literals
const address = {
  city: 'Delhi' ,
  state: 'Delhi'
}
console.log(typeof address);

// -dates 
const today = new Date();
console.log(today);
console.log(typeof today);

// -functions
// -Anything else 



// JS is a dynamically typed value which means the data type is associated with the value not the variables. The same variable can hold multiple types without giving errors. We dont need to specify the types.

