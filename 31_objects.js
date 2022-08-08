// Objects are reference data type.
// Arrays are good but not sufficient for representing real world data.
// Objects store key value pairs 
// Objects dont have index 

// Now lets create objects  
// for object we use curly brackets. 
// const person = {name:"Pratik",age:22};
// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person.age);

// NOTE: hum keys ko properties bhi kehte hai in object

// We can also store the array in the object. 
const person1 = {name:"Pratik",age:20,cars:["BMW","AUDI","Mercedes","Skoda"]};
// console.log(person1.cars);
// console.log(person1.cars[3]);

// Now how to add key value pair in the object 
// person1.lName = "Maru";
// console.log(person1);


// We know that we can access data of the keys from the object using "." notation. 
// But we can also use bracket notation to access the details from the Object. 
// console.log(person1["name"]);       // TODO: Humae key ki value string mai hi likhni hai we cant write it without double quote. Why ? Becoz by-default keys string mai hi hoti hai. Hum likhte nhi string mai but its in string only. 
// console.log(person1["cars"][1]);   // This is really cool just look it once 🤯

// We can also add key value pair using [] notation. 
// person1["College"] = "Mithibai College";
// console.log(person1);

// ************************************************************
// Now lets see the difference between dot and bracket notation.

const cars = {
    cName : "BMW",
    price : 12999902,
    "car model" : "BS2-JKL123",   // See agar humae "car model" likhna hai I mean space ana chaiye then humae "" k andar hi likhna hoga otherwise it will give u an error. 
}
console.log(cars);

// Now how to access this with spaces ?
// console.log(cars.car model);   // ERROR we cant access data of key using "." notation. Becoz it has spaces in between so we can access using [] notation
// console.log(cars["car model"]);

const key = "email";

// Now we want to add above key in the person object 
// So how will we do that ? Lets see 
// person1.key = "pratik@gmail.com";
// console.log(person1);  // This is wrong humae toh key ki value key main leni thi na yeh toh key hi add hogayi. So how we can solve that problem lets see. 
// person1[`${key}`] = "pratik@gmail.com";    // BOOM guys haina awesome. We solved it. Hurray. 😉
// or we can do like this 
// person1[key] = "pratik@gmail.com";     // Huh this is easy way. 
// console.log(person1)

