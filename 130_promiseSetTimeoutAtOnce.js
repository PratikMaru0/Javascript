// promise and setTimeout.

// I want to resolve / reject promise after 2 seconds. Lets see how we can do this. 

// setTimeout(()=>{
//     const bucket = ["vegetables","rice","salt","cucumber"];
//     const ans = new Promise((res,rej)=>{
//         if(bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetables")){
//             res("Fired rice is prepared");
//         }
//         else{
//             rej(new Error("cant find ingredients to make fried rice"));
//         }
//     })
//     ans.then(ans=>console.log(ans)).catch(err=>console.log(err));
// 
// },5000);

// This is how Im resolving / reject the promise after 5 seconds.


// Lets see another way to do this (Harshit bhai ka method.)

// function myPromise(){
//     return new Promise((res,rej)=>{
//         const value = false;
//         setTimeout(()=>{
//             if(value){
//                 res();
//             }
//             else{
//                 rej();
//             }
//         },3000);
//     })
// }

// myPromise().then((res)=>{
//     console.log("resolved")
// }).catch((err)=>{
//     console.log("err agaya");
// })

// This above mwthod is also very good.
