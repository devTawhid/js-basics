// let name = {
//     firstName: "sultanul",
//     lastName: "Arafean",

//     printFullName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

let name2 = {
    firstName: "shamim",
    lastName: "pagla"
}

// //function borrowing
// name.printFullName.call(name2);


// the more general use case

let name = {
    firstName: "sultanul",
    lastName: "Arafean"
}

let printFullName = function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

let printFullNameAndHome = function(home){
    console.log(`${this.firstName} ${this.lastName} ${home}`);
}

let printFullNameAndHomeAndCountry = function(home, country){
    console.log(`${this.firstName} ${this.lastName} ${home} ${country}`);
}

//call
printFullName.call(name);//why name is linethrough? because name was a reserved word before.
printFullName.call(name2);
printFullNameAndHome.call(name, "Chuadanga");

//apply
printFullNameAndHomeAndCountry.apply(name, ["Chuaganga", "Bangladesh"]);

//bind
let printName = printFullName.bind(name2);
printName();