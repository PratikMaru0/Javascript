// Understand Callback 

// Timestamp :- 43:00 (JavaScript video Part 3)

// Callbacks hum asynchronous programming mai bahut jyada use karte hai. 

// But firstly lets understand callbacks using synchronous program.

// function myFunc(callback){   // this passed argument is the callback function.
//     console.log("Function is doing some 1");
//     callback();
// }

// function myFunc2(){
//     console.log("Function is doing task 2");
// }

// myFunc(myFunc2);  // here we are passing function as an argument (ie :- callback function) 

// We can also do like this. making anonymous function while passing arguments. 
// myFunc(()=>{
//     console.log("Function is doing task 3");
// })  // Boom we did it. 🙌

// Lets see one more example :- 

// function getTwoNumbersAndAdd(num1,num2,onSuccess,onFail){
    
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         onSuccess(num1,num2);
//     }
//     else{
//         // console.log("Wrong data type.");
//         onFail();
//     }
// }

// function addTwoNumbers(numb1,numb2){
//     console.log(numb1+numb2);    
// }

// getTwoNumbersAndAdd("10",20,addTwoNumbers);

// We know we can do like this. There is no need to make another function we can directly make anonymous function while passing an arguments.

// getTwoNumbersAndAdd("10",20,(num1,num2)=>{
//     console.log(num1+num2);
// }, () => {
//     console.log("sorry you have entered wrong data type.")
// });    // Boom kafi kaamal 😎 . Humne yaha do aninymous function banake do chije pass kari hai. 😎 Isnt its awesome. Maja Agaya.

// // This is the basic normal callbacks. 

// In next file we'll learn how we'll use callbacks in the asynchronous programming ....🐱‍🏍 
