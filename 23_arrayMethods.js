// Array methods 

// We have many array methods. 

// Let see one by one 

let arr = [1,2,3,4,5];

// arr.push(10); // it will push in the end of an array.
// console.log(arr);

// arr.pop();   // piche se pop karega aur yeh humae pop kia hua value bhi return karta hai jisse hum var mai store kar sakte hain.
// console.log(arr); 

// arr.reverse();   // method to reverse an array.
// console.log(arr);

// Note: Reference types are mutable whereas string (ie: Primitive data type) is not mutable.

// Now how to add element in the starting ?  Lets see
// We can use unshift method
// arr.unshift(0);  // method to add element in starting of an array. 
// console.log(arr);

// Shift method to remove element from the starting  
// arr.shift();  // method to remove an element from the starting of an array. it also returns the deleted element so that we can store it in the variable. 
// console.log(arr);

// push and pop are fast kyunki usse sirf last main hi perform karna hai apna operation
// But in shift and unshift yaha unhe sare baki k elements ko displace karna hoga jisme kafi time lagta hai.