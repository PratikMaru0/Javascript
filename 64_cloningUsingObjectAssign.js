// Clone using Object.assign

// We know we can clone using ... spread operator. 
// Lets recap that first

// let obj1 = {
//     fname : "Pratik",
//     age : 20
// }

// const obj2 = {...obj1};

// console.log(obj2);

// There is one more way to clone an object using Object.assign method. Lets deep dive into this. 

// let obj1 = {
//     fName : "Baburao",
//     school : "Dophar tak"
// }


// let obj2 = Object.assign({},obj1);  // Yeh isliye bataya kyunki bohot log aise bhi likhte hai to do cloning of an object toh humae pata hona chaiye. 
// obj1.fName = "Shyam";
// console.log(obj1);
// console.log(obj2);


// FIXME: We'll learn more about Object.assign in object oriented programming (OOPs) part of this video (later in this video.)

// Spread operator naya hai , aur yeh purana hai (so ho sakta hai purane code mai yeh wala use kia ho.)