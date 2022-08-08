// 2).  Function returning promise. 

// Lets see how to return promise using function

function ricePromise(){
    const bucket = ["rice","vegetables","salt","chocos","pepper","sauce"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve({value:"Fried Rice is prepared "})
        }
        else{
            reject(new Error("Sorry cant find ingredients"));
        }
    });
};

// const ans = ricePromise();
// ans.then((res)=>{
//     console.log(res.value);
// }).catch(err=>{
//     console.log(err);
// });

// Boom we able to consumed our promise successfully.

// Or else this syntax is also correct. 
// ricePromise().then((res)=>{
//     console.log(res.value);
// }).catch(err=>{
//     console.log(err);
// });  // This syntax is also good. 


// Now lets try to shorten above syntax. 
ricePromise().then(res=> console.log(res.value) ).catch(err=> console.log(err) );   // Boom we converted this in one line 😉✌ Great Achievment. 