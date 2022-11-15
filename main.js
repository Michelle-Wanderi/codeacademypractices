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


Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {                  //Concise body
	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());



//Nested for loop

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// //While loop
// 2.
// Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.
// Inside the block of your while loop, add the following line of code:
// currentCard = cards[Math.floor(Math.random() * 4)];
// Math.floor(Math.random() * 4) will give us a random number from 0 to 3. 
// We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.



const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

// Do while

// We’d like a program to simulate part of the cake-baking process. Depending on the recipe, 
// a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded,
//  and assign it a number value of your choosing.

// // The cups of sugar must be added to the batter one at a time.
//  Declare the variable cupsAdded and assign it the value 
// // We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0.

// // Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.

// // In order to help us visualize the output on each iteration of the loop, add a console.log within the do...while 
// block and log the value of cupsAdded.

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++

} while (cupsAdded < cupsOfSugarNeeded);

// For loop in array that has a break statement 
// the break statement exits the loop when the condition is met

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");


//For each method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));


//Map method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {      //Returns the first character in the string
      return animal[0];
});
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smalllNumbers = bigNumbers.map(bigNumber => {    //DIvides the number by 100
        return bigNumber / 100;
})


//Filter method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(randomNumber => {    //Returns numbers that are less than 250 in a new array
  return randomNumber < 250;
})


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(favoriteWord => {       //Returns the strings in the array that have more than seven characters
        return favoriteWord.length > 7;
})


//Find index method - Finds the location of an element in an array
const animalls = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant'
})

const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's';
})


//Reduce method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// //.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
// .map() executes the same code on every element in an array and returns a new array with the updated elements.
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
// .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
// .reduce() iterates through an array and takes the values of the elements and returns a single value.

//Creating objects
let fasterShip = {
  'Fuel Type' : 'Turbo Fuel',
  'color' : 'silver'
};     //Syntax for an object literal


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };
const isActive = spaceship['Active Mission']
let propName =  'Active Mission';
console.log(spaceship, 'Active Mission');    //Returns the value of the active mission property

//Including methods in an object
let retreatMessagee = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShipp = {
retreat() {
  console.log(retreatMessage);
}
};

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();


let spaceshipp = {
  passengers: [{name: 'Space Dog'}], //An array of objects
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];  //Nested access of properties

let firstPassenger = spaceship.passengers[0];



let spaceships = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;             //Reassigns the value to true
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)


//Looping through objects

// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}


let spaceshipa = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};


//Using this method
const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  }
 
};
 console.log(robot.provideInfo());


 const robott = {
  _energyLevel: 'high',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot.recharge ();
