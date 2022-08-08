// TODO: FIXME: This is the most important part of the JavaScript. Plz Plz isko ache se padhlio. Nhi toh bohot badi problem hojayegi. 👀

// In this we'll learn :- 
// 1). event bubbling (isse hum "event propagation" bhi kehte hai.)
// 2). event capturing
// 3). event delegation

// Hum bohot sari chije sikhege inke barae mai aur example bhi dekhege. 
// const body = document.body;
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// console.log(grandparent);
// console.log(parent);
// console.log(child);


// ________________________________________ 
// Event capturing.


// ________________________________________ 
// Event bubbling 

// // Now Lets addEventListener in child element. 
// child.addEventListener("click",()=>{
//     console.log("You clicked on child");
// })

// // Now Lets addEventListener in parent element. 
// parent.addEventListener("click",()=>{
//     console.log("You clicked on parent");
// })

// // Now Lets addEventListener in grandparent element. 
// grandparent.addEventListener("click",()=>{
//     console.log("You clicked on grandparent");
// })

// // Now Lets addEventListener in body element. 
// grandparent.addEventListener("click",()=>{
//     console.log("You clicked on body");
// })

// Aee yeh kya hai re baba isme toh apun child pe click karne pr yeh toh parent , grandparent bhi click ho jarela hai. Yeh toh gadbad hai re baba 😲😲😲. Yeh gadbad nhi hai re baba yeh toh bahut  kaam ka chij hai re baba. 

// This is known as Event Bubbling or Event propogation. Timestamp :- 7:30:00

// TODO: Now lets learn capturing event

// child.addEventListener("click",()=>{
//     console.log("Capture !!!! event child");
// },true)   // here "true" means I want to caputre an event.
   
// parent.addEventListener("click",()=>{
//     console.log("Capture !!!! event parent");
// },true) // here "true" means I want to capture an event.
// grandparent.addEventListener("click",()=>{
//     console.log("Capture !!!! event grandparent");
// },true) // Here "true" means I want to capture an event.
// body.addEventListener("click",()=>{
//     console.log("Capture !!!! event body");
// },true) // Here "true" means I want to capture an event.


// Jab humne event-bubbling aur event-capturing dono ko ek sath run kia or alag alag run kia toh humne ek pattern notice kia. event-bubbling niche child se start karke upar body tak jata hai whereas event-capturing body se start hokr child tk jata hai.

// Simply it means pehle bubble hoga then capture hoga. This is how cycle will work.


//  // Now lets see whats event delegation.
// Its important we do use this method in our next project so plz dhyan se ppadh lio. ✌

// // Adding eventListener in grandparent
// grandparent.addEventListener("click",(e)=>{
//     // console.log("You clicked somethig");
//         // console.log(e.target);
//         // console.log(e.target.textContent);
// });   // See here maine toh grandparent pe event listener ko add kara hai but mai jabhi bhi child pe click kr rha hun to grandparent wala bhi event listener call ho ja rha hai.

// Iska fayda kya hai ? 
// iska yeh fayda hai ki child,parent in sabhi k liye humaei alag alag event listener add karne ki jarurat hi nhi hai.  
// At timestamp :- 7:47:00 bohot hi important chij batayi hai so plz ek baar dekh lio. (MUST WATCH IT).

// This is event delegation for you. ✌



