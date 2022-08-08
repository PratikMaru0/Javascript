// This keyword.

const btn = document.querySelector(".btn-headline");

// When we are passing "this" keyword in function declaration its giving value that is equal to "btn" class ka <button/> tag.
// btn.addEventListener("click",function(){
//     console.log("Hey you clicked me",this); // here "this" is giving window object. 
// });


// Here when we are using "this" keyword in arrow function then its giving window object. Means function konse method se banate hai yeh bhi farak padta hai re baba. 👀 "this" in arrow function :- Ek level up jakr console.log(this) ki value la kr deta hai. Ek level up matlab ek paydaan piche scope k bahar jakr. 
// btn.addEventListener("click",()=>{
//     console.log("Hey you clicked me",this); // here "this" is giving window object. 
// });
