const firstName = 'Akhil';
const lastName = 'Jayan';
const age = 20;
const str = 'hello there my name is akhil';
const tags = 'web dev, web design, web apps';

let val;

val = firstName + lastName;
console.log(val);

//Concatenation

val = firstName + ' ' + lastName;
console.log(val);

// Append

val = 'Akhil ';
val += 'Jayan';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping

//val = 'That's awesome, I can't wait'; this will generate error as it will think that the string at s before awesome so we need to use escaping.
val = 'That\'s awesome, I can\'t wait';
// or another solution would be using double quotes.
console.log(val);

// Length

val = firstName.length; //this is a property not a method thats why we dont need parenthesis.
console.log(val);

// concat()
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
console.log(val);

val = firstName[2];  // index using
console.log(val);

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
console.log(val);

// charAt()
val = firstName.charAt('2');
console.log(val);

//get last char
val = firstName.charAt(firstName.length - 1);
console.log(val);

// substring()
val = firstName.substring(0,2);
console.log(val);

//slice()
val = firstName.slice(0,2);
val = firstName.slice(-3);
console.log(val);

//split()
val = str.split(' ');
console.log(val);

val = tags.split(',');
console.log(val);

// replace()
val = str.replace('akhil', 'arjun');
console.log(val);

//includes()
val = str.includes('hello');
console.log(val);