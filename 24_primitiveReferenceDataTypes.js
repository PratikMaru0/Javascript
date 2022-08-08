// Primitive vs Reference data types.

// Now whats primitive data types :- The predefined data types provided by javaScript language are known as primitive data types. Primitive data types are also known as in-built data types. 
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

// Primitive Data type :- 
// let num1 = 6;
// let num2 = num1;
// console.log(num2);
// num1 = 10;
// console.log(num1);  // here chaging the value of num1 will not have any effect on the num2. num2 value wont change.
// console.log(num2);

// Reference data type. 
// let arr1 = [1,2,3,4,5];
// arr2 = arr1;
// console.log(arr2);
// arr1[2] = 300;  // by changing the value of  the arr1 its effecting the array2 also. So this is the reference data type.
// console.log(arr2);