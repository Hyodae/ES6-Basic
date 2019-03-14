"use strict";


//////////////////////////////////////////////////
// 07 - Generators
console.log('\n\n#################################')
console.log ('07 - Generators\n');

function* sampleGenerator() {
    yield 'apples';
    yield 'bacon';
    console.log('ok, this is the line after bacon ...');
    yield 'corn';
}

let sample = sampleGenerator();
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next());
console.log('-----------');

function* getNextID() {
    let id = 0;
    while (id < 3) {
        yield id++;
    }
}

let createUser = getNextID();
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log('ok, I have to go do something else');
console.log(createUser.next().value);
console.log(createUser.next().value);



//////////////////////////////////////////////////
// 05 - Classes
// 06 - Inheritance
console.log('\n\n#################################')
console.log ('05 - Classes');
console.log ('06 - Inheritance\n');

class Person {

    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName() {
        console.log(this.name);
    }

    displayAge() {
        console.log(this.age);
    }


    displayWeight() {
        console.log(this.weight);
    }
}

class Programmer extends Person {
    constructor(name, age, weight, language) {
        super(name, age, weight);
        this.language = language;
    }

    displayLanguage() {
        console.log(this.language);
    }
}


let sally = new Person('sally Jones', '21', 89);

sally.displayName();
sally.displayAge();
sally.displayWeight();

let hyodae = new Programmer('Hyodae Kim', '89', 980, 'JavaScript');

hyodae.displayName();
hyodae.displayAge();
hyodae.displayWeight();
hyodae.displayLanguage();



//////////////////////////////////////////////////
// 04 - Spread Operator
console.log('\n\n#################################')
console.log ('04 - Spread Operator\n');

function addNumbers(a,b,c) {
    console.log(a + b + c);
}

var nums = [3,4,7];
addNumbers(nums[0], nums[1], nums[2]);
addNumbers(...nums);

var meats = ['bacon', 'ham'];
var food = ['apples', ...meats, 'kiwi', 'rice'];
console.log(meats);
console.log(food);


//////////////////////////////////////////////////
// 03 - Template Literals
console.log('\n\n#################################')
console.log ('03 - Template Literals\n');

let name = 'Hyodae';

console.log('My favorite person is ' + name + ' because he smells good');
console.log(`My favorite person is ${name} because he smells good`);

let a = 5;
let b = 7;

console.log(`My favorite person is ${a + b} because he smells good`);


console.log(`My favorite person is ${name} 
because he smells good`);



//////////////////////////////////////////////////
// 02 - Arrow Functions
console.log('\n\n#################################')
console.log ('02 - Arrow Functions\n');

function circleArea1(r) {
    var PI = 3.14;
    return PI * r * r;
}

let circleArea2 = (r) => {
    const PI = 3.14;
    return PI * r * r;
}

let circleArea3 = r => 3.14 * r * r;

console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea3(7));


//////////////////////////////////////////////////
// 01. let
console.log('\n\n#################################')
console.log ('01. let\n');

let movie = 'Good Will Hunting';

function theNotebook() {
    let movie = "The Notebook";

    return movie;
}

console.log(movie);
console.log(theNotebook());
console.log(movie);

function HyodaeFunction() {
    let isHorse = true;
    let saying = 'Bacon is good';

    console.log('\nBefore if:', saying);

    if(isHorse) {
        let saying = 'I am a horse';
        console.log('Inside if:', saying);
    }

    console.log('After if:', saying);
}

HyodaeFunction();