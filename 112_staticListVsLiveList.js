// static list vs live list

// Link this file with 94_domINdex.html

// Now we will see whats static list and live list and we'll also see whats difference between static list and live list. 

// BOOM Letssss gooooo.................. 🐱‍🏍

// TODO: FIXME:
// querySelectorAll humein static live list degi 
// whereas getElementBySomething (here something means id,class,tagName) humei live list degi. 

// Lets see static list.
// const listItems = document.querySelectorAll(".todo-list li");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "Item 6";
// const ul = document.querySelector(".todo-list"); 
// ul.append(sixthLi);

// console.log(listItems);  // Now after adding sixthLi in the ul list we are getting 5th nodeList in the JS console of the chrome. So it means five number of nodeList that we are getting inside the console of the chrome is static node list. ab jabhi bhi hum naye items add karenge toh list mai reflect nhi karege.  

// Lets see Live list 

// Note: Comment out above code to execute below code.
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "Item 6";
// ul.append(sixthLi);
// console.log(listItems); 
// See here we are getting 6 li items in HTMLCollection so conclusion is its giving live list to us. 

// Which one we should use ? 
// We can use anyone but querySelector is most used.  Becoz getElementsByTagName this takes extra space that somwtimes we don't want also. 



