// Click events in JavaScript. 

// Lets apply eventListener to all the button at once using for loop 

const allButtons = document.querySelectorAll("button");

// console.log(allButtons);  // Here we got all buttons present in the html web page. 

// Now lets addEventListener to all the button present in the webpage in oneGo using for-of loop
// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         // console.log("Hey you clicked me");
//         console.log(this.textContent);
//     });
// }

// We can also use traditional for loop in this. 
// for(let i=0;i<allButtons.length;i++){
//     // console.log(allButtons[i]);
//     // console.log(allButtons[i].textContent);

//     // Adding addEventListener.
//     allButtons[i].addEventListener("click",function(){
//         // console.log(allButtons[i].textContent);
//         console.log(this.textContent);
//     })
// }

// We can also use for-each loop and Harshit bhai for-each loop bohot hi use karte hai. 
// allButtons.forEach(ele => {
//     // console.log(ele);

//     // Lets addEventListener.
//     ele.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// })


