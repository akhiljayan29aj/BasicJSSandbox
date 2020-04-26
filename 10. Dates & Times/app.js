let val;

const today = new Date();

val = today;
console.log(typeof val);
console.log(val);

// Ways to type dates and time
let birthday = new Date('november 21 1999 12:15:11');
birthday = new Date('11/21/1999 12:15:11');
val = birthday;
console.log(val);

// Month
val = today.getMonth(); // the months are stored as array hence jan starts from 0
console.log(val);

// Date
val = today.getDate();
console.log(val);

// Day 
val = today.getDay(); // sunday = 0 
console.log(val);

// Year
val = today.getFullYear();
console.log(val);

// Hours
val = today.getHours();
console.log(val);

// Minutes
val = today.getMinutes();
console.log(val);

// Seconds
val = today.getSeconds();
console.log(val);

// Milliseconds
val = today.getMilliseconds();
console.log(val);

//Time Stamp
val = today.getTime();
console.log(val);

// Changing 
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1998);
birthday.setHours(3);
birthday.setMinutes(38);
birthday.setSeconds(30);
console.log(birthday);