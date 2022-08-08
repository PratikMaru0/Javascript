// Object Destructuring. 

// In array we have seen destructuring (Lets recap it.)
// const arr = [1,2];
// let [num1,num2] = arr;
// console.log(num1);
// console.log(num2);


// Lets see object destructuring 
const obj = {
    names : "Pratik",
    age : 22
}

// I dont know this is right or not. But its working fine. Means expected output is right.
// let [myName, myAge] = Object.values(obj);   // Important. TODO:
// console.log(myName);
// console.log(myAge);

// Lets see another way 
// let {names,age} = obj; 
// console.log(names);  // yaha variable ka naam aur key ka name same hona chaie warna work nhi karega.
// console.log(age);    // yaha variable ka naam aur key ka name same hona chaie warna work nhi karega.

// Agar meko dusra naam rakhna hai variable ka toh mai yeh kr sakta hu 
// let {names:var1,age:var2} = obj;
// console.log(var1);
// console.log(var2);

// Meko 1st method easy laga. Jo ki wrong jaisa lag rha hai. But nhi hai. 

// const band = { 
//     names : "Zio",
//     famous : "Rainbow",
//     year : 1999,
//     age : 45
// }


// let {names:bandName, famous:famousSong,...restProperties} = band;
// console.log(restProperties);


