// POST request.

// For guide how to post data visit :- https://jsonplaceholder.typicode.com/guide/

const URL = "https://jsonplaceholder.typicode.com/posts";

// TODO: See humae data JSON format mai mil rha tha vaise hi jabhi bhi hum data ko add karenge toh hum usse JSON format mai hi add karenge na ? YES. 
fetch(URL,{
    method : 'POST', // here we are creating data using 
    // .stringify is used to convert data into string from the object so that we can add our data easily in the JSON file.
    body : JSON.stringify({
        title: 'Hello',
        body: 'Guys',
        userId: 1,
    }),  // Headers ko include karna bohot bohot important hai. 
    headers : {
        'Content-type' : 'application/json; charset=UTF-8',
    },
}).then(res=>{
    return res.json();
}).then((json)=>{
    console.log(json);
})