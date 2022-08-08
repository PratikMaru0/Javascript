// Lexical Enviornment and Scope chain

// Here we'll see what is Lexical Enviornment and scope chain 

const lName = "Maru";    // 1st line is simple we know how this is going to work in global execution context. 

// 2nd line here we are using function expression to create an function. So iski printName ki value set hojayegi undefined becoz we are using function expression and this things we know. 
const printName = function(){
    const fName = "Pratik";
    console.log(fName);
    console.log(lName);
}

// 3rd line :- So here we have to undestand whats happening and we'll learn more about lexical Enviornment and Scope chain.
printName();

// 3rd line explanation.
// we are calling function. So naya function execution context create hoga and idhar hi function k andar ka part execute hoga. So how this function code will execute. 
// fName vala toh simple hai const use kr rha hai so uninitialized at local memory creation phase and fname = "Pratik" at local code execution phase. 
// console.log(fName); Yeh wala line toh execute hojayega ache se.
// console.log(lName); Yeh wala line lname toh hai nhi function k andar define so yeh bahar jakr search karega kya lName naam ka koi variable hai if yes then lekr aao and print it. yeh apne parent mai dekhte jayega agar nhi mila toh uss parent k parent mai dekhega yeh tab tak search karega jab tak global context mai nhi ajata uske baad nhi mila toh undefined / error print kar dega as per data type used for creating a variable. 