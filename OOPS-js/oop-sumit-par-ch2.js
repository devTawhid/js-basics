const personMethods = {
  eat() {
    console.log("person is eating");
  },

  sleep() {
    console.log("person is sleeping");
  },
};

function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.sleep = personMethods.sleep;

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
