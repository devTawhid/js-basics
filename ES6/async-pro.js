// // Async
// setTimeout(() => {
//    console.log('I am tawhid')
// // }, 3000);

// // // we can't store any value from asyncronus function
// // function sayMyName(name){
// //     let result;
// //     setTimeout(() => result = name, 3000);
// //     return result;
// // }

// // console.log(sayMyName("tawhid"))
 
// // call stack => web api => callback => event loop

// // AJAX

// const xhr = new XMLHttpRequest();
// xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/');

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             console.log(xhr.response)
//         }else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send();


// ***************************** net ninja ***********************************

// const request = new XMLHttpRequest();

// request.addEventListener( 'readystatechange', () => console.log(request,  request.readyState) );
// // "readystatechange" is a web api => (from what I got), that's why I couldn't able to find it on the w3's event page

// request.addEventListener( 'readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200){
//         console.log("request succeed");
//         console.log(request.responseText);
//     }else if(request.readyState === 4){
//         console.error("couldn't fatch");
//     }
// } );

// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
// request.send();

// https reponse statuses and meanding
// [100, 200) info response
// [200, 300) success
// [300, 400) redirection
// [400, 500) client error
// [500       server error


// make a reusable callback function

// let getTodos = (method, url, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener( 'readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200){
//             // console.log("request succeed");
//             // console.log(request.responseText);
//             callback(undefined, request.responseText);

//         }else if(request.readyState === 4){
//             // console.error("couldn't fatch");
//             callback('Could not able to fetch the data', undefined);
//         }
//     } );
    
//     request.open(method, url);
//     request.send();
// }

// getTodos('GET', 'https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
//     console.log('Callback is fired');
//     console.log(err);
//     console.log(data);
// } );

// getTodos('GET', 'https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
//     console.log('Callback is fired');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// } );


// JSON => String


// let getTodosJSON = (method, url, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener( 'readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText); // here is the change.
//             callback(undefined, data);

//         }else if(request.readyState === 4){
//             // console.error("couldn't fatch");
//             callback('Could not able to fetch the data', undefined);
//         }
//     } );
    
//     request.open(method, url);
//     request.send();
// }

// getTodosJSON('GET', 'https://jsonplaceholder.typicode.com/todos/', (err, data) => {
//     console.log('Callback is fired');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// } );

// getTodosJSON('GET', 'todos/shamim.json', (err, data) => {
//     console.log('Callback is fired');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// } );

// //inputing multiple jsons and wanted to get the result one after in ordered way => before promis

// getTodosJSON('GET', 'todos/shamim.json', (err, data) => {
//     console.log(data);

//     getTodosJSON('GET', 'todos/todos.json', (err, data) => {
//         console.log(data);

//         getTodosJSON('GET', 'todos/tawhid.json', (err, data) => {
//             console.log(data);

//         } );

//     } );

// } );

// promise to organize the above call

// const promises0 = function(){
//     return new Promise(function(resolve, reject) {
//         resolve(data);
//         reject(data);
//     });
// };

// const promises1 = () => { 
//     return new Promise((resolve, reject) => { 
//         resolve(data);
//         reject(data);
//     });
// };

// const promises = () => { return new Promise((resolve, reject) => { resolve(data); reject(data)}) };

// // calling promis
// // 1st way 
// promises().then( callback_fun, callback_fun );

// promises().then( (data) =>{ console.log(data); }, (err) => { console.log(err); });

// promises().then( data => { console.log(data); }, err => { console.log(err); });

// // 2nd way ***********
// promises().then( callback_fun ).catch( callback_fun );

// promises().then( data => { console.log(data); }).catch( err => { console.log(err); });

// //now using promis
// let getTodos = (method, url, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener( 'readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200){
//             // console.log("request succeed");
//             // console.log(request.responseText);
//             callback(undefined, request.responseText);

//         }else if(request.readyState === 4){
//             // console.error("couldn't fatch");
//             callback('Could not able to fetch the data', undefined);
//         }
//     } );
    
//     request.open(method, url);
//     request.send();
// }//instead of this we can use

// let getTodos = (method, url) => {
//     const request = new XMLHttpRequest();

//     return new Promise( (resolve, reject) => {

//         request.addEventListener( 'readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 //callback(undefined, request.responseText);
//                 resolve(data);
    
//             }else if(request.readyState === 4){

//                 //callback('Could not able to fetch the data', undefined);
//                 reject('there is error');
//             }
//         } );
        
//         request.open(method, url);
//         request.send();
//     });
// };

// getTodos('GET', 'https://jsonplaceholder.typicode.com/todos/').then( data => {console.log('promis resolved', data)}).catch( () => {console.log('error has occurred'); });


// regular chaning 

// getTodosJSON('GET', 'todos/shamim.json', (err, data) => {
//     console.log(data);

//     getTodosJSON('GET', 'todos/todos.json', (err, data) => {
//         console.log(data);

//         getTodosJSON('GET', 'todos/tawhid.json', (err, data) => {
//             console.log(data);

//         } );

//     } );

// } );

// chaning promises

// getTodos('GET', 'https://jsonplaceholder.typicode.com/todos/1').then( data => { 
//     console.log('promis 1 resolved',data);
//     return getTodos('GET', 'todos/tawhid.json').then( data => {
//         console.log('promis 2 resolved', data);
//         return getTodos('GET', 'todos/todos.json').then( data => {
//             console.log('promis 3 resolved', data);
//             return getTodos('GET', 'todos/shamim.json').then( data => {
//                 console.log('promis 4 resolved', data);
//             })
//         })
//     })
//  }).catch( err => { console.log(err); });


//  getTodos('GET', 'https://jsonplaceholder.typicode.com/todos/1').then( data => { 
//     console.log('promis 1 resolved',data);
//     return getTodos('GET', 'todos/tawhid.json').then( data => {
//         console.log('promis 2 resolved', data);
//         return getTodos('GET', 'todos/todos.json').then( data => {
//             console.log('promis 3 resolved', data);
//             return getTodos('GET', 'ttodos/shamim.json').then( data => {
//                 console.log('promis 4 resolved', data);
//             }).catch(err => { console.log("this is a goooooooooooood error"); })
//         })
//     })
//  }).catch( err => { console.log(err); });


// // the newest way fatch api
// fetch('todos/tawhid.json').then( response => {
//     console.log('resolved', response);
//     return response.json();
// }).then( data => {
//     console.log('resolved', data);
// }).catch( err => {
//      console.log('rejected',err); 
// });
 

const getTodos = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todo0s/');

    if(response.status !== 200){
        throw new Error('can not fetch the data');
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved', data) )
    .catch(err => console.log('An error occurred:', err.message) );
