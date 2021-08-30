// // if else
// if(n % 2 === 0) {
//     str = "EVEN";
// } else{
//     str = "ODD";
// }
// // instead ternary operators
// let result = n % 2 === 0 ? /*true side*/"even":/*false side*/ "odd";

// // function
// function add(a,b){
//     return a + b;
// }

// // instead arrow function
// let fun = (a, b) => {
//     let c = a + b;
//     return c;
// }

// let add = (a,b) => a + b;
// let sqrt = a => a * a;

// 1. arrow function has no "this" built in to it. it always refers to it's "parents" this. We also can't use "apply", "call", or "bind" to attach arrow function to and other object or execution context. 
// 2. arrow function also don't need to return anything;

// some complecated arrow function implementations 
const accumulate = arr => arr.map( (sum => value => sum += value) (0) );

// const accumulateM = function (arr){
//     return arr.map( (function (sum){return function (value){return sum += value; } }) (0))
// }

function accumulateSh(arr){
    arr.forEach((function(sum){ (function(value){/*return*/ console.log(sum += value); })() }) (0))
}   


console.log(accumulateN(arr));

// console.log( (x = () => 10) () );

// // convert it to normal function
// const accumulate = function(arr){
//     arr.map({function(){
//         console.log(value);
//     }})
// }

var arr = [1,2,5,6];
// // accumulate(arr);

// arr.map(function(){
//     console.log(value);
// })

// console.log(["1", "2", "3"].map(parseInt))

