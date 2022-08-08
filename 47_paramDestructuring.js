// Parameter Destructuring 

// Isse hum objects k sath use krte hai 

// 1st way did myself.
function myFunc(o){
    // let [uName,uAge] = Object.values(o);    // Here we are doing params destructuring.
    // let {name:uName,age:uAge} = o;          // Here we are doing params destructuring.
    // return `My name is ${uName} and age is ${uAge}`;
}

const obj = {
    name : "Pratik",
    age : 20
}

// console.log(myFunc(obj));

// 2nd way 
// function showDetails(obj){
//     console.log(obj.name);
//     console.log(obj.age);
// }

// showDetails(obj);

// 3rd way. TODO: (We use this so much in react.) Plz do it properly. 
// function printDetails({name,age}){     // here only we are destructuring the object. 
//     console.log(name);    
//     console.log(age);
// }

// printDetails(obj);

