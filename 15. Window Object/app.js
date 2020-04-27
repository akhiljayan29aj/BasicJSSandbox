// WINDOW METHODS / OBJECTS / PROPERTIES

// Console Log
// window.console.log(123);

// Alert
// window.alert('Hello');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else{
//   console.log('NO');
// }

let val;

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;
console.log(val);

//inner height and width
val = window.innerHeight;
val = window.innerWidth;
console.log(val);

// Scroll Points
val = window.scrollX;
val = window.scrollY;
console.log(val);

// Location Object
val = window.location;
val = window.location.hostname;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.href;
console.log(val);
val = window.location.search;
console.log(val);

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// HISTORY OBJECT

// window.history.go(-2);
val = window.history.length;
console.log(val);

// NAVIGATOR OBJECT

// val = window.navigator;
// console.log(val);

val = window.navigator.appName;
console.log(val);

val = window.navigator.appVersion;
console.log(val);

val = window.navigator.userAgent;
console.log(val);

val = window.navigator.platform;
console.log(val);

val = window.navigator.vendor;
console.log(val);

val = window.navigator.language;
console.log(val);