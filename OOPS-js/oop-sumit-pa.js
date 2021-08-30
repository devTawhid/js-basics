///////////////////////////starting with a known way/////////////////////////

let person = {};

person.name = "tawhid";
person.age = "22";

person.sleep = function sleep(name) {
  console.log(name + " is sleeping");
};

person.eat = function eat(name) {
  console.log(name + " is eat");
};

person.coding = function coding(name) {
  console.log(name + " is coding");
};

//let's make a funciton out of it

function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.sleep = function sleep(name) {
    console.log(name + " is sleeping");
  };

  person.eat = function eat(name) {
    console.log(name + " is eat");
  };

  person.coding = function coding(name) {
    console.log(name + " is coding");
  };

  return person;
}

var tawhid = Person(tawhid, 22);
tawhid.sleep("tawhid");

console.dir(tawhid.sleep);

////////////////////////the next way/////////////////////////

const personMethods = {
  eat() {
    console.log("person is eating");
  },

  sleep() {
    console.log("person is sleeping");
  },
};

function Person(name, email) {
  let person = Object.create(Person.prototype);

  person.name = name;
  person.email = email;

  return person;
}

Person.prototype = {
  eat() {
    console.log("person is eating");
  },

  sleep() {
    console.log("person is sleeping");
  },
};

let tawhid = Person("tawhid", "satawhid");

// console.log(tawhid);
// tawhid.sleep();

///////////////////////////let's make little simpler///////////////////////////////

const captain = {
  name: "Mashrafee",
  age: 36,
  country: "Bangladesh",
};

const player = Object.create(captain);
console.dir(player);

//////////////////////////////////another way ////////////////////////////

function PersonwithNew(name, age) {
  // let person = Object.create(PersonwithNew);  note:if we use NEW keyword then we can skip these two lines(38,42 no line)
  this.name = name;
  this.age = age;

  // return this;
}

PersonwithNew.prototype = {
  eat() {
    console.log("the new person is eating");
  },
  sleep() {
    console.log("the new person is sleeping");
  },
};

// const newSakib = new PersonwithNew();
// newSakib.sleep();

///////////////////////////////////Another way/////////////////////////////////////////
class PersonwithClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("The eating method with class");
  }
  sleep() {
    console.log("The sleeping method with class");
  }
  play() {
    console.log("The playing method with class");
  }
}

// const classSakib = new PersonwithClass();
// classSakib.name = "sakib";
// console.log(classSakib);

/////////////////////////////some random example ////////////////////////////////////

console.dir(Array.prototype);
