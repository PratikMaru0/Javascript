// Pehle humne baat ki thi primitive data types ki. Ab hum reference types ki baat karenge. 

// Now whats primitive data types :- The predefined data types provided by javaScript-language are known as primitive data types. Primitive data types are also known as in-built data types. 
// 1). String 
// 2). Number
// 3). BigInt
// 4). Boolean
// 5). Undefined
// 6). Symbol
// 7). NULL

// Non-primitive data types / Reference data types :- The data types that are derived from primitive data types for the JavaScript language are known as non-primitive data-types. It is also known as derived data types or reference data types.
// 1). Object
// 2). Array

// Now we will learn array 
// let names = ["Pratik","Maru"];
// console.log(names);
// console.log(names[0]);

// let numbers = [1,2,3,4,5,6];
// console.log(numbers[4]);

// Note: We can store any types of data, mixed types of data. Lets see 
let mixedArr = [1,2,"Pratik",true,0.44];
// console.log(mixedArr[3]);

// We can also apply for loop for traversing the array. 
// let arr = ["Pratik",2,true,null,undefined,0.22];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// We can also store array inside array. 

// mixedArr[4] = "Maru";
// console.log(mixedArr[4]);

// Array is reference data type so thats why we call array an Object. 
// console.log(typeof mixedArr);
// console.log(Array.isArray(mixedArr));  // Another way to check its array or not. 

// let obj = {};  // Here we declared object.
// console.log(typeof obj);  // Way to check its an object or not. 
