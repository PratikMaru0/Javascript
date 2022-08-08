//  Now lets promisify previous code. 

const url = "https://jsonplaceholder.typicode.com/posts";  

function sendRequest(method,url){
    return new Promise((res,rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                res(xhr.response);
            }
            else{
                rej(new Error("Something went wrong"));
            }
        }
        xhr.onerror = () => {
            reject(new Error("Data disconnected"));
        };
        xhr.send();
    })
}

sendRequest('GET',url)
.then((ans)=>{
    // console.log(ans)
    const data = JSON.parse(ans);
    // console.log(data);
    return data;
}).then((data)=>{
    // console.log(data[10]);  // Boom we can access data the particular data using index nd all.
    return data[10];
}).then((data)=>{
    console.log(data.id);  // Boom using . operator we can also access the internal data.
    return data.id;
}).then((id)=>{
    const newurl = `${url}/${id}`;
    console.log(newurl)
    return sendRequest('GET',newurl);
}).then((response)=>{
    // console.log(response);  // Boo we are getting data. Isn't its amazing 😉
    // We can also parse data to convert it in Object. 
    const newData = JSON.parse(response);
    console.log(newData);
    // console.log(typeof newData);
})
.catch((err)=>{
    console.log(err);
});

// This is the chaining. 😉 We are chaining things so that humari practice hojaye ache se.



