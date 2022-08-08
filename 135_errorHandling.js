// Plz link this file with 134_XHR.html

// Here we'll dow error handling. 

// Below all work is going to work asynchronously.
// const url = "https://jsonplaceholder.typicode.com/posts";
// const url = "https://jsonplaceholder.typicode.com/posts/1";  // This "1" is id in the Database (API)

// Now suppose I want post jiski ID "10" ho :- 
const url = "https://jsonplaceholder.typicode.com/posts/10";   
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    else{
        console.log("Something went wrong")
    }
}

// Now suppose humne data (Net) off kardia so agar humae data wala error handle karna hai toh hum use kr sakte hai .onerror() wala method.
xhr.onerror = ()=>{
    console.log("Data disconnected.");  // This will only work when some network error occurs.
}
xhr.send();