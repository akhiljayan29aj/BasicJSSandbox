// var, let, const

var name = 'Akhil';
console.log(name);

name = 'Arjun';
console.log(name);

// Init var

var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// // letters, numbers, _, $
// // can not start with number

// // Multi word vars

var firstName = 'akhil'; //Camel case
var first_name = 'arjun' //Underscore
var FirstName = 'pandey' //Pascal case
var firstname;

// // LET
let name1;
name1 = 'Akhil';
console.log(name1);

name1 = 'Arjun';
console.log(name1);

// CONST
const name2 = 'Akhil';
console.log(name2);
// Can not reassign
// name2 = 'Arjun'
// Have to assign a value
// const greeting;

const person = {
  name: 'Akhil',
  age: 20
}

// we can mutate name and age but cannot resign person

person.name = 'Arjun';  // this is called mutating
person.age = 16;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

// numbers = [1,2,3,4,5,6];  this wil generate an error as const can't be reassigned

console.log(numbers);


