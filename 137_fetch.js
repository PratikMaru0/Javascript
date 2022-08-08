// TODO: FIXME: One of the most important topic of the JavaScript. 

// Hume abhi fetch sikhna asaan hai becoz humne pehle hi padh lia hai HTTP request. And its most important method of the JavaScript. Pehle wale method mai humae bohot sara kaam karna padh rha tha. Abhi hum isse ek hi line mai kr sakte hai lets see. 

// Fetch. 

const URL = "https://jsonplaceholder.typicode.com/posts";

const ans = fetch(URL);    // Yeh method by-default 'GET' request karega and it will return promise. Means fetch humae promise return karta hai. matlab hum ispe .then() method laga sakte hai right ? Yes Definitely. 

// console.log(ans);
ans.then((res)=>{
    // console.log(res);   // Ain yeh toh response humae nhi chaiye tha WIERD. Im not getting data that we want (JSON data). So yeh data aise nhi milega humae ek method use karna padega .json() karke. ussi se humae data milega. 

    // console.log(res.json()); // Boom 😲 Yeh bhi ek promise return kr rha hai. 
    return res.json();
}).then((data)=>{
    console.log(data);  // Boom we got our data. 😉
})

// Upar wale code ko short and simple mai convert karte hai. 

fetch(URL)
    .then((res) => {
        if(res.ok){
            return res.json();
        }
        else{
            throw new Error("Something went wrong.");  // Boom it worked when we entered wrong url address.
        }
    })
    .then(data => console.log(data))
    // .catch((err)=>{  // Yaha yeh catch wala block chala hi nhi Reason TODO: Dyan se sunna fetch reject tabhi hoga jabhi uske pass network error ayega. Yeh reject nhi hoga agar 404 error ayega toh. Samjha ? Yes. yaha 404 error ane par response mai "ok" ki value false ayegi. So hum upar .then mai "if" condition laga sakte hai 
    //     console.log("Inside catch block!");
    //     console.log(err);
    // })

// Done Yeh toh kitna kam line mai code likh lia apun ne toh. Yeh toh mast hai re baba.... 🤟 and yeh kafi easy bhi haina ? Yes ofcourse.

