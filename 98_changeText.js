// Now lets change text

// textContent and innerText.

// my goal is to select "manage your task" text from the webpage that we build. 

// const mainHeading = document.getElementById("headl");
// console.log(mainHeading.textContent);  // To view text Content. 
// mainHeading.textContent = "Chal Bhaiya apun nikal ba";

// We can chage the text-content like this also.
// const hdLine = document.querySelector("#headl").innerHTML = "Bye bye";   // Boom we did it.
// console.log(hdLine);
// hdLine.innerHTML = "Chal hat";

// We also have property innerText in HTML
// Go to h2 tag where we are writing "Manage your task" here we have span tag where its not showing in live web page but when we will execute below line of code it will display all content including hidden one also.
// const ans = document.querySelector("#headl");
// console.log(ans.textContent);  // Dekha yaha hidden part bhi dikha rha hai.

// So what if I want only part that is displaying in live web page. 
// const ans = document.querySelector("#headl");
// console.log(ans.innerText);  // Boom we got that we are seeing in the webpage.