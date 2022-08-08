// Closures. 
// Steps to understand closures.
// 1). closure :- 30-40%
// 2). analyze :- 70-80%
// 3). real eg :- 100%

// We know Function can return function, array, object, string. 

// function fun1(){
//     return function(){
//         console.log("Hello");
//     }
// }

// const resfunc = fun1();
// console.log(resfunc);
// resfunc();


// Function with parameters returning function

// function func1(fName,lName){
//     return function(){
//         console.log(fName,lName);
//     }
// }

// const resfunc = func1("Pratik","Maru");
// console.log(resfunc);
// resfunc();

// // So here we now its expected output. But yaha bohot badi chij ho rhi hai isse hum analyze karke hi samjhege.
// // Phir humari najre khulegi and humae pata lagega ki humne analyze galat kia.  So chalo phir RAAZ se parda utha te hai.  Tan ta nan .... 🐱‍🏍 Phir pata chelga humne kya galat kia and phir hum closure k barae mai sikhege. 
  
// Timestamp :- 1:47:30 (min time required is:- 9 min at 2x speed) se dekhlio MUST. Nhi toh nhi samjhega. Ok to watch at 2x speed. 

// Closures :- Jsbhi ek function ek function ko return karta hai. toh woh function jo return ho rha hai woh local variable ko sath mai lekr return hota hai. Why ? Becoz this returned function knows that inside my code there is use of local variable and in future I will need this local variable. and this returned function local variable is know as closures. 

// Closures definition in JavaScript (English)
// => A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical enviornment). In other words, a closure gives you access to an outer function's scope from an inner function.


// Closure examples: 

// Example 1 :- 
// function hello(x){
//     const a = "varA";
//     const b = "varB";

//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans = hello("args");
// ans();   // here closures are :- [a,b,x] 


// Example 2 :- 
// Task 1 (given by harshit vashistha) :- 

// function myFunction(x){
//     return function(y){
//         return y**x;
//     }
// }

// // Short way to write above function.
// const myFunction = power => number => number ** power ;   // Haina yeh awesome 😁

// const square = myFunction(3);
// console.log(square(4));

// We'll see ekdum mast chij in JS which is known as Lambda calculus. 


// // Example 3 :-   
// function func(){
//     let flag = false;
//     return function(){
//         if(flag){
//             console.log("Mai already ek bar call ho chuka hoon re baba");
//         }
//         else{
//             console.log("Hii u called me");
//             flag = true;
//         }
//     }
// }

// const myFunc = func();
// myFunc();
// myFunc();
// myFunc();

// const myFunc2 = func();
// myFunc2();
// myFunc2();
// myFunc2();

// Now 2 major topics are left in JavaScript ie :- DOM (Document Object Model) and Asynchronous JavaScript.   