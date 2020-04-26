const color = 'green';

switch(color){
  case 'red':
    console.log('Color is Red');
    break;
  case 'blue':
    console.log('Color is Blue');
    break;
  case 'yellow':
    console.log('Color is Yellow');
    break;
  default:
    console.log('Other Color');
    break;
}

let day;

switch(new Date().getDay()){
    case 0:
      day = 'Sunday';
      console.log(`Today is ${day}`);
      break;

    case 1:
      day = 'Monday';
      console.log(`Today is ${day}`);
      break;

    case 2:
      day = 'Tuesday';
      console.log(`Today is ${day}`);
      break;

    case 3:
      day = 'Wednesday';
      console.log(`Today is ${day}`);
      break;

    case 4:
      day = 'Thursday';
      console.log(`Today is ${day}`);
      break;

    case 5:
      day = 'Friday';
      console.log(`Today is ${day}`);
      break;

    case 6:
      day = 'Saturday';
      console.log(`Today is ${day}`);
      break;
}