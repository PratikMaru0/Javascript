// Yaha hum pichle file ka problem discuss karenge discuss karne k baad hum uss problem pe phir jakr solve kar denge. 

const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

const obj2 = Object.create(obj1);
obj2.key3 = "value3";

// console.log(obj1.key1);   // Possible.
// console.log(obj2.key3);   // Possible. 

// Is this possible. 
// console.log(obj2.key1);    // output is undefined. We know this hum pehle se karte aa rhe hai.

// FIXME: So yaha mai nhi chahta undefined aye mai chahta hun js ko obj2 ko key1 na mile toh kud(jump) jaye obj1 k pass and waha dekhe. Aur agar usse waha key1 mila toh woh print karde. 

// Lets see how to achieve this thing in JavaScript. 
// We can do like this. 

// There is one more way to create an empty object. 

// // We can use assign or create method to create / assign an object but I think create wala thik rahega kyunki I dont know much about assign. I mean kya kya problem arise ho sakti hai in future. So better to use .create() method. 
const obj3 = Object.create(obj2);
// const obj3 = Object.assign(obj2);  

// console.log(obj3.key3);   // Boom we did it.

// // This is main part. Lets see how obj3 is looking
// console.log(obj3);   // 😲 yes got it. 🤟

// Now in this empty obj3 can we add key:value pair ? Yes we can add key:value pairs. So now lets add it. 
obj3.key4 = "value4";
// console.log(obj3.key3);  // Yeh obj3 obj2 k pass jayega dekhega kya uske pass key3 hai if yes print kardo.  

// Now lets assign obj2 with obj1.
// Ok we have assigned obj1 to obj2. 
// Now we will try to access the key1 from obj3. Lets see whether we can do this or Not.

// console.log(obj3.key1);   // 😲 🤟 Boom we can do this. Isn't its interesting ? Yeah very interesting! WOW. 

// Now if we try to run this file in the chrome and print below console.log() line and in chrome console you will see in result you will see __proto__ . So yeh kya hota hai. Pehle yeh file ko index.html k sath link karke run in chrome using live server and see __proto__ is coming or not. 
// console.log(obj3); // Humare mai Prototype karke aa rha hai. But harshit bhai mai __proto__ karke aa rha hai. 

// We'll figure this out later. Now try to understand what this __proto__ means ? JavaScript kya karegi dekh agar usse obj3 mai jo hum maang (print) kr rhe hai agar usse woh is object mai nhi mila na toh yeh __proto__ mai jayega. __proto__ mai reference rehta hai JS waha jake dekhta hai. So yaha humne __proto__mai obj2 milega.

// Now FIXME: Important. 
// Harshit bhai ki tutorial mai __proto__ likha aa rha hai 
// Aur yaha humae [[Prototype]] likha hua mil rha hai. 

// In offical ECMA Script documentation mai [[Prototype]]  yeh likha hai. Jo ki dono same hi hai.
// __proto__ === [[Prototype]] they are same BUT BUT prototype is completely different dhyan se ek baar phir yeh statement padh. prototype !== [[Prototype]] 

// console.log(obj3.__proto__);  // dekha humae obj2 object mil rha hai 
// console.log(obj2.__proto__);  // same here humae obj1 object mil rha hai 

// Yaha [[Prototype]] aisa is liye dikha rha hai kyunki maine browser ko update kara hai.  
// Once again 
// __proto__ === [[Prototype]]
// [[Prototype]] !== prototype

// Chinta mat kr bhidu sabh ache se samjhege. 

// We also call obj2.__proto__ === dunder. Yeh ek JS mai property hai.

// Now lets go back to the problem that arrised in 74 file.