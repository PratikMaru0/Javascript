// Select element by using QuerySelector.

// TODO: This is one of the most important property of the JavaScript. Please isse ache se dekhlio!

// Previously we saw that document.getElementById only works for Id. Whereas querySelector works for all whether its class / id.

// console.log(document.querySelector("#header"));

// We can also store ans in variable / constant.
// const ans = document.querySelector("#header");
// console.log(ans);

// Now i want to select element header. How I will do this plz see it properly.
// const ans = document.querySelector("header");
// console.log(ans);

// Now i want to select element using class header. How I will do this plz see it properly.
// const ans = document.querySelector(".header");
// console.log(ans);    // Boom we got it. 

// See we have rule :- 
// 1). Ek baar kisi ko id de di eg:-header we cannot give same id to any other element. 
// 2). We can give className to multiple element. 
// These both are rules that we must know!

// .nav-item jiske pass yeh class hai humae sarae elements chaiye.
// const res = document.querySelector(".nav-item");
// console.log(res);   // But yaha toh sarae elements nhi mil rhe. I want all elements with the same class. Do we have any method to solve this method. Ans is yes we do have method. Lets see how to solve this. 
// const ans = document.querySelectorAll(".nav-item");
// console.log(ans);  // Boom we got all the elements that are having class nav-item. Its awesome isnt it ? Yes. Now lets see result that we got is array or object. 
// console.log(typeof ans);
// console.log(typeof Array.isArray(ans));    // Yes it looks like an array but its not an array. We'll see this later on. Becoz we can iterate over the result and it also has the length property. 

//// Iterating over "ans" that we got from querySelectorAll() method.
// for(let i=0;i<ans.length;i++){
//     console.log(ans[i]);
// }


