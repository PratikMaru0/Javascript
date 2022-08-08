const todoForm = document.querySelector(".form-todo");

// I want input value that user have entered in the Add todo input text. So how can I get that value lets see. 
const todoInput = document.querySelector(".form-todo input[type='text']");  
// console.log(todoInput);

const todoList = document.querySelector(".todo-list");

// See I dont want my page to get refresh when I submit form so to prevent this behaviour I will use preventDefault. 
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();  // Boom now when I will submit page wont get refresh. TODO: FIXME: Its very important property. We use this many times.
    // console.log(todoInput.value); // Boom we are getting the value that users is entering in the "add todo" input field.
    // todoInput.value = "";   // I want to clear the value after printing it in the console.
    // // Now here comes the main part ie :- when someone add todo toh hamare pass ek li item aa jaye and we'll ad this in ul. 
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    newLiInnerHTML = `<span class="text">${newTodoText} </span>
                        <div class="todo-buttons">
                            <button class="todo-btn done">Done</button>
                            <button class="todo-btn remove">Remove</button>
                        </div>`;
    newLi.innerHTML = newLiInnerHTML;
    // console.log(newLi);
    todoList.append(newLi);
});

// Now coming to the "todo" buttons part ie:- "done" and "remove"

todoList.addEventListener("click",(e)=>{
    // console.log(e.target);

    // Here we can check if user clicked on done or remove.
    // console.log(e.target.classList);   // This the method from which we can get all the classes that we have given to an element.
    if(e.target.classList.contains("done")){
        // console.log("Done");  // yes here we are getting if it is clicked on "done"
        // Now lets do things that we want to do with these buttons. 
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        // console.log("Remove something");  // yes here we are getting if it is clicked on "done"
        // Now lets do things that we want to do with these buttons. 
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }

})
// Done Javascript Part2 Harshit Vashishta tutorial ✌