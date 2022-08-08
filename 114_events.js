// TODO: TODO: TODO: TODO: One of the most important topic of the Javascript. Plz do it properly.

// Intro to events. 

// Events means suppose user clicked on the button and we want something to happen (for eg :- Display hello msg.) So this button clicking is the event. Hovering can also be a event. 

// Humare pass bohot hi sarae events hai and we don't use all these events. 

// Very crucial (Important) event.

// We have 3 methods (tarike) to add an event.
// 1). We can add event directly to the element in the html file. we have performed this action in the html page's "learn-more" button. Like below line of code we use events inside an HTML code's element. We dont use this method becoz yeh bohot purana tarika hai kaam karne ka. So we will not use this method.

{/* <button class="btn btn-headline" onclick="console.log('Learn more button is clicked.')">Learn more</button> */}

// 2).  Suppose I want to fire an event where I have given class "btn-headline" . Now lets see how can I do this. This method we'll not use. Becoz we can't write click event more than once.  

// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("You clicked me");
// }

// 3). We have one method whose name is addEventListener to add an event. Lets see how to use this. This is best way to add an event to an element.

// document.querySelector(".btn-headline").addEventListener("click",()=>{
//     console.log("Hey you are clicking me again and again 🙃.")
// });


