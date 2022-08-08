// How to iterate the object 
// Lets see.

const person = {
    pName : "Pratik",
    age : 22,
    number : 1234456789,
    address : "Mumbai"
}

// for-in loop 
// for(let key in person){
//     console.log(key + ": " + person[key]);
// }

// Object.keys
// console.log(Object.keys(person));   // Object ka O capital ayega Yaad se. It will give you an array. 
// console.log(typeof Object.keys(person));
// console.log(Array.isArray(Object.keys(person)));
// console.log(Object.values(obj));

// for-of loop 
for(per of Object.keys(person)){
    console.log(person[per]);
}