// We do have more methods to create an element but we don't use this method as much but yeh exists karte hai so humae iske barae mai pata hona chaiye.

// elem.insertAdjacentHTML(where,html)
// beforebegin 
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list");

// Here there is no need to make an element using .createElement function. we can add element using insertAdjacentHTML method also letsssss seee.... how we can do this. 

todoList.insertAdjacentHTML("beforeend","<li>Teach Student</li>");  // Boom we did it. we can add this anywhere we can write beforebegin, afterbegin.beforeend , afterend at the 1st argument place. 

// If u like this u can use this also ur choice but I dont think so I will use this previous method was really good! 😉