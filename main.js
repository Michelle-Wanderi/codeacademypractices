//Use of conditional statements, declaration of variables and use of switch case

let userName = 'Michelle';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will i get a job next year ';
console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';
switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  case 6:
  eightBall = 'Outlook not so good';
  case 7:
  eightBall = 'Signs point to yes';
}
console.log( `Magic 8 ball says -${eightBall}`);


let raceNumber = Math.floor(Math.random() * 1000);

const age = 20;
let early = true;
if (age > 18 && early){
  raceNumber += 1000;
} 
if (age > 18 && early) {
  console.log(`Your race starts at 9.30a.m , your race number is ${raceNumber}`);
}
else if( age > 18 && !early){
  console.log(`Your race starts at 11.00a.m , your race number is ${raceNumber}`);
}
else if( age < 18){
  console.log(`Your race starts at 12.30p.m , your race number is ${raceNumber}`);
}
else if(age == 18){
  console.log('Report to the registration desk');
}