// If you dont want to perform below code its okay. Becoz IE browser abhi exists nhi karta and niche sarae methods IE ko support karne k liye  hai. 

// Some old methods to support poor IE. Which now doesn't exists but then too chal yrr padh lete hai. 

// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";

const referenceNode = document.querySelector(".first-todo");

// ul.appendChild(li);   // working fine.


// ul.insertBefore(li,referenceNode);   // working fine. Yaha humae referenceNode ki jarurat padegi.
 

// const li2 = document.createElement("li");  // new element.
// li2.textContent = "Hey I'm updated one 😉";
// ul.replaceChild(li2,referenceNode);  // working fine. Yaha humae referenceNode ki jarurat padegi.


// ul.removeChild(referenceNode);  // working fine


//Dhoom tana nana Dhoom tana nana Dhoom ta🎶🎶🎶🎶