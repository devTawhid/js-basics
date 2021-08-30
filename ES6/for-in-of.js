// for in is only for iteration over object properties
// for "of" is for all iterable stractures

// let arr = [1,2,3,4,5];

// for(element in arr){ //in = index in array
//     console.log(element);
//     console.log(typeof(element));
// }// it will print the index of the array as string

// for(element of arr){
//     console.log(element);
//     console.log(typeof(element));
// }// elemnts of the array as the type

let str = "I love me";

for(element in str){
    console.log(element);
}