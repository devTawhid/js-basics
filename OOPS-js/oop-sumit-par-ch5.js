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

const classSakib = new PersonwithClass();
classSakib.name = "sakib";
console.log(classSakib);
