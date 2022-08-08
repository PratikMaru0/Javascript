// undefined 
// let fName;   // undefined.
// console.log(fName);

// const fname;   // its not valid hum jabhi bhi constant define karte hai toh humae usse assign karna ho padega. 

// null
// let age = null;
// console.log(typeof age);   // its object type. 
// console.log(typeof null);   // its bug in javascript. So you will wonder why JS bug is not fixed. Its not fixed becoz lakhs of people has written their code by considering this bug. If its fixed then existing codes ko update karna padega. 

// BigInt
// let myNum = 12;
// console.log(myNum);
// console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991 :- this is the maximum number we can store in the normal variable. 

// let myNewNum = BigInt(90071992547409922345678537654);
// let myNewNum1 = 90071992547409922345678537654n;   // this is another way to define BigInt number. 
// console.log(myNewNum);
// console.log(myNewNum + myNewNum1);

// But we can't perform normalNum + BigIntNum 
// let num = 10;
// console.log(num + myNewNum);  // Error this is not allowed. 