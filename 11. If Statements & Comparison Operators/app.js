//SYNTAX
// if(condition){
//   do this
// } else {
//   do this
// }

const id = 100;

// EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

//NOT EQUAL TO
if(id != 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if Undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// Greater or less than
if(id >= 200){
  console.log('Greater');
} else {
  console.log('Less');
}

// IF ELSE

const color = 'red';

if(color === 'red'){
  console.log('Color is red')
} else if(color === 'blue') {
  console.log('Color is blue')
} else {
  console.log('other color')
} 

//LOGICAL OPERATOR

const name = 'Akhil';
const age = 20;

// ADD &&
if(age > 0 && age <= 12){
  console.log(`${name} is a child`);
} else if(age > 12 && age < 20) {
  console.log(`${name} is a teenage`);
} else {
  console.log(`${name} is an Adult`)
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary Operator

console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without Braces
if(id === 100)
  console.log('Correct');
else
  console.log('Incorrect');