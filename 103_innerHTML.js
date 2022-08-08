// InnerHTML in JavaScript.

// TODO: Its important topic plz ache se padh lio.

// Now whats innerHTML.

// Suppose there is one html code snippet.
{/* <Nav>
    <h1>Hello</h1>
</Nav> */}

// So now <Nav> ka innerHTML is <h1>Hello</h1> 

const ans = document.getElementById("header");
console.log(ans);

// ans.innerHTML = "<h2>Bye Bye </h2>"  // Dekha pura ka pura header hi change hogaya.

// Becoz we got header ka innerHTMl ie:- all code inside header tag. and we are replacing it by assigning code that we assigned. 

// if we want to see whats the ouptut of innerHTML execute below line of code 
// console.log(document.getElementById("header").innerHTML);  // boom we got code that we expected.😉

// Now what if we wanted to add extra code to an existing code. We can do this by executing below line of code. 
// document.getElementById("header").innerHTML += "<h2 class=\"btn\">Line Added successsfuly</h2>";   // Boom we did it. 