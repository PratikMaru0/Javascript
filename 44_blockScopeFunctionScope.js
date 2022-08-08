// Block scope VS Function scope  

// let and const are block scope  
// var is function scope 

// Lets see what does it mean

// {
//     let fName = "Pratik";
// }

// console.log(fName);   // It will give you an error. Becoz let is block scope let vala variable sirf brackets ke andar hi access kr sakte hai. 

// {
//     const pi = 3.14;
// }

// console.log(pi);  //  It will give you an error. Becoz const is block scope const vala variable sirf brackets ke andar hi access kr sakte hai.

// TODO: But var is function scope isse hum block k bahar bhi istemal kar sakte hai.
// {
//     var lName = "Maru";
// }

// console.log(lName);   // No error. Becoz its function scope hum isse kidhar bhi use kar sakte hai outside block mai bhi use kar sakte hai. Tum toh bade heavy driver ho....


// Lets implement it in the function. 

function myApp(){
    if(true){
        let fName = "Pratik";
        var lName = "Maru";
        // console.log(fName);     // No error    
    }
    // console.log(fName);   // Error ayega. Becoz its inaccessible.
    console.log(lName);
}

// console.log(lName);  // Not accessible, It will give u an error becoz function k scope k bahar hum access kr rhe hai isse.
// myApp();

// NOTE: Log jyada karke let / const prefer karte hai use karne k lie becoz woh nhi chahte ki koi bhi values scope k bahar kidhar bhi use ki jaye kyunki isse confusion and problem create ho sakti hai. You also plz try to use let and const jidhar bhi possible ho. 