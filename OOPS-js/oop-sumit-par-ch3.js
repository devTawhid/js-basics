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
