// Please link this JS file with 94_domIndex.html

// here we'll see how to work with the classes. Like how to remove classes or how to add classes. 
// We'll talk about this. So letsss goooo....

const sectionTodo = document.querySelector(".todo-section");

// Now if I wanted to see how many classes I have given to this element how can I find this. We do have method for this!
// console.log(sectionTodo);
console.log(sectionTodo.classList);  // Boom here we got all the classes that we have given to this element. 

// Now here we'll see how to give classes to an element using JavaScript.
// So maine ek class banai hai in 94_styleFile.css mai name of the class is :- "bg-dark" karke maine ek class banayi hai. And we'll try to add this class using JavaScript. 

// sectionTodo.classList.add('bg-dark');  // Boom we have given class successfully to the element using javaScript. 😉

// What if we want to remove some class fri=om the element is it possible to do that ? Ans :- Yes it is possible we can do this using one method. Lets see.... How we can do this.
// sectionTodo.classList.remove("bg-dark");  // Boom humne successfully remove kardi particular class from the element. 

// Now if I want to know if some class is present in the element or not. So we have one method for this also. Letsss seee....
// const ans = sectionTodo.classList.contains('bg-dark');  // It gives result in boolean value.
// console.log(ans);  // Only boolean value we'll get. 

// Toggle :- using this method agar element k pass woh class hogi toh remove hojaegi agar nhi hui toh add hojaegi. 😆 Yeh toh mast hai re baba. 


// sectionTodo.classList.toggle('bg-dark');
// const ans = sectionTodo.classList.contains('bg-dark'); 
// console.log(ans);   // Haina yeh awesome.
