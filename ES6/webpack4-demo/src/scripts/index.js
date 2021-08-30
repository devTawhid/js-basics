import '../styles/index.scss'

import { sum, sub  } from './math'

let age = 23;
let name = "tawhid";

// console.log(`Age is ${age} name is ${name.padEnd(15)}. I'm${age < 18 ?'not': ''} an adult`);

// console.log(name.padStart(16))


// function sum(...rest){

// }

let obj = {
    a:1,
    b:3
}

// let obj2 = {
//     ...obj
// };

//
const arr = [1, 2, 3]

function createIterator(collection){

    let i = 0;
    return {
        nexxt() {
            return {
                done: i>= collection.length,
                value: collection[i++]
            }
        }
    }
}

// let iterate = arr[Symbol.iterator]();

// let iterate = createIterator(arr);
// console.log(iterate.nexxt());
// console.log(iterate.nexxt());
// console.dir(iterate.nexxt);

// let iterate = arr[Symbol.iterator]();

let str = 'TEXT';
// let iterate = str[Symbol.iterator]();

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

const obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,

    next(){

    },
    prev: function(){

    }
}


for(let i in obj2){
    console.log(obj2[i]);
}









