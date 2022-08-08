// Now we'll learn about promises. 
// TODO: FIXME: Its one of the most most most important topic in the JavaScript. 

// Ache se karlio. I know isme hi mujhe sabse jyada problem aa rhi thi. Now I'll try my best to learn this topic and Harshit bhai toh hai hi woh samjha denge ache se. 

// Promise

// Promise here represents :- Promise is the value that we dont know right now but after sometimes humae iski value pata chalegi. So this is promise.

// Lets understand this by an example .

// Suppose Mai ek dish banauga fried rice Im promising you that I will make fried rice for you. So now whats the status of the promise => "pending" and value => "undefined" . Now we know what ingredients are required to make fried rice (ingredients required are :- vegetables, salt, rice). So If I have this things means humara fried rice baan jayega. So mai kya karunga kitchen mai aunga and bucket mai dekhuga 
// const bucket = ['coffee','chips','vegetables','salt','rice'];
// Now I have all the ingredients that are required to make a fried rice. 
// So now I can fullfill my promise right ? Ans :- Yes. Now status of the promise will become :- "fullfiled" and value = "fried rice". 

// Now take one scenario that in my bucket I don't have vegetables and I promised you that I will make you fried rice. So now am I going to fullfill my promise ? Ans => No. So my promise => "reject" and value = "couldnt find ingredients" (This value msg we can pass.) 

// So this is the basic example of the promise. 

// I hope you understood what I'm trying to say.

// Now lets do above example. 
const bucket = ["coffee","salt","vegetables","chips"];

// So in programming humae batana padega that we are making promise. It has syntax. Lets see how we can create promise. 

// new Promise is the constructor function that will help us to create the promise 
// Argument we are passing is the function (We also call this function an executor function)
// 📌 Promise keyword mai "P" capital rahega. 
// here "resolve" is the method isko hum call kar sakte hai. Yeh ek function hai. 
const myFriedRicePromise = new Promise((resolve,reject) => {
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
        // resolve("Fried Rice prepared. 🥗");  // Here passed value can be string , arr, obj simply anything.
        // resolve({value : "Fried Rice"});  // Trying to pass object and boom it worked.
        resolve(["Half plate: 120/- ","Full plate: 200/-"])
    }
    else{
        reject("Sorry can't find ingredients.")   // Here we can passed anything it can be error object.
        // reject(new Error("Something missing from bucket."))// lets make error. Dekha console mai error aa rha hai. This error is made by me. Means error msg bhi humara hi dispaly ho rha hai.
    }
})

// This is how we can produce our promise. 

// Now lets see how we can use it.

// Now we'll see how to consume the promise. This is the most important thig becoz as a javascript developer hum promise ko create kam karenge consume jyada karenge. So humae yeh pata hi pata hona chaiye. So lets see how we can consume our promise in the JavaScript. We can consume our promise using two methods. 

//1). We can store this promise in the variable 
// 2). we can also return this promise using the function.


//1). We can store this promise in the variable 
// console.log(myFriedRicePromise);    // Boom we got our result. But this is not the right way to do this. 

// So lets see right way to do this.
// .then() is the method we have and it takes callback function as an input (argument)
// So in .then method we can pass two function 1st will execute if promise is fullfied and second will execute if promise is rejects.  Plz read this line once more if you didnt get it.  
// myFriedRicePromise.then((myFriedRice)=>{
//     console.log(myFriedRice);    // Boom this will execute if promise resolved successfully and yeah we are getting value.
// }, (rej) => {
//     console.log(rej)  // Boom this will execute if promise is rejected and yeah we are getting value.
// })

// NOTE: We can also pass one function in .then method. if dont want to pass resolve function then write "null". 

// In promises when using .then we can also do chaining using catch method. Means when our promise will resolve .then() method chalega if promise humara reject hota hai toh .catch() wala chalega. Lets see how to use .then() and .catch()

myFriedRicePromise.then((myFriedRice)=>{
    console.log(myFriedRice);
}).catch((error)=>{
    console.log(error);
})   // Boom this is working fine.

//  TODO: FIXME: I hope apko samaj aa gaya hoga whats promise. 

// Now this promise will work asynchronously. Means yeh promise wala task bhi browser karega.

setTimeout(()=>{
    console.log("Hey Im in setTimeOut")
},0);

// Want to see its asynchronous. Lets see it. 
for(let i=0;i<100;i++){
    console.log("...");   // Boom yeh code pehle run hogaya kyunki javascript ne promise wala code browser ko dedia tha and phir woh process hoga plz follow timeStamp given below Timestamp :- 1:48:00 (Mandatory)
 }
console.log("Script ends");

// TODO: FIXME: MANDATORY. Must watch the video from 1:48:00 (At 2x speed.). PLZ Dekhle yrr nhi toh badi problem ho sakti hai. 

// promise microtask queue mai add hotae hai. (Jaise setTimeout functions callback queue mai add hotae hai same like this only) and then even loop isse bhej dega stack mai for the execution only after sara ka sara code execution honae k baad.  

// Now we have both setTimout (Jo ki callback queue mai add hota hai) and we have .then() (jo ki microtask queue mai add hota hai.) So isme output kaise ayega means sabse pehele kya execute hoga setTimeout wala function ya phir .then() wala function. 
// Ans :- Sabse pehle .then() wala execute ho rha hai and uske baad humara setTimeout function execute ho rha hai.

// Browser mai jo event loop rehta hai woh sabse pehle microtask queue mai se tasks ko nikalega execute karega and then callback queue ko wale ko execute karega becoz microtask queue ki priority jyada hai as compared to callback queue.


// Iske baad hum baat krenge how we work with promises, how we can consume promises using async await and learn about fetchAPI. 2). Function returning promise we'll learn this in next file no :- 129_functionReturningPromise.js .