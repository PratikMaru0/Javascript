// Map objects. 

// Yeh Humnae jo map padha tha usse different hai yeh map-object. Yeh key-value pair store karta hai 

// Yeh object jisse humnae banaya isse hum object literals bhi bolte hai.
// isme humari keys kisme hogi string ya phir symbol (yeh hum padhege) mai
// 99.9% humari keys in object string mai hogi. 
// const person = {
//     fName : "Pratik",
//     age : 20,
//     1:"one"   // yeh 1 haina string mai store hua hai its like "1" this one.
// }

// console.log(person.fName);
// console.log(person["age"]);

// console.log(person['1']);
// for(let key in person){
    // console.log(typeof key);
// }


// Ab hum Map objects banayenge 
// Lets see it ....🐱‍🏍
// Map object will store key:value pair
// Hum jo yeh new keyword use kr rhe hai usse bohot hi detail mai baat karenge. 
const person = new Map();
// console.log(person);
// console.log(typeof person);  // So iska type object hai re baba.

// Now let see how to add key:value pair in the map 
person.set('fName',"Pratik");
person.set('lName',"Maru");
// console.log(person);  // Boom guys we have added key:value pair successfully. 

// Here is the main Difference between object and map 
// In map we can keep keys of any type whereas in object hum sirf string aur symbol type ki hi key store kar sakte the right. 
person.set(1,"one");
person.set(true,"Boolean value");   // successfully added 😲
// console.log(person);

//  Now lets see how to access key:value pair from the map object 
// console.log(person.fName); // undefined ayega aisa hum nhi kr sakte.
// console.log(person['fName']);  // na hi hum aisa kar sakte hai yaha bhi undefined aa jayega. 
// console.log(person[fName]);  // ERROR : Aisa to hum kr hi nhi sakte error aa jayega. 

// Toh kare kya. 🤯
// Shant balak 😃
// We have map object method to access the key:value pair in the map object 
// Lets see how to do this. 🐱‍🏍
// console.log(person.get("fName"));  // Mil gaya hum ko sathi mil gaya hohohoho mil gaya 😂
// console.log(person.get(1));
// console.log(person.get(true));

// So yeh jo map hai yeh iterable hai 
// So we can use loop to iterate the values of the key. 

// // for loop to print the keys of the map 
// for( let p of person.keys()){
//     console.log(p);
// }

// // for loop to print values of map 
// for( let p of person.values()){
//     console.log(p);
// }

// We can also store array as a key in the map 
// person.set([1,2,3,4],"abc");
// console.log(person);

// We can also add object literals 
// person.set({1:25000},"Very good");
// console.log(person);

// Yaha maine thoda atrangi kaam kara hai. SORRY. 😂 But acha kaam kia hai kuch naya sikhne mila. 😎
// for( let p of person.keys()){
//     console.log(`Key: ${p} has value: ${person.get(p)} and it type is ${typeof p}`);
// }

// Yaha hum for-in loop nhi laga sakte. but we can use for-of loop. As we applied above.

// Now Khulasa karte hai
// for(let key of person){
//     // console.log(typeof key);  // So yeh object hai 
//     console.log(Array.isArray(key));  // Yeh tho array hai Dhak teri ki. 😂
// }

// So yeh array hai toh hum isse destructure bhi kr sakte hai haina lets destructure it.
// for(let [key,value] of person){
//     console.log(key,value);    // Boom guys humnae isse destructure kar dia 😁
// }

// Isme order guarantee hai. Order bigad ta nhi jaise set mai bigad ta hai

// Hum aisa bhi kr sakte hai

// const newPerson = new Map([['pId',"1"],[true,"Boolean val"]]);
// console.log(newPerson);  // Yahoo tara tara ra ta. 🕺

// So now this is the one of the most interesting part of this journey. 
// const person1 = {
//     location : "Mumbai",
//     since : 2001
// }

// Now I want to store some additional information about person but at the same time I dont want to store in above object I want to store it somewhere else. So we can can store that additional information in map. Lets see how ? 
// const additionalInfo = new Map();
// additionalInfo.set(person1,{age:21,fName:"Pratik"});
// console.log(additionalInfo);   // Boom guys we did it. See output once. you will understand. 

// Now I want to get age (ie: in additionalInfo) of an user. How to access that. 
// console.log(additionalInfo.get(person1).age);  // TODO: Yeh thoda unique syntax yeh especiall ().age dekh lio ache se. Nhi toh badme dikkat ho sakti hai.

// Yeh thoda complicated banaya hai made by "pratik hero" jara samaj lio ek baar. 

// const person1 = {
//     fName : "Pratik",
//     lName : "Maru",
// }

// let maps = new Map();
// maps.set(person1,{cars:["BMW","TATA"]});

// console.log(maps.get(person1).cars);
// console.log(maps.get(person1).cars[0]);



