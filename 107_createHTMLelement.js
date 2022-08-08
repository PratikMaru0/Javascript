// Now we'll see how we can create an HTML elements and can add this element in JavaScript file. Lets see.... 

// Add new HTML elements to page 


// innerHTML to add html element 
const todoList = document.querySelector(".todo-list");
todoList.innerHTML += "<li>Hello</li>";

// When you should use it, when you should not use it. 
// We should never use innerHTML becoz yaha performance issue hai jabhi hum naya todo banate hai toh yeh sirf naya todo add nhi karta yeh pura ka pura file mai jakr jitne bhi todo hai usse wapas se add karta hai. Which is wrong. Isse performance degrade ho sakti hai. So that's why we should never use it this method at all.

// Humae yeh tabhi use karna hai jabhi bhi humare pass HTML text format mai pada hai. Jabhi bhi humae html ka code change karna hai tabhi use karlo. html code change karna means existing code ko hata kr kuch aur code add karna hai tabhi hum isse use kr sakte hai.

