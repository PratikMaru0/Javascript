// methods. 

// Methods ? :- Methods are function inside object.

// const person = {
//     fName : "Pratik",
//     age : 20,
//     about : function(){
//         // console.log("Hello");
//         // console.log(`Hello ${fName}`);   // This is not allowed error aa rha hai. Jo ki badi problem hai.
//         // console.log(`Hello ${this.fName}`);   // Isliye hum "this" keyword ka use karte hai. Hum dekhege this keyword kya hai.
//         // console.log(this);  // See this is the person object. 
//     }
// }
// person.about();

// Yaha "this" keyword pura ka pura object hai. 
// Like this = const person {}
// So hum basically this.fName === person.fName ko hi call kr rhe hai. Jo ki hum generally karte hai. To access the value from the object. Samjha 😲 ? Haa yeah now I got it.

// ***** Chalo aur ek example dekhte hai *****

function personInfo(){
    console.log(` Name: ${this.fName} and age: ${this.age}`);   // Isliye hum "this" keyword ka use karte hai. Hum dekhege this keyword kya hai.
}

const person1 = {
    fName : "Mohit",
    age : 20,
    about : personInfo,
}
const person2 = {
    fName : "Raju",
    age : 26,
    about : personInfo,
}
const person3 = {
    fName : "Akash",
    age : 29,
    about : personInfo,
}

// personInfo();

// Now see magic jiska bhi person ka function call karunga uska hi data print hoga. 
person1.about();
person2.about();
person3.about();  // Its magic its magic 🤞

// Agar aur bhi ache se samaj na hai see video yt JS part 1 :- timestamp : 8:50:00. Chota sa hi hai 1 min ka buss. 

// Conclusion :- Yeh "this" keyword humare liye kitna jaruri tha. 


