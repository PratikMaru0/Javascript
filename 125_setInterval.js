// setInterval 

// console.log("setInterval");

// setInterval is like setTimeout only. Bus yueh chij thi ki setTimeout ko hum ek hi baar call kar sakte the whereas  setInterval apne aap se baar baar call karte rahega after certain period(passed by us) of time call hoga. 

// setInterval(()=>{
//     console.log("Het im inside setInterval");
// },2000);

// Isse toh rukna hi nhi hai. Becoz 0 milliseconds k interval pe run ho rha hai 😂😂😂 Sambhal ke laptop drone baan ke udd na jaye. 😆
// setInterval(()=>{
//     console.log("Het im inside setInterval");
// },0);

// Lets see one pangeBaaz thing. 

// setInterval(()=>{
//     for(let i=0;i<1000000000;i++){
//     }
//     console.log("Hey Im inside setInterval");
// },10);

// Boom dekha humne toh 10 milliseconds rakha tha jo ki kafi fast kaam hona chaiye pr aisa nhi ho rha becoz inside setInterval we have for loop (ie :- taking time) so thats why we cannot totally depend on the 10 milliseconds parameter that it will run in the interval of the 10 miliseconds. I hope you understood. 🙌

// const body = document.body;

// function changeColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     return `rgb(${red},${green},${blue})`;
// }

// const id = setInterval(()=>{
//     body.style.backgroundColor = changeColor();
// },1000);

// const btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     clearInterval(id);
//     // console.log(body.style.background);
//     btn.textContent = body.style.backgroundColor;
// });   


// This is one of the coolest project I have ever built. 😆 Just kidding But its really awesome project. 😉

