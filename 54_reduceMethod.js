// Reduce method
const numbers = [1,2,3,4,5,6];

// Aim :- is to sum all the numbers in array.

let ans = numbers.reduce((accumulator,currentValue) => {
  return accumulator + currentValue;  
})

// console.log(ans);   // Yeh humae sarae numbers ka sum de rha hai.

// Track whats happening 

// Accumulator , currentValue , return 
// 1              2             3
// 3              3             6
// 6              4             10
// 10             5             15
// 15             6             21
// 21 ----> return 21. Final answer!

// Reduce ka meaning hi yahi hota hai sari values mila k ek value mai convert karna. 

// Lets see Real world example
const userCart = [
    {product:"Maggi",price:25},
    {product:"Vegies",price:55},
    {product:"Biscuits",price:125},
]

let amount = userCart.reduce((acc,currVal)=>{
    return acc + currVal.price;
},0);  //  Dont forget to set default value = 0. Here 0 means we are setting initial/default value of accumulator. bydefault 1 hota hai accumulator ka value. 
console.log(amount);      // Juice piva nu maja karvanu maja ni life. 😆
