// Refer 104_traversing.html HTML File. Linked this JS file.

// const heading = document.querySelector("h1");

// console.log(heading.innerText);

// const pNode = heading.parentNode;
// // console.log(pNode);
// pNode.style.color = "red";
// pNode.style.backgroundColor = "yellow";


// Boom we did our task smoothly. 😉

// const body = heading.parentNode.parentNode;
// console.log(body);  // Hum body element pe bhi chale gaye.

// Hum aise bhi kr sakte hai 
// const body = document.body;
// console.log(body);
// body.style.backgroundColor = "yellow";

// Yeh sabh chijo ka bohot fayda hai. We'll see benefits of this when we'll make projects.


// const head = document.querySelector("head");
// console.log(head.querySelector("script"));  // We can also use querySelector inside head element. 
// console.log(head.querySelector("title"));

// const title = head.querySelector("title");
// console.log(title.childNodes);

// if I dont want textNodes with the output I only want nodes other than textNodes then we have method to get output without \n,spaces. Lets see. 
const container = document.querySelector(".container"); 

console.log(container);
console.log(container.childNodes);  // see here we are getting textNodes. Its giving NodeList. 
console.log(container.children); // This is the method that we were talking about in this we are not getting textNodes. We are getting what is required. Good Method 😲. Its giving HTMLCollection.

