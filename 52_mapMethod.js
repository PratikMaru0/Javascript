// Map method (Yeh bohot jyada important hai)
// TODO: Ache se karlio nhi toh dikat mai pad sakte hai aap. 😒

// Lets do it BANG.....🐱‍🏍

// REACT main hum isse jarrur use karte hai. Aap use karo ya na karo apki majburi hojayegi isse use karna sahi main React mai hum isse bohot extensively use karte hai. So its one of the most important topic in JavaScript. Emphasising a lot. 

// Map method is like for-each only. 
const numbers = [11,23,13,46,53,61];

// NOTE: Map method jabhi bhi hum call karte hai yeh humesha ek naya array banayega jisse hum store bhi kr sakte hai.
// let newResultArr = numbers.map((element,index) => {
//     return element*element;  // yeh jo return ho rhi hai value isse yeh newResultArr main push kr dega its Awesome. Karle ache se bohot mast hai yeh toh! . When we dont return anything then it returns undefined and then when we try to print that array we'll get undefined values in that new array. Hope u understood.
// });
// console.log(newResultArr);

// NOTE: Its crucial to return something when we use map method so plz return something.

// This is the difference beteween for-each and map method. for-each humae naya array nhi deta whereas map method humae naya array deta hai. Samajla kai.

// We can also do like this 
// let newResultArr = numbers.map((element,index) => {
//     return `index:${index} and ans is: ${element*element}`;   // Kafi cool 👌
// });
// console.log(newResultArr);

// Lets see some realistic example of map method usage 
// Lets go....🐱‍🏍
const users = [
    {fName:"Pratik",age:20},
    {fName:"Harshit",age:22},
    {fName:"Raju",age:24},
    {fName:"Baburao",age:29},
]

let userName = users.map(element => {
    return element.fName;
})
console.log(userName);   // Ekdum jakass 👏
// I hope samaj main chije aai hogi. Haina ? 

// We can also do like this. Destructuring object in the arguments field only.
const resArr = users.map( ({fName}) => {
    return fName;
})
console.log(resArr);



