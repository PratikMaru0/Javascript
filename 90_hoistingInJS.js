// Humne thoda sa overview dekha tha hoisting ka in 1st part. 
// If not remember plz refer file no :- 41

// Hoisting is nothing but during  creation phase of the global execution yeh variables wagero ki space assign ho jati hai in memory but value code execution k waqt set hogi. Right now during global execution creation variables ki value undefined set hogi only in the case of declaration of variable using var (const,let mai uninitialized set hogi value and it will give an error also.). Aisa likha hai ECMAScript k official documentation mai. and aisa hi ho rha hai. 

// console.log(num);   
// var num = 12;

// Now we know let/ const/ function expresion/ arrow function  alag tarike se behave karte hai so usme kya hoga ?  
// Lets see iske barae mai baat karte hai.

// Now lets work with function expression using "var" keyword.

// console.log(myFunc);  // Output is coming undefined.

// Dekh var use kia hai maine.
// var myFunc = function(){
//     console.log("Hello ");
// } 

// console.log(myFunc);

// Dekh humne jo function banaya hai usse humne "var" keyword se banaya hai so humane pata hai undefined set hojayega. But in previosus eg :- function undefined set nhi ho rha tha. function mai pura ka pura code hi aa ja rha tha becoz we used function declaration method to declare the function . Did you got the difference ? Yeah man I got it. 🐱‍🏍 Now this function will be treated like a variable only becoz humne isse var use karke banaya hai.

// Now lets see "let"

// console.log(fName);   // During creation of the global context let k case mai unki value kuch nhi hogi so basically they are uninitialized. Isliye yeh access nhi kr pa rha whereas in var it was set to undefined. 
// let fName = "Pratik";
// const fName = "Pratik"; // In const also we'll get same error. Becoz const mai toh hume declare bhi karna padta hai sirf initialization se kaam nhi chal sakta na. 
// console.log(fName);

// kya let and const ki hoisting hoti hai ? 
// Ans :- Yes, let and const ki hoisting hoti hai. Pehli line execute karne se pehe hi let and const variable ki space allocated hoti hai and its set uninitialized. 

// TDZ :- Temporial Dead Zone
// Jabhi bhi let variable ki value uninitialized rahi usko hum bol sakte hai. Temporial Dead Zone. 

// TODO: FIXME: Revise chalu hoega from 1:08:00. Must watch it in 1.5x speed. 

