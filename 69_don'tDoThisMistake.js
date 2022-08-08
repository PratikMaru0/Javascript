// Don't do this Mistake. 

const user = {
    fName : "Pratik",
    age : 8,
    about : function(){
        console.log(this);
        console.log(this.fName,this.age);
    }
}

// user.about();   // This is all we know.

// const myFunc = user.about;
// console.log(myFunc);   // This is also we know. 

// myFunc(); // Yaha output mai 'undefined undefined' aa rha hai. 


// So yeh galti mat karna. Nhi toh undefined undefined ayaga. Kyunki jabhi humne print karna chaha "this" ko toh window object de rha hai. 

// so humae ye statment " const myFunc = user.about; " k jagah yeh karna chaiye.
// const myFunc = user.about();  // Now it will going to work properly.

// We can also use bind method to set the value of "this"

// const myFunc = user.about.bind(user);   // Now we are setting the value of "this"  to "user"  using bind method.
// myFunc();

// TODO: Yeh bhi thodha ache se karlio.