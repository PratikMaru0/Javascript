// Yeh bohot important hai and log isse bahut bahut jyada use karte hai. So please ache se karlio.

// Array Destructuring 
const myArr = ["Apple","Banana","Grapes","Mango"];

// let [fruit1,fruit2] = myArr;

// console.log(fruit1);   // yeh fruits1 and fruits2 ab normal variables ban chuke hai and we can use it like a normal variables. 
// console.log(fruit2);

// Now lets see how to skip some values. 

// I want to store Grapes in fruitB so how can I do that ? Lets see.  
let [fruitA, ,fruitB] = myArr;
console.log(fruitB); // Boom here we are. We got expected output! 

// Making new Array 
// let myNewArr = myArr.slice(2);
// console.log(myNewArr);

// We can also do like this....
let [fruitsA,fruitsB, ...my2ndNewArr] = myArr; // super cool thing haina ? 😉
console.log(fruitsA);
console.log(fruitsB);
console.log(my2ndNewArr);   
