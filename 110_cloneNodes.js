// Clone nodes 
const ul = document.querySelector(".todo-list");

const li = document.createElement("li");

li.textContent = "new-todo";

// Here in below code only one thing will execute either it will append or it will prepend becoz li is only one node and what if we want to do both append and prepend at the same time then we have to clone an element. Lets see how we can do this.

// ul.append(li);
// ul.prepend(li);

// Cloning node.
ul.append(li);

// .cloneNode() function mai "true" likna bhulna nhi. Nhi toh nhi hoga clone.
const li2 = li.cloneNode(true);  // here "true" means it will do deep cloning. Agar true nhi likha toh node ache se clone nhi hoga text nhi display hoga. Deep cloning means element sari ki sari chijo ko clone karega its child elements are also cloned. Itna use nhi hota but exists karta hai isliye bata dia. 😒 
ul.prepend(li2);



