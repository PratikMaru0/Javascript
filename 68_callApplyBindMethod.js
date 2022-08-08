// TODO: High practice needed. Plz practice this as much as you can. 

function hello(){
    console.log("Hello.... guys....");
}

// hello.call();   // we can also use .call() method to call a function.

// In javaScript we have call(), apply(), bind() method.

// Lets see how to apply this. 

function about(hobby,favMusician){
    console.log(this.fName,this.age);
    console.log(hobby,favMusician);
}

const user1 = {
    fName : "Pratik",
    age : 8, 
    // about : function(hobby,favMusician){     // Only when function is declared in the object. 
    //     console.log(this.fName,this.age);
    //     console.log(hobby,favMusician);
    // }
}

const user2 = {
    fName : "Raju",
    age : 9,
}

// user1.about();
// Now we dont have about function in user2 but I want to call about() function using user2. Now how we can do this ? Lets seeee....

// user1.about.call(user2);    // Yaha pe jo parameter mai (user2) dala hai woh "this" bata rha hai. means jabhi bhi this call hoga toh yeh user2.fName , user2.age call karega. 

// TODO: FIXME: Yeh bohot Important hai bhai plz ache se karlio !!!!
// user1.about.call(user2);

// Now what will be the output of the below code ? Lets see.
// user1.about.call();  // undefined undefined is the output of the above code!

// If u want to call for user1 also plz pass "user1" as a parameter.  Like this.
// user1.about.call(user1);    // Boom we did it.

// Now uncommenting this part "console.log(hobby,favMusician);" so that we can print this parameters also.
// user1.about.call(user1,"Guitar","Moazrt");   // So here we are passing our hobby as a parameters. 

// Only when you write function outside the object.
// about.call(user1,"guitar","Moazrt");

// Apply()
// about.apply(user1,["Guitar","Moazrt"]);   // It works same as call method. Just syntax are different.

// Bind. 
// Now what bind method will do ? 
// Lets see. 
// let func = about.bind(user1,"guitar","Moazrt");   // Bind kuch nhi karega bind() method sirf function return karega. We'll store this and run. 
// func();    // In future when I have to call func() method I can call this using () brackets.

// This is call, apply, bind method in JavaScript. 
// Thoda hai complicated But practice k sath perfect hojana hai. So DO PRACTICE!

// If Didnt understood watch video from timestamp : 8:55:00 to 9:04:00 10 mins only. 

// Agar yeh samaj aa gaya na toh agae apke liye bohot asan honae wali hai chije. So Im repeating once again. Plz ek baar ache se karlio practice. 



