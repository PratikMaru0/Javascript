// SORT Method

// ASCII Table ke hissab se sorting work karta hai 

let num = [4,2,1,7,5,3,9];
num.sort();         // Yeh original array ko change karega. So be carefull.
// console.log(num);  // Boom guys we have sorted an single digit array 

// Now coming to important part.
// What happens if we have double digits / triple digits 
// For eg :- We have an arr = [12,4900,32,1654];
// Whats expected output of sorted arr :- [12,32,1654,4900] ? Yes 
// Lets see what we get.

let arr = [12,4900,32,1654];
arr.sort(); // remember yeh original array ko change karega. 
// console.log(arr);   // Did we got expected sorted array output ? NO. 😂

// Lets understand why its not working on more than double digits. 
// So javaScript iss array k elements ko number samaj k sort nhi kr rha isse javaScript string samaj k sort kr rha hai 
// For eg:- above array is converted into :- ["12","4900","32","1654"];
// So yeh string hai and string ka first element samaj k isko sort kr rha hai. Jaise ki "12" mai 1 pehle ata hai so isse pehle likh dia phir "1654" mai 1st char 1 hai toh isko badme k=likh dia and "32" : 3 and "4900" : 4 so on.....

// Sort method uses ASCII code to sort an array. 

// This is weird behaviour. 

// Iska + point yeh hai ki jabhi bhi humare pass values hoti hai jaise ki userNames we can sort it very easily and its really helpful. 

// let userNames = ["Pratik","Aadhya","Rohan","Kriti","Roshan","Jahanvi"];
// userNames.sort();
// console.log(userNames);   // Boom we got our sorted array without any discrepencies. So yaha yeh ache se work krta hai. 😉


// Now lets solve number sorting dekhte hai kaise krte hai.
// const numbers = [12,4900,32,1654];

// Sort method ek callback function bhi le sakta hai. Optional hai.
// numbers.sort((a,b) =>{
//     return a-b;
// });
// console.log(numbers);  // Boom sorted MAN. 

// Let see how this logic is working. 
// see a = 4900 , b = 32
// Then we are doing a - b => 4900 - 32 = 4868 (if ans is positive) then swap. 
// If answer is negative dont swap. Simple. Aisa hi hai. Jyada details main janae ki jarurat nhi hai. Upar upar se dekhle. 

// Now how to sort this array in descending order ? 
// numbers.sort((a,b)=>{
//     return b-a;  
// });
// console.log(numbers);

// Realistic example of sorting in Real world.
// Suppose hum ecom website pr ja rhe hai vaha hum filter laga rhe hai sort low-to-high / high-to-low by price isme yeh kaam ata hai. Isi ki madad se hum us chij ko achieve kr skte hai

const productDetails = [
    {pId:1,pName:"Phone",price:12000},
    {pId:2,pName:"Charger",price:2000},
    {pId:3,pName:"Laptop",price:52000},
    {pId:4,pName:"TV",price:32000},
];

// Sorting price low-to-high
// productDetails.sort((a,b)=>{
//     return a.price - b.price;
// })
// console.log(productDetails);

// Sorting price high-to-low
// productDetails.sort((a,b) => {
//     return b.price-a.price;
// })
// console.log(productDetails);

// Now what if I dont want to sort an actual array and want new array so we can do this using slice method I mean by Making clone. 

const lowToHigh = productDetails.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
// //  HighToLow toh kar hi lenge. Easy hai. 

// console.log(lowToHigh);
// console.log(productDetails);   // So above operation original array ko alter nhi karega. 

// Yeh ek kaafi achi chij hai. Haina ? Yes. 


