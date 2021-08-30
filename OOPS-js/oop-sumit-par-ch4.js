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

const newSakib = new PersonwithNew();
newSakib.sleep();
