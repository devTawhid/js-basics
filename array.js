// push, pop, slice, unshift etc
{
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //adds a value at the end
// arr.push(555555);

// // removes a value at the end
// arr.pop();

// //adds a value at the starting
// arr.unshift(9999999);

// // removes a value at the starting
// arr.shift();

// //splice method
// arr.splice(
//   /*starting index*/ 3,
//   /*delete count*/ 5,
//   /*the values we want to insert*/ 111
// );

// //just deleting values from array
// arr.splice(2, 7);

// // console.log(arr);
}

// forEach: point to be noted
/********* 
 * 1. it does NOT "RETURN"s anything
 * 2.(not sure) it modefies the original array
*/
{
// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// let m = arr.forEach(function(value, index, arr){
//   console.log(value, index, arr);
//   return sum += value; // it will not work; 
// });

// proof of 2
// console.log(arr);

// let vale = arr.forEach(function(value){
//   value += 100;
//   console.log(value);
//   return value; // didn't work
// })

// console.log(arr);
// console.log(vale); // so this part is showing undefined
// 🙄 it actually didn't modefied the original array. What the hack!!!!!!!!!!!

// console.log(m);
// console.log(sum);

// implementation of forEach for better understanding

// let MyforEach = function(arr, callback) {

//   for(let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }

// }

// MyforEach(arr, function(value, ind, arr) {
//   console.log(arr);
// });

// MyforEach(arr, val => console.log(val));
// MyforEach(arr, (val, ind, arr) => console.log(arr));
}

// map: point to be noted
/***********
 * 1. it can "RETURN"
 * 2. it don't modefies the original array instead it creates new array
 */
{
// let arr = [1, 2, 3];

// // let sqrArr = arr.map(function(val) {
// //   // console.log(val);
// //   return val;
// // });

// // console.log(sqrArr);

// let value = arr.map(function(val) {
//   // console.log(val, ind, arr);
//   // return val * 2
// });

// console.log(value);

// // implementation for better understanding
// function Mymap(arr, callback){
//   let newArr = [];
//   for(let i=0; i<arr.length; i++){
//     let temp = callback(arr[i], i, arr);
//     newArr.push(temp);
//   }
//   return newArr;
// }

}

// filter: point to be noted
/*********
 * 1. returns something after filtering with some condition
 */
{
let arr = [4, 5, 6, 7, 8, 9];

let arr2 = arr.filter(function(value){
  return value % 2 === 1;
});

console.log(arr2);

// implementation for better understanding
// function filterr(arr, cb){
//   let arr2 = [];

//   for(let i = 0; i < arr.length; i++){
//     if(cb(arr[i],i,arr)){
//       arr2.push(arr[i]);
//     }
//   }
//   // console.log(arr2);
//   return arr2, i, arr;
// }

// let arr2 = filterr(arr, function(value){ return value % 2 == 0; });

// console.log(arr2);
// }

// sort: its sorts an array
/**********
 * 1. it sorts the ORIGINAL ARRAY and returns the sorted array
 */
{
  let arr = [3, 6, 3, 12, 9, 0];

// arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// arr.sort((a, b) => a > b ? 1 : -1);
// console.log(arr);
}

// reduce: 
/**********
 * 1. it gives two values prev and current value to work with in the 
 * callback function
 */
{
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let sum = arr.reduce((prev, cur) => prev + cur, 100);
// console.log(sum);

// let max = arr.reduce((prev, cur) => Math.max(prev , cur));
// console.log(max);

// // implementation for better understanding

// function MyReduce(arr, cb, acc = 0){
  
//   for(let i = 0; i < arr.length; i++){
//     acc = cb(acc, arr[i]);
//   }
//   return acc;
// }

}