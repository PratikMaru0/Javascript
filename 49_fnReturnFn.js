// Function returning function 

// returning function.
// function ret(){
//     return "Hello";
// }

// This is the function that will return function.
// function myFunc(){
//     return ret();
// }

// const ans = myFunc();
// console.log(ans);


// One more example. 

// function myFunc(){
//     function bye(){
//         console.log("Hello");
//     }
//     return bye;
// }

// let res = myFunc();   // now res is storing function means = its function now we can res() do like this becoz its like a function only. 
// console.log(res);
// res();  // Boom guys haina yeh awesome. 😲  // Iski ache se practice karni hogi.

// This is known as function returning function.

// The function jo function ko as an argument accept kr rha hai ya phir function function ko return kar rha hai usse hum "HIGHER ORDER FUNCTION" kehte hai. Fancy word 😂

// You know hum aisa bhi kr sakte hai

function myfn(){
    return function(){     // Yaha hi function ko bana dala.
        return "Hehehe";   // Main bohot confusing hoon re baba!
    }
}

let resp = myfn();
console.log(resp());  // Hasle bete ek baar maine ek baar sikh jana haina phir dekhta hun tenu mai. Just kidding 😂