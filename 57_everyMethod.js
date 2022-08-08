// Every Method.

// const numbers = [2,4,6,8,10];

// Every method :- Every method sarae elements ko check karta hai ki operation k baad answer true aa rha hai ya nhi agar sarae true de rhe hai then it will return true. Agar ek bhi value false return karti hai the it will return false. Yeh acha method hai. Ek sath sarae method p kaam ho ja rha hai. 😉

// const bool = numbers.every((number)=>{
//     return number%2===0;   // Yeh every method check karega ki sarae elements even hai ya nhi hai toh return true. Else ek bhi odd hai then return false. 
// })

// console.log(bool);

// // Real world example 
const prod = [
    {pId:01,pName:"Phone",price:12000},
    {pId:02,pName:"SmartWatch",price:14900},
    {pId:03,pName:"NeckBand",price:2000},
]

const check = prod.every( product => product.price < 50000);
console.log(check);