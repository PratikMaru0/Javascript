// Function inside Function. 

// function register(name){

//     // This is function  inside function.
//     function greet(name) {
//         console.log(`Hello ${name} you're welcome`);
//     } 

//     greet(name);
//     console.log(`${name} your registration is successfull. Thank you. `);
// }

// register("Pratik");


// function greet(name) {
//     console.log(`Hello ${name} you're welcome`);
// }


// function register(name){
//     greet(name);  // This is function calling inside function. 
//     console.log(`${name} your registration is successfull. Thank you. `);
// }

// register("Pratik");


// Making arrow function inside arrow function. Basically function inside function using arrow function.
const func1 = () => {

    const func2 = () => {
        console.log("Im func 2");
    }

    const add = (a,b) => {
        console.log(a+b);
    }

    // We can define n number of functions inside function. 

    func2();
    add(3,6);
    console.log("Im in func1");
}
func1();

// Note we cant call function that we made inside function outside. 
// func2();  // Error: Becoz we can access this becoz its scope is only till main function that we declared 