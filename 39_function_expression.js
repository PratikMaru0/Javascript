// Function expression 

// this is function declaration 
function add(a,b){
    return a+b;
}


// Now lets convert above function declaration into function expression 
// var add = function(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// So yeah this is the example of the function expression 

// Another example of the function expression 
const isEven = function(a){
    if(a%2===0){
        return "Its even";
    }
    return "Is not an even number";
}
console.log(isEven(25));

