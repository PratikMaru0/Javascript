// Async Await 

// Now in previous we were using .then() methods now we can use async await also instead of .then(). 

// means we can remove .then() method using async await . 

// Lets see how we can do that.
// Behind the scenes yeh hi .then() wala hi kaam hoega bus syntax change ho jayega. 

console.log("Script starts"); // Just to check its working asynchronously or not.

const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data));

// Here were are simply consuming the promise using .then() .then() ....

// TODO: Now if I write "async" keyword before the function declaration its not going to be a normal function now it became function that gives promise in return always.

// async wala part browser hi sambhalega means yeh sabh background mai hi chalega. 

async function getPosts(){
    const response = await fetch(url);  // await means yeh wait karte rahega ja taK fetch(url) resolve nhi ho jata. We can store this in variable also. 

    if(!response.ok){
        throw new Error("Something went wrong!");
    }
    // console.log(response);
    const data = await response.json();  // we know fetch returns promise and here we know async function always returns promise.
    // console.log(data);
    return data;
}

// const ans = getPosts();  // Boom here we got to know that it is giving promise in return.

// console.log(ans); // we get promise only when we try to print this. So we cant do this. So now whats the solution ? Lets see....

getPosts()
.then(myData =>console.log(myData))
.catch(err => console.log(err));  // Boom we got our data. Now in above async function hum jitna chahe utni baar "await" likh sakte hai. Like we were writing ""then()" in previous code. 


// Bhale hi humae yeh feeling aa rhi ho ki yeh synchronously kaam ho rha hai but aisa nhi hai yeh asynchronously kaam ho rha hai.
// See the stript starts and scripts end wala code. You will get to know whats happening.

console.log("Script end"); // Just to check its working asynchronously or not.

// Boom its working asynchronously.

// NOTE: We can also use arrow function to declare async function  

// // This is the syntax. Async hum () iske pehle likte hai. Yaad rakhna bhidu.
// const getPosts = async () => {

// }


