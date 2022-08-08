// Event Object 

// TODO: One of the most Important topic in the JavaScript and one must do it properly. 

// const firstBtn = document.querySelector("#btn1");
// console.log(firstBtn);

// firstBtn.addEventListener("click",function(){
//     console.log(this);
// });

// See jab bhi mai kisi bhi element pe event listener ko add kara so:-
// We have js engine => Engine executes Js code line by line
// browser >---has---> js Engine + extra features
// browser >---has---> js Engine + WebApi (WebApi is small code [Applications] )
// jab browser ko pata chala ki user ne event perform kia jo hum event listen kr rhe hai usse  
// Browser 2 kaam karega. 
// 1). callback function hai usse browser js engine ko dega.
// 2). callback function k sath browser jo event hua hai uski information bhi dega.

// So yeh jo information browser de rha hai isse hume ek object k form mai dega. 
// We can recieve that information while adding addEventListener. Lets see how we can recieve that information. 

// We only have to pass argument in function in this case we are passing "event". Here "event" is object. 

// const firstBtn = document.querySelector("#btn1");
// firstBtn.addEventListener("click",function(event){
//     console.log(event);  // Boom we got that information.
// });


// ____________________________________________

const allButtons = document.querySelectorAll("button");
for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        // console.log(e);
        // console.log(e.target);  // target means :- kis element ne event ko trigger kia. here button element ne isko trigger kia hai toh<button/> tag mil jayega.
        // console.log(e.currentTarget);  // currentTarget means :- kis element p humne eventListener attach kia tha.
        console.log(e.currentTarget.textContent);      // We can also do like this.
    })
}

// Right now target and currentTarget mai koi difference najar nhi aa rha hoga. Becoz its giving same ouptut but afterwards we'll see eventBubbling n all tabhi humae pata chalega isme difference. 

// So hum konsa bhi use kar sakte hai.



