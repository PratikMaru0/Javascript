// Iterables 

// Whats Iterables ? 
// -> Iterables are the ones jispe hum for of loop laga sakein for eg:- String, Array

// Strings are iterables.
// const fName = "Pratik";
// for(let ch of fName){
//     console.log(ch);
// }


// Arrays are iterables.
// const arr = [1,2,3,4];
// for(let a of arr){
//     console.log(a);
// }


// TODO: Object are not iterables. We cant iterate objects. 
// let users = {
//     key1 : "value1",
//     key2 : "value2",
// }
// It will give you an error becoz objects are not iterable.
// for(let user of users){
//     console.log(user);
// }


// Array like Objects: jinke pass length property hoti hai aur jinko hum index se access kr sakte hai. 
// for eg:- String 

// So in interview one can ask kya string array like object hai ? 
// So answer is yes. String is array like objects becoz it has length property and we can access it using index.
// const fName = "Pratik";
// console.log(fName.length);
// console.log(fName[2]);

// **** So yeah this is array like object. **** 