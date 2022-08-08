// How to get the dimensions of the element.

// TODO: FIXME: .getBoundingClientRect();

// I want to know height and the width of the todo-section

// Lets see how we can find this. 

const sectionTodo = document.querySelector(".todo-section");

console.log(sectionTodo.getBoundingClientRect());  // boom this method will return DOMRect in this all things will be there for eg:- height, width, x-axis, y-axis, etc. Its like object. 

// console.log(sectionTodo.getBoundingClientRect().width);  // Boom we got width. 

// console.log(sectionTodo.getBoundingClientRect().height);  // Boom we got height. 

// console.log(sectionTodo.getBoundingClientRect().x); 
// console.log(sectionTodo.getBoundingClientRect().y); 

