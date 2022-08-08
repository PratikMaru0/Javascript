// FIXME: PROTOTYPE :- Yeh bohot hi important hai. Yeh bohot logo ko nhi pata so please try to understand it properly. You will standOut in interview.  
// So Im presenting the MOST IMPORTANT topic of the JavaScript "prototype".

// function hello() {
//     console.log("Hello world");
// }

// hello();
// console.log(typeof hello);  

// In JavaScript : Hum function ko object ki tarah bhi treat kr sakte hai.
// So function is the combo of function + object.
// Simply means :- function = function + object. 

// Lets prove it how function is object. 
// console.log(hello.name);
////  We can also add our own properties to the function lets see how.
// hello.age = 10;
// console.log(hello.age);  // here we are adding key:value pair to the function like we do in Object. 

// console.log(hello); // Boom guys here we can see that its like object only.

// // So from this we can conclude that we can treat a function like object. 
// function provides more usefull properties like call(), bind(), apply() methods.

// TODO: FIXME:  function humae dete hai free space. So yeh free space kya hai ? Yeh free space ek object hai. Aur ye object ko hum bolte hai prototype. I know I know nhi samjha hoga. Keep patience you will understand. 
// console.log(hello.prototype);// So yeh hai free space jiski hum batae kr rhe hai. 

// So yeh prototype (free space) humae kyu de rakha hai. Isse humae use karne k liye de rakha hai. But humne abhi tk isse use kara nhi. So humae yeh free space isliye de rakha hai kyunki kabhi in future humae kabhi bhi key:value pair add karna padh jaye in function toh hum kr paye. 

// TODO: NOTE: Only functions provide prototype property. 

// So lets see prove it ki sirf function k pass hi prototype hota hai
// if(hello.prototype){
//     console.log("Prototype presents");
// }
// else{
//     console.log("Prototype not exists");
// }

// Now lets see do objects have prototype ? 
// const obj = {
//     name : "Pratik",
// }

// let arr = ["hwesd","fsadasas"];

// if(arr.prototype){
//     console.log("Prototype presents");
// }
// else{
//     console.log("Prototype not exists");
// }

// // Dekha isse prove hojata hai ki sirf function k pass hi prototype hota hai. Objects, array wagere k pass nhi hota!

// Now lets see how we can use protoype (jo ki empty space) hai. Thats got created when we make function. 

// so lets use prototype
function hii(){
    console.log("Hii Pratik");
}

// hii();
// hii.prototype.data = "This is the greeting function";
// console.log(hii.prototype);  // Dekha humne isse successfully protoype mai add krdia. 

// Idhar hum jitni marji key:value pair add kr sakte hai 😉
// we can also add function in the prototype 
hii.prototype.sing = function(){
    // console.log("sing function is called");
    return "Jine mera dil luteya ohooooo";
}

// console.log(hii.prototype);

// Now we can also call this function that we added in the prototype
// console.log(hii.prototype.sing());

// So I hope you got the difference between proto and prototype 

// Proto kya tha :- Woh ek reference tha jo hum pass kr rhe the while making new objects. and 
// Protoype :- is the space that we get while making function.

// Kya proto aur prototype ka kuch connection hai ? Abhi tak toh nhi hai. But hum connection create kr sakte hai chahe toh. 

// And we'll see how we can create that connection.