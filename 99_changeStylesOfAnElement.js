// Change the Style of an Element.

// Now lets see how we can change the style of an element using document object model.

// Now I want to change the color of the text of the :- "Manage your task" . 
// Let see how we can do this.

const mainHeading  = document.querySelector("div #headl");
// console.log(mainHeading.style);  // This is the property using which we can get all the styles that element is having.  

// mainHeading.style = "color:red";// Boom we change our heading color.

// Or we can do like this also. Its working perfectly fine.
// mainHeading.style.color = "green";   // Boom we did it.

// So yaha ek chij ka dhyan rakhna hota hai ie :- jabhi bhi humae koi property add karte hai jaha "-" lagana hota hai like:- background-color. waha hum niche wala syntax use karenge. 

// mainHeading.style.backgroundColor = "red";   // Boom instead of writing "-" we write capital letter of the next word. Simply hum camel case use karte hai.

// Samajhla re bhava Samajhla. 😉