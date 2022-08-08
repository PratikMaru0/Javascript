// Callback Function 

function myFunc(callback){
    // console.log(a);
    callback();
}

function callback(){
    console.log("This function is passed as an argument");
}

// Now instead of array inside arguments can we pass Function ? answer:- Yes. 
myFunc(callback);  // See we have passed function as an argument in the function params. 
// myFunc(newFunc());   // Now we are calling this passed function that is called inside the function call as an arguments. 


// So now there is convention when we pass function inside an function call we name that function callback. 
// Please remember this. This is not mandatory but its convention!

// Hum iske barae mai agae jakae aur ache se padhege. Thik hai sabar rakho balak.

// See this example Isse hum real world mai bhi istemal karte hain 

// function hello( callback = () => {
//     console.log("Hello guys my name is Pratik.");
// }){
//     callback();
//     console.log("Im in hello block");
// };
// hello();