// Gloabl Scope
var a = 1; //Changes when changed in the block scope
let b = 2;
const c = 3;

console.log('Global Scope :', a, b, c);

function test(){
  // Function Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope :', a, b, c);
}

test();

if(true){
  // Block Scope
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('If Scope :', a, b, c);
}

for(let b= 0; b<10; b++){
  console.log(`loop: ${b}`);
}

for(var a= 0; a<10; a++){
  console.log(`loop: ${a}`);
}

console.log('Global Scope for a changed because it is var but let and const doesnot change :', a, b, c);