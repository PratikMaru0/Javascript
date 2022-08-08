// Hoisting (means function ko call karna declaration k pehle .)

// Block No :- 1

// hello();   // Calling of the function before declaration is allowed in JS. Only when function is made using function declaration. It wont work in case of function expression see in Block No :- 2

// function hello(){
//     console.log("Hello Im Pratik");
// }

// Block No :- 2

// hello();  // In case of function expression we cant call function before declaring. It will give u an error.

// let hello = function(){
//     console.log("Hello Im Pratik");
// }


// Block No :- 3
// hello();   // In this arrow function also calling function before the declaration is not allowed. It will give u an error. So don't try to do this CIRCUS. 😂

// let hello = () => {
//     console.log("Hello Im Pratik");
// }

// TODO: This behaviour in JavaScript is known as Hoisting. 

// Lets see some more :- 
// console.log(hello);   // It will give u an output :- undefined
// var hello = "Hello world";
// console.log(hello);  // Here we know it will work perfectly.

// But this is not the case with let and const
// console.log(hello1);  // It will give you an error.
// let hello1 = "Hello world";

// console.log(hello2)  // In const It will give you an error.
// const hello2 = "Hello World";

// FIXME: Humae yeh chije pata honi jaruri. We'll learn this in future more. Timestamp of yt video :- 5:29:00 Part 1.



