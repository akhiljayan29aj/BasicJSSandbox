const person = {
  firstName: 'Akhil',
  lastName: 'Jayan',
  age: 20,
  email: 'akhil@gmail.com',
  hobbies: ['music','anime','sketching'],
  address: {
    city: 'Delhi',
    country: 'India'
  },
  getBirthYear: function(){
    return 2020 - this.age;
  }
}

let val;

val = person;
console.log(val);

// Get Specific Value
val = person.firstName;
console.log(val);
val = person['lastName'];
console.log(val);
val = person.hobbies[1];
console.log(val);
val = person.address.country;
//or val = person.address['city];
console.log(val);
val = person.getBirthYear();
console.log(val);

const people = [
  {
    name: 'akhil',
    age: 20
  },
  {
    name: 'arjun',
    age: 16
  }
];

val = people;
console.log(people);

for(let i=0;i < people.length ;i++){
  console.log(people[i].name);
}