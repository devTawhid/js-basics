// //Symbol
// var symbol1 = Symbol('symbol1');
// var symbol2 = Symbol.for('symbol2');

// var symbol3 = Symbol.for("symbol2");
// var symbol4 = Symbol();

// console.log(symbol2 === symbol3)
// console.log(symbol1, symbol2, symbol3)

// var cricket = Symbol.for("tawhid");

// var ojbect = {
//     name: "sakib",
//     [cricket]: "bangldesh"
// }

// console.log(ojbect);

// var myArray = [1,2,3];

// console.log(myArray.includes(5));
// console.log(myArray["includes"](5));//symbol has been used here

// let object = {
//     cowboy: "😎",
//     nerd: "😥",
//     smiling: "😃"
// };

// for(let i in object) {
//     console.log(object[i]);
// }

// String.prototype[Symbol.iterator] = function() {
//     let count = this.length;

//     return {
//         next() {
//             if(count > 0) {
//                 count--;
//                 return {done: false, value: 'js'};
//             }
//             return {done: true};
//         },
//     };
// };

// // console.log([..."hello"]);

// function range(start, end, step){

//     let count = start;
//     return {
//         [Symbol.iterator]: function(){
//             return {
//                 next(){
//                     let result;
//                     if(count <= end){
//                         // count = count - step;
//                         result = {done: false, value: count};
//                         count = count + step;
//                         return result;
//                     }
//                     return {done: true};
//                 },
//             };
//         },
//     };
// }

// // turning the above to arrow function
// let rangeA = (start, end, step) => {
//     let count = start;
//         return {[Symbol.iterator] : () => next = () =>  {
//             let result;
//             if(count <= end){
//                 // count = count - step;
//                 result = {done: false, value: count};
//                 count = count + step;
//                 return result;
//             }
//             return {done: true};
//         }
//     }
// }

// // console.log([...range(1,20000000,2)])

// let number = [1, 2, 3];
// let iterator = number[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //genetor

// function* genetor(){
//     yield 1;
//     yield 1;
//     yield 1;
//     yield 1;
//     return "i am done";
//     yield 1;
// }

// //

// function* range(start, end, step){
//     let current = start;

//     while (current <= end){
//         yield current;
//         console.log(`exection checking ${current}`)
//         current += step;
//     }
// }

// var iterator = range(1, 1000, 2);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // video link: https://youtu.be/DNC6MxpCueY?t=2168 video-time 36:08

function* genetor(a, b) {
  let k = yield a + b;
  let m = yield a + b + k;

  yield a + b + k + m;
}

var gen = genetor(10, 20);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
