// document.createElement()

// Yeh bohot hi acha tarika hai elements ko add karne ka as compared to previous one. 107.js file.
// Harshit bhai isse hi humesha use karte hai and one should use this only. Bohot sarae developers bhi isse hi use karte hai. ✌

// append  :- means adding element in the last.

// -------------------------------------------
// const newTodoItem = document.createElement("li");
// // console.log(newTodoItem);  // ek baar dekh lete hai kaisan dikh rha hai yeh.
// const newTodoItemText = document.createTextNode("Teach Student");
// // console.log(newTodoItemText);  // Boom we created textNode. 😉

// // Now we want to add newTodoItemText in the newTodoItem so how we'll do this. lets see.... 
// newTodoItem.append(newTodoItemText);

// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);

// ----------------------------------------------

// TODO: shorter way to append the todo-item 
// FIXME: Comment-out above code.
// const newTodoItem = document.createElement("li");
// const todoItemText = "Hello frnds chai pilo";
// newTodoItem.append(todoItemText);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);


// prepend :- means adding element at the starting position (at the first)
// const newTodoItem1 = document.createElement("li");
// const todoText = "Heyy Kacha badam kacha badam";
// newTodoItem1.append(todoText);
// const todoLists = document.querySelector(".todo-list");
// todoLists.prepend(newTodoItem1);  // Boom we have successfully added our element at the starting position.


// remove an element from the list
// const todo1 = document.querySelector(".todo-list li");
// // console.log(todo1);
// todo1.remove();  // Boom deleted / removed successfully. 😉

// ___________________________________________

// We also have "after" and "before" method to add an element before and after.

// const newTodoItem = document.createElement("li");
// const todoText = "kacha Badam Kacha badam";
// newTodoItem.append(todoText);
// const todoList = document.querySelector(".todo-list");

// console.log(todoList); //checking purpose.

// Before insert
// todoList.before(newTodoItem);

// After insert
// todoList.after(newTodoItem);
