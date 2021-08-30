// curring 
// using closers
let multiply = function(a){
    return function(b){
        console.log(a + b);
    }
}
let newmultiply = multiply(2);
newmultiply(3);
//closer

// binding 
function a(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}

let multiply = function(a ,b){
    return a + b;
}


let multiply2 = multiply.bind(this, 3);

// let multiply = function(b){
//     let a = 3;
//     return a + b;
// }

multiply2(5);