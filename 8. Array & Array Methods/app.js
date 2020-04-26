// Create some arrays
const numbers = [23,54,63,44,4,45,6];
const numbers2 = new Array(23,4,56,73,2,99);
const fruit = ['apple', 'banana', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

console.log(numbers);
console.log(val);

// Get array length
val = numbers.length;
console.log(val);

// Check if is Array
val = Array.isArray(numbers);
console.log(val);

// get single value
val = numbers[3];
console.log(val);

// insert into array
numbers[2] = 100;
console.log(numbers);

//find index of value
val = numbers.indexOf(44);
console.log(val);

// MUTATING ARRAYS

// add on to the front
numbers.push(250);
console.log(numbers);

//add to the front
numbers.unshift(120);
console.log(numbers);

// take off from end
numbers.pop();
console.log(numbers);

//take off from the front
numbers.shift();
console.log(numbers);

// splice values
numbers.splice(1, 3);
console.log(numbers);

//reverse
numbers.reverse();
console.log(numbers);

//concatenate array
val = numbers.concat(numbers2);
console.log(val);

//sorting arrays
val = fruit.sort();
console.log(val);

val = numbers.sort();  //this will sort the array of numbers based on the left most digit of the number.
console.log(val);

// using the 'compare function'
val = numbers.sort(function(x, y){
  return x-y;
});
console.log(val);

// Reverse sort
val = numbers.sort(function(x, y){
  return y-x;
});
console.log(val);

// Find
function under50(num){
  return num < 50;
}
val = numbers.find(under50);
console.log(val);


