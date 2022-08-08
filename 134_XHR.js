// Now lets create XHR object. 

// const xhr = new XMLHttpRequest();   // Dont forget to write "new" keyword.
// console.log(xhr);   // Boom here we got xhr object uske andar bohot sari properties hai jisme bohot sari crucial properties bhi hai (Like :- status, readyState, response these are the properties that are important  for us). 

// Here you have to fetch data from (it can be anything for eg :- from server, API etc). 
// For front-end developers :- our back-end developer will make API and we can use it in front-end. 

// So now lets work with the APIs.

// So now we dont have our own API so what we'll do is we'll use fake APIs that are available online 
// Link :- https://jsonplaceholder.typicode.com/   to get fake API 

// We must read documentation first so that we can understand how we can use that API 

// Using above API we can request server. And this API is written by some backend developers.

// In APIs we have some methods so that we can perform some operations. Methods are :- 
// 1). GET method :- uses to read something.
// 2). POST method :- to create some data.
// 3). DELETE method :- means I want to delete some data.
// 4). PATCH method :- means I want to change some amount of data.
// 5). PUT method :- means I want to update the existing data.
// Browser by-default request karta hai woh hota hai "get" request.

// Here go to this link :- https://jsonplaceholder.typicode.com/posts and see it looks like an array but its not an array its JSON (JavaScript Object Notation)
// Humne ek JSON file banaya hai iska naam hai :- 134_XHR.json 
// Now lets understand about JSON.
// JSON is almost similar to the object of the javascript and by viewing also it looks like a JavaScript object only. Means ek array hai uske andar kafi sarae objects hai. 

// Now there is some points that we need to keep in mind. JSON and objects has some differences and these differences we must know.

// 1). JavaScript k object mai jo key:value pair hotae hai usme hum keys ko single quote, double quote ya phir kabhi kabhi quote lagate hi nhi the and waha chal jata tha. BUT BUT here in JSON hume keys mai double quotes lagana mandatory hai nhi toh error aajayega ('' Single quotes are not allowed). In values we can assign anything it can be string, array, object, etc (Hum methods use nhi kar sakte).

// So this is the basic. We'll learn more things in deep afterwards. 


// Now lets code it guys.
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();   // Don't forget to use "new" keyword. 😅
// console.log(xhr);

// STEP 1 :- 
xhr.open('GET',URL);   // This method will take 2 arguments.  1st argument :- request , 2nd argument :- URL. TODO: NOTE: This work is done by browser asynchronously.

xhr.onreadystatechange = function(){
    // console.log(xhr);
    // console.log(xhr.readyState);
    if(this.readyState === 4){   // here this === xhr.

        // console.log(xhr.readyState);
        // console.log(xhr.response);   // Here we'll get the respone (ie:- JSON document.)

        // console.log(typeof xhr.response);   // Its string data type.

        // Now response we are getting is in string so we want to convert that in Object Lets see how we can do that. 
        const respone = xhr.response;
        const data = JSON.parse(respone);  // This will parse JSON string and it will convert it in JavaScript object.
        // console.log(data);
        // console.log(typeof data);  // Boom we have successfully converted JSON string to JS Object. 😉
    }

    // Want to learn more about statusCode refer :- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    if(this.status === 404){
        console.log("Something went wrong");
    }
}
// Now lets see whats readyState in XHR :- Visit link :- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState   you'll get to know what exactly readyStates are and what readyState value represents.  TODO: If u dont want to visit refer below table. 

// Value	State	            Description
// 0	    UNSENT	            Client has been created. open() not called yet.
// 1	    OPENED	            open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	    LOADING	            Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.

// Jabh tak readystate ki value 4 nhi hojati tab tak humae response nhi milega. So to get response humae value chaiye hogi 4 of readystate.

xhr.send();

// Congrats man you have really learn something awesome. I also feel that maja aagaya. 😉

// Upare wale kichdi ko ek baar ache se kaam line mai likhne ka try kr. 
// Lets shorten above code so that we can understand quickly.
// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr1 = new XMLHttpRequest();

// xhr1.open('GET',url);

// xhr1.onreadystatechange = function(){
//     // console.log(this.readyState);
//     if(xhr1.readyState === 4){
//         const res = xhr1.response;
//         // console.log(res);
//         const data = JSON.parse(res);        
//         console.log(data);
//     }
// }

// xhr1.send();


// Now lets shorten it more. 

// We must know that onreadystate === 4 pe hi humae error ayega ya phir success milegi.

// So what we can do to shorten this code is :- 
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr1 = new XMLHttpRequest();

xhr1.open('GET',url);
xhr1.onload = function(){
    // console.log(xhr.readyState);  // This onload function will only work after our readyState becomes 4. 
    const res = xhr1.response;
    const data = JSON.parse(res);
    // console.log(data);  //Boom we got our data.
}
xhr1.send();

