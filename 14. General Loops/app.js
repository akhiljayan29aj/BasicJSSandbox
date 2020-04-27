// FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favourite number');
    continue;
  }

  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log('Number ' + i);
}

// WHILE LOOP

let i = 0;

while(i < 10){
  console.log('Number' + i);
  i++;
}

// DO WHILE LOOP
i = 0;

do{
  console.log('Number' + i);
  i++;
}
while(i < 10);

// Loops Through Array

const cars = ['Ford','Chevy','Honda','Toyota'];

for(i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// forEach() FOR ARRAY LOOP

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
})

// MAP

const users = [
  {id: 1, name: 'Akhil'},
  {id: 2, name: 'Arjun'},
  {id: 3, name: 'Alankrit'}
];

const ids = users.map(function(user){
  return user.id;
})

console.log(ids);

// FOR IN LOOP

const user = {
  firstName: 'Akhil',
  lastName: 'Jayan',
  age: 20
}

for(let x in user){
  console.log(`${x} : ${user[x]}`)
}