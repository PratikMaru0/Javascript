// Arrow functions.

// Arrow functions ka bhi behaviour thodha different hai normal functions k mutabik.

const user = {
    fName : "Pratik",
    age : 20,
    about : () => {            // So yaha humne arrow function ko use kara hai and its behaviour is different.
        // console.log(this);   // Yeh humae window object dega. 
        // console.log(this.fName,this.age);    // returns "undefined undefined" kyunki arrow function k pass this nhi hota. Arrow function this apne surroundings se leta hai. Yeh arrow function ka this "window" object hoga.  
    }
}

// TODO: Note : Arrow function mai this nhi hota. Dyan se suna. I'm repeating Arrow function mai this nhi hota.
// user.about();

// Note: We cannot change the "this" of the arrow function 
// user.about.call(user);  // We also cant do like this. In this case also it will give you "undefined undefined"

// So ho sakta hai yeh thoda confusing lage toh hum project banayenge tabhi hum dekhege. "this" ki jarurat humae kab padegi.