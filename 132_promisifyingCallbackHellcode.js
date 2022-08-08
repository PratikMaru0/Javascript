// Now lets use promises to solve the callback hell code / pyramid doom


const heading1 = document.querySelector(".heading");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changedText(ele,txt,col,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(ele){
                ele.style.color = col;
                ele.textContent = txt;       
                resolve();
            }
            else{
                reject("something went wrong");
            }
        },time);       
    })
}

// We can do chaining like this. 
// const returnedPromise = changedText(heading1,"Heading 1","red",1000);
// returnedPromise.then(()=>{
//     changedText(heading2,"Heading 2","yellow",1000);
// })

// We can also do chaining like this its one of the best method. 😉
changedText(heading1,"Heading 1","yellow",2000)
.then(()=>{return changedText(heading2,"Heading 2","red",2000)})
.then(()=>{return changedText(heading3,"Heading 3","green",2000)})
.then(()=>{return changedText(heading4,"Heading 4","blue",2000)})
.then(()=>{return changedText(heading5,"Heading 5","pink",2000)})
.then(()=>{return changedText(heading6,"Heading 6","orange",2000)})
.then(()=>{return changedText(heading7,"Heading 7","green",2000)})

// TODO: Yaha return likhna jaruru hai becoz hume pehle changedText() function execution k baad wala promise chaiye agar return nhi likha toh yeh fatak se execute hojayega it will not wait for other (previous function) execution. 

// We know that we can shorten above code so lets shorten this.
changedText(heading1,"Heading 1","yellow",2000)
.then(()=> changedText(heading2,"Heading 2","red",2000))
.then(()=> changedText(heading3,"Heading 3","green",2000))
.then(()=> changedText(heading4,"Heading 4","blue",2000))
.then(()=> changedText(heading5,"Heading 5","pink",2000))
.then(()=> changedText(heading6,"Heading 6","orange",2000))
.then(()=> changedText(heading7,"Heading 7","green",2000))

// Boom we have shorten our code successfully.

// Now compare previous callback hell and pyramid doom ka code with this promise code, It looks more clean and easy. So this is the advantage of using promises. 

// Now suppose something wierd happened so here we can write .catch() lets see how we can do this. 
changedText(heading1,"Heading 1","yellow",2000)
.then(()=> changedText(heading2,"Heading 2","red",2000))
.then(()=> changedText(heading3,"Heading 3","green",2000))
.then(()=> changedText(heading4,"Heading 4","blue",2000))
.then(()=> changedText(heading5,"Heading 5","pink",2000))
.then(()=> changedText(heading6,"Heading 6","orange",2000))
.then(()=> changedText(heading7,"Heading 7","green",2000))
.catch((err)=> alert(err));  

// So In above code :- Jabhi bhi koi error ayega Kisi bhi line pe toh yeh agae ka code run nhi karega sirf .catch() ka code run karke return kardega.

