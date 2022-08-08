// Loop in HTMLCollection and NodeList.

// This returns HTMLCollection.
// const navItems = document.getElementsByClassName("nav-item"); 
// We cannot use forEach loop to iterate over HTMLCollection.
// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     navItems[i].querySelector("a").style.color = "red";
//     navItems[i].querySelector("a").style.backgroundColor = "white";
// }


// Above code is working fine giving what we want. 

// Now we also have getElementsByTagName.

// console.log(document.getElementsByTagName("a"));

// const ans = document.getElementsByTagName("a");

// for(let i=0;i<ans.length;i++){
//     document.querySelector("a").setAttribute("href","www.zoom.com");
// }

// for(let i=0;i<ans.length;i++){
//     console.log(document.querySelector("a").getAttribute("href"));
// }

// console.log(document.querySelector("a")); // Boom guys we have successfully set our attribute value.

// const resArr = document.querySelectorAll("a");
// // We can also use for-of loop 
// for(let ele of resArr){
//     console.log(ele);
//     // console.log(ele.getAttribute("href"));
// }

// We Know we cant use for-each loop in this HTMLCollection array.

let navItems = document.getElementsByClassName("nav-item");
// We can change HTMLCollection item in an Array. 
// Let see how we can do this.

navItems = Array.from(navItems);   // Here we are assigning new converted Array to existing navItems variable.

console.log(navItems);  // Boom we a=converted HTMLCollection to Array and assigned it to an existing variable.
// Now we can use for-each loop becoz its now converted to an Array. 


// Now we coming to NodeList. That is returned by the querySelectorAll.
// This returns NodeList.
let allNavItems = document.querySelectorAll(".nav-item");

//console.log(allNavItems);

// Here We can use normal for loop, for-each loop , for-of loop on Nodelist
// for(let i=0;i<allNavItems.length;i++){
//     console.log(allNavItems[i]);
// }

// Now lets change the nodelist to an Array. 
// allNavItems = Array.from(allNavItems);
// console.log(allNavItems);
// console.log(Array.isArray(allNavItems));

// Iske conversion k baad hum slice, splice, map etc. all method use kar sakte hai easily.

// We'll see livelist, staticlist, after sometime. 

