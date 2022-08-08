// THIK HAI. 

// Analyzing. 

// let numbers = [1,2,3,4,5,6,7,8];

// See when we use "." operator in numbers it gives huge numbers of methods. So yeh methods kaha se aa rhe hai. Yeh methods prototype se aa rhe hai. Lekin ek min ek min tumne toh kaha tha prototype toh sirf function ka hi hota hai. Haan sahi hai Dekh jabhi bhi hum array banate hai toh JavaScript iss tarike se banata hai array ko. 
// let numbers = new Array(1,2,3);   // this is how JS make the array. hum normal syntax ka use karke banate hai array ko becoz woh chota syntax hai but backend mai aise hi hota hai using new keyword its made.

// And we knew what new do. 
// console.log(numbers);  

// Now lets see the prototype of an Array 
// console.log(Array.prototype);   // So is prototype mai sarae methods padae hue hai jo hum use karte hai in JS. 
// console.log(Array.isArray(Array.prototype));  // So yeh array de rha hai.
 
// let nums = [1,2,3,4,5,6];
// console.log(Object.getPrototypeOf(nums));
// console.log(Array.isArray(Object.getPrototypeOf(nums)));  // Okay so this is also an array.

// function hello(){
//     console.log("Sdfc");
// }

// hello.prototype = ["sdfg"];  // we can also set the protoype value of an prototype.
// hello.prototype = [];  // we have set an empty array to the function "hello" protoype.
// console.log(hello.prototype);

// hello.prototype = [];   // Firstly we need to set an empty array. to push an data.
// hello.prototype.push("1");     // using push method to add an value to the prototype.
// console.log(hello.prototype);