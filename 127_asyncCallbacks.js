// callbacks, callback hell, pyramid of doom

// asynchronous programming

// Lets change the heading of the webpage after 1 second.

// const head = document.querySelector(".heading1");

// setTimeout(()=>{
//     head.innerText = "Heading 1";
// },2000);   // Boom we did it !


// const arr = document.querySelectorAll("h1");
// // console.log(arr.length);

// for(let i=1;i<=arr.length;i++){
//     setTimeout(()=>{
//         const head = document.querySelector(`.heading${i}`);
//         head.innerText = `Heading ${i}`;
//         head.style.color = "violet";
//     },2000); 
// }

// TODO:  Now I want to change the all heading of the webpage after 1 second intervals. Lets see how to do this.  


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// This looks like callback hell. Means itne sarae callbacks.... 
// setTimeout(()=>{
//     heading1.textContent = "heading 1";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "heading 2";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "heading 3";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "heading 4";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "heading 5";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "heading 6";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "heading 7";
//                             heading7.style.color = "brown";
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);    // Boom we did it. 

// Its really very confusing becoz yeh nested callbacks hai iske andar k andar k andar..... functions ko call kar rhe hai which seems thst we are not doing right thing. Ans is yeh this is not right way in a short while we'll learn about promises. Waha hum ache se yeh sari chijo ko handle karenge. Above code that is created using nested function is known as callback hell. Aise codes ko read karna maintain karna bohot mushkil hai.


// So using promises we will avoid nesting means we can make code flat using promises. So to saw worth of the promises here we talked and performed callback hell. So that we can get to know how important promises are.

// Lets make function ka hell. 😂
function changeText(ele,txt,col,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(ele){
            ele.textContent = txt;
            ele.style.color = col;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }
        else{
            // alert("Sorry element doesnt exists");
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time);
}

// Boom this is the function hell. Ahh This is known as pyramid of doom. 
changeText(heading1,"heading 1","red",1000, ()=>{
    changeText(heading2,"heading 2","violet",1000,()=>{
        changeText(heading3,"heading 3","green",1000,()=>{
            changeText(heading4,"heading 4","yellow",1000,()=>{
                changeText(heading5,"heading 5","orange",1000,()=>{
                    changeText(heading6,"heading 6","pink",1000,()=>{
                        changeText(heading7,"heading 7","blue",1000,()=>{
                        },()=>{console.log("Heading 1 Doesnt exists");});
                    },()=>{console.log("Heading 2 Doesnt exists.")});
                },()=>{console.log("Heading 3 Doesnt exists.")});
            },()=>{console.log("Heading 3 Doesnt exists.")});
        },()=>{console.log("Heading 4 Doesnt exists.")});
    },()=>{console.log("Heading 5 Doesnt exists.")});
},()=>{console.log("Heading 6 Doesnt exists.")});


// changeText(heading1,"heading 1","green",1000,()=>{},()=>{
//     console.log("Headin not exst")
// });
