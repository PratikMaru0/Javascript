// Here in this we will see. 
// 1). get multiple elements using getElements by class name.
// 2). get multiple elements items using querySelectorAll. 

const navItems = document.getElementsByClassName("nav-item");  // elements hai element nhi in getElementsByClassName. It will give HTMLCollection.
console.log(navItems[0]);

// Dek yeh humae array like object dega yeh array nhi hai and definitely yaha array k sarae methods apply nhi hongae like splice,slice,map hum yaha iske sath use nhi kr sakte but ha hum yaha indexing ki madad se access kr sakte hai elements ko and iterate bhi kr sakte hai.

// for(let item of navItems){
//     console.log(item);
// }

// console.log(typeof navItems);
// console.log(Array.isArray(navItems));


// Using querySelectorAll.
// const allNavItems = document.querySelectorAll(".nav-items");  // This will give you a Nodelist. 
// console.log(allNavItems);
// console.log(typeof allNavItems);   // Object    
// console.log(Array.isArray(allNavItems));  // false

// We'll see difference between HTMLCollection and NodeList in  sometime.