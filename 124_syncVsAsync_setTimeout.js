// Synchronous programming VS Asynchronous programming.

// Synchronous programming :- Jitna bhi abhi tak humne JavaScript mai programming ki hai woh synchronous hi hai. Synchronous means code line by line execute hoga means suppose there is 10 lines of code and our control is in 5th line and 5th line is taking to much time so control will not jump to 6th line it will first complete 5th line of code and then it will move to 6th line of the code.  Lets see below code.
// console.log("Script starts");
// for(let i=0;i<1000000000;i++){
// }
// console.log("Scripts end");
// You can see for loop is taking time so control will wait till the for loop code is completed successsfully after completing it will execute below line of code. JavaScript is single threaded language means no parallel code execution. Ek hi baar ek code chalega line wise. Isme problem kya hai ? => Isme yeh problem hai ki yeh for loop wala code humare niche wale code ko execute honae se rok rha hai jo ki fast execute hoga. So we can call this "for loop" code blocking code.

// So now if in interview someone asks JavaScript is synchronous programming language or asynchronous progrmming language ? 
// Ans => JavaScript is synchronous programming language and its single threaded programming language. 

// Isliye humne phir asynchronous programming language k barae mai baat karna start kari. 

// So now one question arises if JS is synchronous programming language so how we can use asynchronous in JS we'll talk/see about this in a while in detail. 

// Now coming to Asynchronous Programming Language.

// Lekin usse pehle hum setTimeOut dekhte hai 
// console.log("script starts");
// // This setTimeout will take function and time as an arguments (1000 === 1 second)
// setTimeout(()=>{
//     console.log("Inside Set Timeout")
// },3000); // Yes its taking time but this code is not blocking the below code execution. 
// console.log("Script end");

// So this is not the phenomena in synchronous programming language in synchronous programming language code line-by-line execute hota hai but here code toh line-by-line execute nhi ho rha so this is the asynchronous programming language. If some code is taking time go to next line and execute below lines of code

// TODO: FIXME: (MANDATORY) MUST WATCH :- Part 3 JS Timestamp :- 8:10 (At 2x speed).

// setTimeout :- Functionality is provided by the browser not JavaScript.

// Analyse below code 

// console.log("Script starts");
// setTimeout(()=>{
//     console.log("Hello");
// },0); // Notice :- here we are waiting 0 miliseconds. 

// for(let i=0;i<100;i++){
//     console.log("...");
// }
// console.log("Script end");

// Dekha jabhi bhi humne setTimeout function lagaya toh yeh last mai hi run hua whether its waiting 1000 milliseconds or 0 milliseconds. // So iska exlanation harshit bhai ne dia hai ache se aso plz upar die gaye timestamp pe jao and process ko samjho. Timestamp : 17:00

// Here when we are passing 1000 milliseconds its minimum time required hai jyada time bhi lag sakta hai but Languages are fast in execution we dont see any major difference. 

// Conclusion:- So we can say that setTimeout() is not the blocking code. Means its not blocking the execution of the further code below setTimeout() function. 😉✌

//  Now setTimeout gives us ID in return. 

console.log("Script start");

const id = setTimeout(()=>{
    console.log("NisaNisaNisa");
},1000);

// console.log(id);  // Only if we run this in chrome console we will get ID. Here we are storing the id so that we can clear the time of the setTimeout function.

// Lets clear the time of the setTimeout.
clearTimeout(id);   // Boom after clearing the time of the setTimeout function. Function didnt run. Simply it means abhi mujhe yeh function run nhi karna 👀

console.log("Script end");
// So I hope apko yeh setTimeout and clearTimeout samaj aa gaya hoga.