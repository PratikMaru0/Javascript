// Promise.resolve
// Promise.chaining

// Ab hum baar karenge => Promise.resolve and Promise.chaining k barae mai 

// Promise.resolve :- yeh ek promise return mai dega jo ki resolved hua hoga and uski value hogi "5" in case of the below line of code. 

// const ans = Promise.resolve(5);
// console.log(ans);  // here we got a promise that is resolved and we are having value also (ie: 5) Now we know that we can use .then method 
// ans.then(val=>console.log(val)).catch(err=>console.log(err));  // Boom from here its proved that promise that we got is resolved . Agar yeh resolved nhi hota toh .then vala block nhi chalta (catch vala block chalta.)

// TODO: FIXME: Ek chij humae humesha yaad rakhni hai ki then() method haina yeh humesha humae promise return karta hai. Yeh Kabhi mat bhulna. then() method always returns promise. 😉 ✌

// Now we know that then() method always returns promise so iska fayda kya. Means promise return karne ka kya fayda. Ans => Iska yeh fayda hai ki iski madad se hum Promise ki chain create kar skte hai. Mere kehne ka yeh matlab hai lets seee using example..... 🐱‍🏍

// function myPromise(){
//     return new Promise((res,rej)=>{
//         res("foo");   //  Yeh promise humesha resolve hoga becoz humne koi condition hi nhi lagai kiyeh reject ho sakae.
//     })
// }

// const ans = myPromise().then(val=>{
//     // console.log(val)
//     val += "barr";
//     return val;   // TODO: Now yaha value return nhi ho rhi yaha promise return ho rha hai.
//     // agar hum kuch return nhi karte toh yeh apne aap undefined return karta hai.
// }).then((val)=>{
//     console.log(val);  // Dekha isne humae actual value di (Yeh value tabhi di jabhi humne ispe .then() lagaya) and we know .then() sirf promise pe lagate hai. So simply it means this above return line of code return mai promise de rha hai. 😉
// }); 

// console.log(ans.then((val)=>{console.log(val)});

// console.log(ans.then((val)=>{console.log(val)}));  // Boom we got our value and we proved that it returns promise.

